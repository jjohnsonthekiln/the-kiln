// functions/api/cuecards.js
//
// On-camera cue cards, gated on the same admin password as the rest of the console.
// The decks live in _cuecard-data.js, which Pages does not route and never serves as
// an asset in production — so an unauthenticated visitor has no path to the content.
//
// No CORS headers, deliberately: cuecards.html is same-origin, and their absence keeps
// another site's page from POSTing password guesses here through a visitor's browser.

import { DECKS } from './_cuecard-data.js'

const JSON_HEADERS = { 'Content-Type': 'application/json' }

function respond(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS })
}

export async function onRequestPost(context) {
  const { request, env } = context

  try {
    const { password, action, slug } = await request.json()

    if (!env.ADMIN_PASSWORD || password !== env.ADMIN_PASSWORD) {
      return respond({ error: 'Unauthorized' }, 401)
    }

    if (action === 'list') {
      const decks = DECKS.slice()
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map((d) => ({ slug: d.slug, title: d.title, date: d.date, cards: d.cards.length }))
      return respond({ decks })
    }

    if (action === 'get') {
      const deck = DECKS.find((d) => d.slug === slug)
      return deck ? respond({ deck }) : respond({ error: 'No cue cards for that slug' }, 404)
    }

    return respond({ error: 'Unknown action' }, 400)
  } catch (err) {
    return respond({ error: err.message || 'Bad request' }, 400)
  }
}
