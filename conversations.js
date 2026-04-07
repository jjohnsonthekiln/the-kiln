// functions/api/conversations.js
// Secure proxy — Supabase keys never leave the server

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const ADMIN_PASSWORD = 'kiln2026'; // change this

export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { password, action, session_id, lang, date_from, date_to, limit = 50, offset = 0 } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) {
      return new Response(JSON.stringify({ error: 'Supabase not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    const headers = {
      'Content-Type': 'application/json',
      'apikey': env.SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${env.SUPABASE_ANON_KEY}`,
    };

    if (action === 'sessions') {
      // Get distinct sessions with metadata
      let url = `${env.SUPABASE_URL}/rest/v1/conversations?select=session_id,lang,created_at&order=created_at.desc`;
      if (lang)      url += `&lang=eq.${lang}`;
      if (date_from) url += `&created_at=gte.${date_from}`;
      if (date_to)   url += `&created_at=lte.${date_to}`;
      url += `&limit=${limit}&offset=${offset}`;

      const res = await fetch(url, { headers });
      const data = await res.json();

      // Deduplicate sessions client-side
      const seen = new Set();
      const sessions = data.filter(r => {
        if (seen.has(r.session_id)) return false;
        seen.add(r.session_id);
        return true;
      });

      return new Response(JSON.stringify({ sessions }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (action === 'messages' && session_id) {
      const url = `${env.SUPABASE_URL}/rest/v1/conversations?session_id=eq.${session_id}&order=turn.asc&select=*`;
      const res = await fetch(url, { headers });
      const data = await res.json();
      return new Response(JSON.stringify({ messages: data }), {
        headers: { 'Content-Type': 'application/json', ...CORS },
      });
    }

    if (action === 'stats') {
      const [totalRes, langRes] = await Promise.all([
        fetch(`${env.SUPABASE_URL}/rest/v1/conversations?select=id`, { headers: { ...headers, 'Prefer': 'count=exact', 'Range': '0-0' } }),
        fetch(`${env.SUPABASE_URL}/rest/v1/conversations?select=lang`, { headers }),
      ]);
      const total = totalRes.headers.get('content-range')?.split('/')[1] ?? '?';
      const langData = await langRes.json();
      const langCounts = langData.reduce((acc, r) => { acc[r.lang] = (acc[r.lang] || 0) + 1; return acc; }, {});
      return new Response(JSON.stringify({ total, langCounts }), {
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
