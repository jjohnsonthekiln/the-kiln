// functions/api/gp-conversations.js
// Secure proxy for Great Physician conversations
// Schema: conversations(session_id, role, content, created_at) — one row per message
// Requires env vars: GP_SUPABASE_URL, GP_SUPABASE_SERVICE_KEY

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Admin password is a server-side secret (Cloudflare Pages env var), never
// shipped to the browser. Set ADMIN_PASSWORD in the Pages project settings.

export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { password, action, session_id, date_from, date_to, limit = 50, offset = 0 } = await request.json();

    if (!env.ADMIN_PASSWORD || password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (!env.GP_SUPABASE_URL || !env.GP_SUPABASE_SERVICE_KEY) {
      return new Response(JSON.stringify({ error: 'GP Supabase not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    const headers = {
      'Content-Type': 'application/json',
      'apikey': env.GP_SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${env.GP_SUPABASE_SERVICE_KEY}`,
    };

    // ── SESSIONS ──────────────────────────────────────────
    // GP has no `lang` column. We pull a generous chunk of recent rows
    // and dedupe by session_id, keeping the most-recent timestamp per session.
    if (action === 'sessions') {
      // Pull more rows than needed because each session has many message rows.
      // 5000 rows comfortably covers thousands of sessions.
      let url = `${env.GP_SUPABASE_URL}/rest/v1/conversations?select=session_id,created_at&order=created_at.desc&limit=5000`;
      if (date_from) url += `&created_at=gte.${date_from}`;
      if (date_to)   url += `&created_at=lte.${date_to}`;

      const res = await fetch(url, { headers });
      const data = await res.json();

      if (!Array.isArray(data)) {
        return new Response(JSON.stringify({ error: 'Supabase error', detail: data }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS },
        });
      }

      // Dedupe: first occurrence (rows are desc by created_at, so first = most recent)
      const seen = new Set();
      const allSessions = [];
      for (const r of data) {
        if (!r.session_id || seen.has(r.session_id)) continue;
        seen.add(r.session_id);
        allSessions.push({ session_id: r.session_id, created_at: r.created_at });
      }

      // Apply pagination after dedupe
      const sessions = allSessions.slice(offset, offset + limit);

      return new Response(JSON.stringify({ sessions, total_sessions: allSessions.length }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    // ── MESSAGES ──────────────────────────────────────────
    // Returns rows ordered by created_at; each row has role + content.
    if (action === 'messages' && session_id) {
      const url = `${env.GP_SUPABASE_URL}/rest/v1/conversations?session_id=eq.${session_id}&order=created_at.asc&select=*`;
      const res = await fetch(url, { headers });
      const data = await res.json();
      return new Response(JSON.stringify({ messages: data }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    // ── STATS ─────────────────────────────────────────────
    // Total messages + total distinct sessions (no lang breakdown for GP).
    if (action === 'stats') {
      const [totalRes, sessionsRes] = await Promise.all([
        fetch(`${env.GP_SUPABASE_URL}/rest/v1/conversations?select=session_id`, {
          headers: { ...headers, 'Prefer': 'count=exact', 'Range': '0-0' },
        }),
        fetch(`${env.GP_SUPABASE_URL}/rest/v1/conversations?select=session_id&limit=10000`, { headers }),
      ]);
      const total = totalRes.headers.get('content-range')?.split('/')[1] ?? '?';
      const rows = await sessionsRes.json();
      const distinct = Array.isArray(rows)
        ? new Set(rows.map(r => r.session_id).filter(Boolean)).size
        : 0;
      return new Response(JSON.stringify({ total, sessions: distinct }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    // ── DELETE ────────────────────────────────────────────
    if (action === 'delete' && session_id) {
      const url = `${env.GP_SUPABASE_URL}/rest/v1/conversations?session_id=eq.${session_id}`;
      const res = await fetch(url, { method: 'DELETE', headers });
      if (!res.ok) {
        const err = await res.text();
        return new Response(JSON.stringify({ error: 'Delete failed: ' + err }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...CORS },
        });
      }
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...CORS },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS },
    });
  }
}
