// functions/api/prep.js
//
// Podcast / video prep sheets, gated on the same admin password as the rest of
// the console. The sheets live in _prep-data.js, which Pages does not route and
// never serves as an asset — so an unauthenticated visitor has no path to the
// content at all, not merely no link to it.
//
// No CORS headers, deliberately. prep.html is same-origin, so it needs none, and
// their absence keeps another site's page from POSTing password guesses here
// through a visitor's browser. (conversations.js predates this and allows '*'.)

import { SHEETS } from './_prep-data.js'

const JSON_HEADERS = { 'Content-Type': 'application/json' }

/** Everything the index needs, and nothing that would be worth reading unauthenticated. */
function summarize(sheet) {
  return {
    slug: sheet.slug,
    title: sheet.title,
    date: sheet.date,
    runtime: sheet.runtime,
  }
}

export async function onRequestPost(context) {
  const { request, env } = context

  try {
    const { password, action, slug } = await request.json()

    if (!env.ADMIN_PASSWORD || password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: JSON_HEADERS,
      })
    }

    if (action === 'list') {
      const sheets = SHEETS.slice()
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map(summarize)
      return new Response(JSON.stringify({ sheets }), { headers: JSON_HEADERS })
    }

    if (action === 'get') {
      const sheet = SHEETS.find((s) => s.slug === slug)
      if (!sheet) {
        return new Response(JSON.stringify({ error: 'No prep sheet for that slug' }), {
          status: 404,
          headers: JSON_HEADERS,
        })
      }
      return new Response(JSON.stringify({ sheet }), { headers: JSON_HEADERS })
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'Bad request' }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }
}
