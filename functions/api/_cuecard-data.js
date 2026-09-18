// functions/api/_cuecard-data.js
//
// On-camera cue cards, one deck per published article. A card is one movement of the
// article: a heading, a few short talking points, and the scripture that backs them,
// in the order they are said. Cues, not script — a glance should be enough.
//
// Underscore-prefixed, so Cloudflare Pages does not route this file, and functions/ is
// never served as a static asset in production. The only way in is cuecards.js, which
// checks ADMIN_PASSWORD first. (`wrangler pages dev` DOES serve it locally — dev only.)
//
// Card flow items, in speaking order:
//   { t: 'point',     text }       a talking point — keep it short
//   { t: 'scripture', ref, text }  Scripture, read aloud
//   { t: 'quote',     ref, text }  any other source read aloud; styled apart from Scripture

export const DECKS = [
  {
    slug: 'gospel-centered-counseling',
    title: 'Gospel-Centered Counseling',
    date: '2026-09-16',
    article: 'https://thegreatphysician.ai/post?slug=gospel-centered-counseling',
    cards: [
      {
        heading: 'Believe and confess',
        flow: [
          { t: 'scripture', ref: 'Romans 10:9–10', text: 'Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved.' },
        ],
      },
      {
        heading: 'Two names, one thing',
        flow: [
          { t: 'point', text: 'Christ-centered = gospel-centered' },
          { t: 'point', text: 'You can’t have Christ without His work' },
          { t: 'point', text: 'No cross, no empty tomb → just advice with His name on it' },
          { t: 'point', text: 'The Gospel isn’t the doorway to the help — it IS the help' },
        ],
      },
      {
        heading: 'What the Gospel is',
        flow: [
          { t: 'point', text: 'Not a mood — news. Events that happened.' },
          { t: 'scripture', ref: '1 Corinthians 15:3–4', text: 'For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.' },
          { t: 'point', text: 'Died · buried · raised — true before you felt anything' },
          { t: 'point', text: 'A mood can’t hold weight. An event can.' },
        ],
      },
      {
        heading: 'The core of who you are',
        flow: [
          { t: 'point', text: 'Not a chapter of your story — the ground under it' },
          { t: 'scripture', ref: 'Galatians 2:20', text: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.' },
          { t: 'point', text: '“Who loved ME” — Paul puts himself in the sentence' },
        ],
      },
      {
        heading: 'Hidden with Christ',
        flow: [
          { t: 'scripture', ref: 'Colossians 3:3', text: 'For you have died, and your life is hidden with Christ in God.' },
          { t: 'point', text: 'Not hidden in your performance, your feelings, or your marriage' },
          { t: 'point', text: 'Those all move. This does not.' },
        ],
      },
      {
        heading: 'Life’s daunting things',
        flow: [
          { t: 'point', text: 'Marriage · a child who walked away · despair · depression · worthlessness · sexual temptation' },
          { t: 'point', text: 'The Gospel doesn’t make them weightless' },
          { t: 'point', text: 'But none of them reaches the bottom' },
          { t: 'scripture', ref: '2 Corinthians 4:8–9', text: 'We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed.' },
          { t: 'point', text: 'The pressure is real. The floor holds.' },
        ],
      },
      {
        heading: 'Train your heart to remember',
        flow: [
          { t: 'point', text: 'Nothing brings the Gospel to mind automatically — not grief, not 3 a.m.' },
          { t: 'point', text: 'Remembering is a discipline you train' },
          { t: 'scripture', ref: 'Lamentations 3:21–23', text: 'But this I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.' },
        ],
      },
      {
        heading: '“This I call to mind”',
        flow: [
          { t: 'point', text: 'An act of the will — against the current of his feelings' },
          { t: 'point', text: 'He doesn’t wait to feel God’s mercies. He calls them to mind.' },
          { t: 'point', text: 'Appropriate the Gospel: take what you already own, and use it today' },
        ],
      },
      {
        heading: 'Fleas, soldiers, and solace',
        flow: [
          { t: 'point', text: 'Corrie & Betsie ten Boom — Ravensbrück' },
          { t: 'point', text: 'Barracks crawling with fleas — Betsie gives thanks anyway' },
          { t: 'scripture', ref: '1 Thessalonians 5:16–18', text: 'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.' },
        ],
      },
      {
        heading: 'Where solace is found',
        flow: [
          { t: 'point', text: 'The fleas kept the guards out — the Bible read aloud, night after night' },
          { t: 'point', text: 'Not “suffering turned out fine” — Betsie died there' },
          { t: 'point', text: 'It’s about where solace is found' },
          { t: 'point', text: 'If it held in Ravensbrück, it holds at 3 a.m.' },
        ],
      },
      {
        heading: 'What cannot be taken',
        flow: [
          { t: 'scripture', ref: 'Romans 8:35, 37', text: 'Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword? … No, in all these things we are more than conquerors through him who loved us.' },
          { t: 'scripture', ref: 'Romans 8:38–39', text: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.' },
          { t: 'point', text: 'Paul assumes the hardship — and denies it can reach God’s love' },
        ],
      },
      {
        heading: 'Close',
        flow: [
          { t: 'point', text: 'Both names → the same Person, the same finished work' },
          { t: 'point', text: 'Nothing bigger than the cross. Nothing surer than the empty tomb.' },
          { t: 'point', text: 'Train your heart to remember — and live today on it' },
        ],
      },
    ],
  },
  {
    slug: 'what-is-christ-centered-biblical-counseling',
    title: 'What Is Christ-Centered Biblical Counseling?',
    date: '2026-09-13',
    article: 'https://thegreatphysician.ai/post?slug=what-is-christ-centered-biblical-counseling',
    cards: [
      {
        heading: 'Two convictions',
        flow: [
          { t: 'point', text: 'What makes counseling “biblical”? Not method.' },
          { t: 'point', text: 'God’s Word is sufficient' },
          { t: 'point', text: 'Jesus Christ is sufficient' },
          { t: 'point', text: 'Really one conviction, seen from two sides' },
        ],
      },
      {
        heading: 'God’s Word is sufficient',
        flow: [
          { t: 'point', text: 'Not an encyclopedia — fully adequate for what it addresses' },
          { t: 'point', text: 'Who you are · what’s wrong · how God restores' },
          { t: 'scripture', ref: '2 Timothy 3:16–17', text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.' },
          { t: 'point', text: 'Complete — equipped for EVERY good work. Not partly.' },
        ],
      },
      {
        heading: 'An appetite for the Word',
        flow: [
          { t: 'point', text: 'Job: lost everything, given no explanation' },
          { t: 'scripture', ref: 'Job 23:12', text: 'I have not departed from the commandment of his lips; I have treasured the words of his mouth more than my portion of food.' },
          { t: 'point', text: 'More than his food — not information, an appetite' },
          { t: 'point', text: 'Counseling cultivates that appetite' },
        ],
      },
      {
        heading: 'When someone begins to obey',
        flow: [
          { t: 'point', text: 'Cutting · substances · a long list of prescriptions' },
          { t: 'point', text: 'Whole lives turned around through simple obedience' },
          { t: 'point', text: 'No technique — trust the God who spoke, do the next thing He said' },
          { t: 'point', text: 'The hinge: realizing Jesus Christ is all they need' },
          { t: 'point', text: 'The Bible as demands crushes. As the place Christ is offered, it heals.' },
        ],
      },
      {
        heading: 'Jesus Christ is sufficient',
        flow: [
          { t: 'point', text: 'The Word is sufficient because the Word became flesh' },
          { t: 'point', text: 'Without Christ: a standard you can’t keep, a diagnosis you can’t cure' },
          { t: 'scripture', ref: 'Colossians 2:9–10', text: 'For in him the whole fullness of deity dwells bodily, and you have been filled in him, who is the head of all rule and authority.' },
          { t: 'point', text: 'You HAVE BEEN filled — not being filled, not someday' },
          { t: 'point', text: 'Lacking nothing — for salvation or sanctification' },
        ],
      },
      {
        heading: 'The definition',
        flow: [
          { t: 'point', text: 'Jesus Christ is entirely enough for a person’s salvation, spiritual completeness, and daily life — requiring no human additions, good works, or alternative philosophies to reconcile someone to God.' },
          { t: 'scripture', ref: 'Colossians 2:8', text: 'See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.' },
          { t: 'point', text: 'Sufficiency is the first thing every rival to Christ attacks' },
        ],
      },
      {
        heading: 'The way in is the way on',
        flow: [
          { t: 'point', text: 'Saved by grace — then finished by effort?' },
          { t: 'scripture', ref: 'Colossians 2:6', text: 'Therefore, as you received Christ Jesus the Lord, so walk in him.' },
          { t: 'point', text: 'Paul won’t allow the split' },
        ],
      },
      {
        heading: 'Coming empty-handed',
        flow: [
          { t: 'point', text: 'We offer nothing — so He provides everything' },
          { t: 'point', text: 'If I had to bring something, I’d eventually run out' },
          { t: 'point', text: 'An empty hand can be filled every morning' },
          { t: 'point', text: 'The goal: not a managed life — a person who receives everything from Christ' },
        ],
      },
      {
        heading: 'Close',
        flow: [
          { t: 'point', text: 'One person opening God’s sufficient Word…' },
          { t: 'point', text: '…to bring another to God’s all-sufficient Son' },
          { t: 'point', text: 'Everything else is detail' },
        ],
      },
    ],
  },
  {
    slug: 'we-must-think-with-our-own-minds',
    title: 'We Must Think With Our Own Minds',
    date: '2026-09-05',
    article: 'https://thegreatphysician.ai/post?slug=we-must-think-with-our-own-minds',
    cards: [
      {
        heading: 'A king refuses a gift',
        flow: [
          { t: 'point', text: 'Theuth brings writing to King Thamus — “a remedy for memory”' },
          { t: 'point', text: 'Thamus: the inventor is not the best judge of his invention' },
          { t: 'quote', ref: 'Plato, Phaedrus 274c–275b', text: 'This invention will produce forgetfulness in the souls of those who learn it, because they will not practice their memory. You have discovered a remedy not for memory but for reminding. You offer your students the appearance of wisdom, not wisdom itself.' },
        ],
      },
      {
        heading: 'Thamus’s three charges',
        flow: [
          { t: 'point', text: 'Writing weakens memory' },
          { t: 'point', text: 'It gives the illusion of understanding' },
          { t: 'point', text: 'It can’t pass on real knowledge — that lives in a person, in conversation' },
        ],
      },
      {
        heading: 'Thamus was right — and wrong',
        flow: [
          { t: 'point', text: 'We only know his objection because Plato wrote it down' },
          { t: 'point', text: 'Writing built libraries and carried the Gospel' },
          { t: 'point', text: 'Yet: the phone number you saved — and forgot' },
          { t: 'point', text: 'Every tool that carries a burden carries away the strength' },
          { t: 'point', text: 'The real question: what does it do to the soul that leans on it?' },
        ],
      },
      {
        heading: 'The scroll that answers back',
        flow: [
          { t: 'point', text: 'Socrates: a text can’t answer questions' },
          { t: 'point', text: 'AI answers back — and removes the last friction that made us think' },
          { t: 'point', text: 'The result feels like your own thought' },
          { t: 'point', text: 'A remedy for reminding — at planetary scale' },
          { t: 'point', text: 'I build these tools. Not against the tool — against letting it think for us.' },
        ],
      },
      {
        heading: 'Words made the world',
        flow: [
          { t: 'point', text: 'God spoke — the universe was said, not hammered' },
          { t: 'scripture', ref: 'Psalm 33:6, 9', text: 'By the word of the LORD the heavens were made … For he spoke, and it came to be; he commanded, and it stood firm.' },
          { t: 'point', text: 'Whose words are you living on — and where do they live?' },
        ],
      },
      {
        heading: 'God told men to write',
        flow: [
          { t: 'point', text: 'Write it in a book · tablets of stone · “make it plain”' },
          { t: 'point', text: 'And: the king copies the law by his own hand, reads it every day' },
          { t: 'scripture', ref: 'Deuteronomy 6:6–7', text: 'These words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way.' },
          { t: 'point', text: 'Writing replacing the mind → forgetfulness' },
          { t: 'point', text: 'Writing feeding the mind → wisdom' },
        ],
      },
      {
        heading: 'The Word became flesh',
        flow: [
          { t: 'scripture', ref: 'John 1:1, 14', text: 'In the beginning was the Word, and the Word was with God, and the Word was God … And the Word became flesh and dwelt among us, and we have seen his glory.' },
          { t: 'point', text: 'The living Word Socrates longed for — a Person' },
          { t: 'point', text: 'Not a text, not a technology. The speech that made the universe had a face.' },
        ],
      },
      {
        heading: 'He opened the Scriptures',
        flow: [
          { t: 'point', text: 'Emmaus: two grieving disciples, and a stranger on the road' },
          { t: 'scripture', ref: 'Luke 24:32', text: 'Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?' },
          { t: 'scripture', ref: 'Colossians 2:3', text: 'In whom are hidden all the treasures of wisdom and knowledge.' },
          { t: 'point', text: 'Knowledge, finally, is knowing a Person' },
        ],
      },
      {
        heading: 'What AI is — and is not',
        flow: [
          { t: 'point', text: 'Astonishingly well-informed — I use it every day' },
          { t: 'point', text: 'Not made in God’s image · no soul · cannot fear the Lord' },
          { t: 'point', text: 'Read everything — understood nothing that lasts' },
          { t: 'point', text: 'Your mind: the instrument God gave you to know Him' },
          { t: 'point', text: 'A machine can’t have its heart burn within it' },
        ],
      },
      {
        heading: 'Five charges',
        flow: [
          { t: 'point', text: '1 · Read the thing itself — like the Bereans (Acts 17:11)' },
          { t: 'point', text: '2 · Do the work before you ask for help' },
          { t: 'scripture', ref: '2 Corinthians 10:5', text: 'Take every thought captive to obey Christ.' },
          { t: 'point', text: '3 · Write it in your own hand' },
          { t: 'point', text: '4 · Talk it through with a person' },
          { t: 'point', text: '5 · Know Him' },
        ],
      },
      {
        heading: 'Close',
        flow: [
          { t: 'point', text: 'Thamus feared the appearance of wisdom without the substance' },
          { t: 'point', text: 'We’ve built something far stronger' },
          { t: 'point', text: 'The remedy since Deuteronomy: read it · hide it · speak it · think it' },
          { t: 'point', text: 'No machine can do that for you — that’s the glory of bearing God’s image' },
        ],
      },
    ],
  },
]
