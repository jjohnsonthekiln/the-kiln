// functions/api/_prep-data.js
//
// Podcast / video prep sheets, one per published article.
//
// Underscore-prefixed, so Cloudflare Pages does not route this file. Functions
// source is executed rather than served, so this content never reaches a browser
// except through prep.js, which checks ADMIN_PASSWORD first.
//
// Shape of a sheet:
//   slug      matches the article's slug on the publishing site
//   segments  the spoken arc, in order
//   flow      ordered items inside a segment, so scripture sits where it is read:
//               { t: 'beat',      text }       - a talking point, set in large type
//               { t: 'scripture', ref, text }  - read aloud verbatim
//               { t: 'note',      text }       - a direction to yourself, not spoken

export const SHEETS = [
  {
    slug: 'what-is-christ-centered-biblical-counseling',
    title: 'What Is Christ-Centered Biblical Counseling?',
    date: '2026-09-13',
    runtime: '12–15 min',
    article: 'https://thegreatphysician.ai/post?slug=what-is-christ-centered-biblical-counseling',
    premise:
      'Two convictions hold up everything else — God’s Word is sufficient, and Jesus Christ is enough. ' +
      'They are finally the same conviction seen from two sides.',
    segments: [
      {
        heading: 'Open — the question behind the question',
        flow: [
          { t: 'beat', text: 'People ask what makes counseling “biblical.” They expect an answer about method — do you quote verses over problems? do you avoid certain vocabulary?' },
          { t: 'beat', text: 'The method is downstream. It starts somewhere else entirely.' },
          { t: 'beat', text: 'Two convictions — and by the end you will see they are really one.' },
          { t: 'note', text: 'Do not preview the whole outline here. Let the second half land as a turn, not a bullet.' },
        ],
      },
      {
        heading: '1. God’s Word is sufficient',
        flow: [
          { t: 'beat', text: 'Sufficient does not mean the Bible is an encyclopedia of every subject. It is not, and it never claimed to be.' },
          { t: 'beat', text: 'It means that on what it actually addresses — who you are, what has gone wrong in you, what God has done about it, how a person is restored — it is entirely adequate. It does not need supplementing before it can do its work.' },
          { t: 'scripture', ref: '2 Timothy 3:16–17', text: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.' },
          { t: 'beat', text: 'Notice where Paul lands. Not partly equipped. Not equipped for the spiritual portion of life while something else handles the rest. Complete — equipped for every good work.' },
          { t: 'beat', text: 'The counselor who does not believe that will always be reaching past Scripture for something with more perceived horsepower.' },
          { t: 'note', text: 'Pause here. This is the load-bearing claim of the whole episode.' },
          { t: 'beat', text: 'Job makes the same claim from the other direction — not a theologian defending a doctrine, but a man who had lost nearly everything and been given no explanation for any of it.' },
          { t: 'scripture', ref: 'Job 23:12', text: 'I have not departed from the commandment of his lips; I have treasured the words of his mouth more than my portion of food.' },
          { t: 'beat', text: 'More than his food. Not more than his entertainment, or his opinions, or his free time — more than the thing his body could not live without.' },
          { t: 'beat', text: 'That is not a man who has been informed by Scripture. That is a man who has developed an appetite for it. Cultivating that appetite in another person is a large part of what counseling is for.' },
        ],
      },
      {
        heading: '2. What happens when someone begins to obey',
        flow: [
          { t: 'note', text: 'Personal testimony. Slow down. Keep every detail non-identifying.' },
          { t: 'beat', text: 'I have sat across from counselees who were cutting themselves. Who were numbing their pain with substances. Who came in carrying a long list of psychiatric prescriptions.' },
          { t: 'beat', text: 'And I have watched entire lives turn around when they began to act in simple obedience and submission to what God says.' },
          { t: 'beat', text: 'There was nothing clever about it. No technique. The change did not arrive because we finally located the right explanation for their past.' },
          { t: 'beat', text: 'It came as they trusted the God who had spoken, and then did the next thing He said — and as they came to see that Jesus Christ is all they need.' },
          { t: 'beat', text: 'That last part is the hinge, not an afterthought. A counselee can be taught the Bible and still be crushed by it, if the Bible is handed to him as a set of demands rather than as the place where Christ is offered.' },
          { t: 'note', text: 'This is the turn into part two. Let it breathe.' },
        ],
      },
      {
        heading: '3. Jesus Christ is sufficient',
        flow: [
          { t: 'beat', text: 'Scripture is sufficient because of the One it delivers. The Word is sufficient because the Word became flesh.' },
          { t: 'beat', text: 'Take Christ out of the Bible and what remains is a standard you cannot keep and a diagnosis you cannot cure. Leave Him in it, and every page is doing the same work — bringing an empty person to a full Savior.' },
          { t: 'scripture', ref: 'Colossians 2:9–10', text: 'For in him the whole fullness of deity dwells bodily, and you have been filled in him, who is the head of all rule and authority.' },
          { t: 'beat', text: 'You HAVE BEEN filled in him. Not you are being filled, slowly, if you apply yourself. Not you will be filled once you have made enough progress.' },
          { t: 'beat', text: 'Because of Christ, you lack nothing for your salvation — and you lack nothing for your sanctification.' },
          { t: 'note', text: 'The definition. Say it slowly, and say it twice if it helps — everything else hangs on it.' },
          { t: 'beat', text: 'Jesus Christ is entirely enough for a person’s salvation, spiritual completeness, and daily life, requiring no human additions, good works, or alternative philosophies to reconcile someone to God.' },
          { t: 'beat', text: 'That last phrase is Paul’s own concern in this very chapter. Three verses earlier he warns them not to be taken captive by philosophy and empty deceit, according to human tradition, and not according to Christ.' },
          { t: 'scripture', ref: 'Colossians 2:8', text: 'See to it that no one takes you captive by philosophy and empty deceit, according to human tradition, according to the elemental spirits of the world, and not according to Christ.' },
          { t: 'beat', text: 'Sufficiency is not one doctrine sitting quietly among others. It is the first thing every rival to Christ goes after.' },
          { t: 'beat', text: 'Most Christians agree readily about the first half. Nothing can be added to the cross; we contributed nothing to our rescue. Then, having been saved by grace, they set about finishing the job on their own strength — as if grace got them in the door and effort has to carry them the rest of the way.' },
          { t: 'scripture', ref: 'Colossians 2:6', text: 'Therefore, as you received Christ Jesus the Lord, so walk in him.' },
          { t: 'beat', text: 'Paul will not allow the split. The same way in is the way on.' },
        ],
      },
      {
        heading: '4. Coming empty-handed',
        flow: [
          { t: 'beat', text: 'What a relief it is to know that we come to Christ empty-handed every day.' },
          { t: 'beat', text: 'We offer nothing — and that is precisely the good news, because it means He provides everything we need.' },
          { t: 'beat', text: 'If I had to bring something, I would have to keep bringing it, and sooner or later I would run out. An empty hand can be filled every morning.' },
          { t: 'beat', text: 'This is what separates Christ-centered counseling from counseling that merely quotes the Bible. The goal is not a better-managed life, or a person who has learned to white-knuckle his way past a besetting sin.' },
          { t: 'beat', text: 'The goal is a person who has learned to receive everything from Christ — and who therefore has somewhere to go on the day his own resources fail him again.' },
        ],
      },
      {
        heading: 'Close',
        flow: [
          { t: 'beat', text: 'So what is Christ-centered biblical counseling? It is one person opening God’s sufficient Word in order to bring another person to God’s all-sufficient Son.' },
          { t: 'beat', text: 'Everything else is detail.' },
          { t: 'note', text: 'Point listeners to the full article at thegreatphysician.ai.' },
        ],
      },
    ],
  },
  {
    slug: 'we-must-think-with-our-own-minds',
    title: 'We Must Think With Our Own Minds',
    date: '2026-09-05',
    runtime: '20–25 min',
    article: 'https://thegreatphysician.ai/post?slug=we-must-think-with-our-own-minds',
    premise:
      'The oldest warning about a technology of knowing is 2,400 years old. Socrates feared a scroll ' +
      'that could not answer back; we have built the scroll that does. The remedy has not changed ' +
      'since Deuteronomy — read it yourself, hide it in your own heart, think with your own mind.',
    segments: [
      {
        heading: 'Open — a king refuses a gift',
        flow: [
          { t: 'note', text: 'Tell this as a story, not a citation. The listener should not feel they are in a philosophy lecture.' },
          { t: 'beat', text: 'Near the end of Plato’s Phaedrus, Socrates tells a story from Egypt. The god Theuth — inventor of number, geometry, astronomy, and letters — brings his inventions to Thamus the king.' },
          { t: 'beat', text: 'When he comes to writing he makes his boldest claim: this will make the Egyptians wiser and improve their memories. He has discovered, he says, a remedy for memory and wisdom.' },
          { t: 'beat', text: 'Thamus is not impressed. The inventor of a thing, he says, is not the best judge of what it will do to the people who use it.' },
          { t: 'scripture', ref: 'Plato, Phaedrus 274c–275b', text: 'This invention will produce forgetfulness in the souls of those who learn it, because they will not practice their memory. You have discovered a remedy not for memory but for reminding. You offer your students the appearance of wisdom, not wisdom itself.' },
          { t: 'beat', text: 'Three charges. Writing weakens memory. It creates the illusion of understanding. And it cannot convey real knowledge, because real knowledge lives in a person and passes from person to person in conversation.' },
        ],
      },
      {
        heading: '1. Thamus was right — and we know it because someone wrote it down',
        flow: [
          { t: 'beat', text: 'There is an irony Plato surely intended. We know Socrates’ objection to writing only because Plato wrote it down. Socrates himself wrote nothing. Had his students shared his scruple, his name would have died in the marketplace.' },
          { t: 'beat', text: 'So Thamus was not simply right. Writing built libraries, preserved the law, carried the Gospel to the ends of the earth.' },
          { t: 'beat', text: 'But he was not simply wrong either. Anyone who has watched a phone number vanish from memory the moment it was saved to a contact list knows exactly what he meant.' },
          { t: 'beat', text: 'Every tool that carries a burden for us also carries away the strength we would have gained by carrying it ourselves.' },
          { t: 'note', text: 'This is the sentence to land hardest in the first half. Pause after it.' },
          { t: 'beat', text: 'The question Thamus asks is not “Is this invention useful?” It is “What will it do to the soul of the one who leans on it?” — and that is the right question to ask about artificial intelligence.' },
        ],
      },
      {
        heading: '2. The text that answers back',
        flow: [
          { t: 'beat', text: 'Socrates’ deepest complaint was that a text cannot answer questions. Ask the scroll what it means and it is silent.' },
          { t: 'beat', text: 'We have now built the scroll that answers back. Ask it what it means and it explains. Ask it to argue the other side and it does. Ask it to summarize the Phaedrus and you will have three tidy paragraphs in five seconds — and you will feel that you understand the Phaedrus.' },
          { t: 'beat', text: 'It would be easy to conclude AI has solved Socrates’ problem. I think the opposite is closer to the truth. AI removes the last friction that forced us to think.' },
          { t: 'beat', text: 'The silent scroll at least made you do the work of interpretation. The oracle that speaks does the wrestling for you, hands you the result — and the result feels like your own thought, because it arrived in answer to your question.' },
          { t: 'beat', text: 'That is Thamus’s remedy for reminding at planetary scale. The appearance of dialogue without the labor of thought.' },
          { t: 'note', text: 'Say the next line about yourself before you say it about anyone else. It buys the whole argument.' },
          { t: 'beat', text: 'The man who has read many things without instruction, seems to know much, knows nothing, and is hard to get along with: we have all met him online this week. Increasingly he is us.' },
          { t: 'beat', text: 'I say this as someone who mines and interprets human language for a living, and builds AI tools to do it. I am not against the tool. I am against what the tool will do to us if we let it think in our place.' },
        ],
      },
      {
        heading: '3. Words are the most powerful force in the universe',
        flow: [
          { t: 'beat', text: 'To see why this matters we have to go back further than Egypt. God created the heavens and the earth — and how? He spoke. The universe was not hammered into being. It was said.' },
          { t: 'scripture', ref: 'Psalm 33:6, 9', text: 'By the word of the LORD the heavens were made … For he spoke, and it came to be; he commanded, and it stood firm.' },
          { t: 'beat', text: 'Words are not decorations on reality. They are the instrument by which reality was made.' },
          { t: 'beat', text: 'So the question was never whether words are powerful. The question is whose words we are living on — and where those words live. On an external mark, or within.' },
        ],
      },
      {
        heading: '4. God told men to write — and what He commanded alongside it',
        flow: [
          { t: 'beat', text: 'Here Scripture parts company with Thamus, and it is worth noticing exactly how.' },
          { t: 'beat', text: 'God commands writing, repeatedly. Write this as a memorial in a book. The tablets written with the finger of God. Write the vision, make it plain. Write the things that you have seen.' },
          { t: 'beat', text: 'The God who spoke the world into being wanted His words fixed on stone and parchment, where memory could not soften them and retelling could not improve them.' },
          { t: 'beat', text: 'But look at what He commanded alongside the writing. The king was to write out his own copy of the law by hand, and read it all the days of his life. Not a scribe’s copy. His own.' },
          { t: 'scripture', ref: 'Deuteronomy 6:6–7', text: 'These words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way.' },
          { t: 'beat', text: 'This is God’s answer to Thamus. Writing produces forgetfulness when it is used as a substitute for the mind. It produces wisdom when it is used to feed the mind — copied by hand, read daily, memorized, talked over at the table and on the road.' },
          { t: 'beat', text: 'The written Word was never meant to replace the exercised soul. It was meant to be the soul’s food.' },
          { t: 'beat', text: 'Socrates wanted the living word, written in the soul of the learner. Scripture wants that too. It simply refuses to accept that the written word and the living word are enemies.' },
        ],
      },
      {
        heading: '5. The Word became flesh',
        flow: [
          { t: 'note', text: 'The turn of the whole episode. Slow right down here.' },
          { t: 'beat', text: 'And then Scripture goes somewhere Socrates could not have imagined.' },
          { t: 'scripture', ref: 'John 1:1, 14', text: 'In the beginning was the Word, and the Word was with God, and the Word was God … And the Word became flesh and dwelt among us, and we have seen his glory.' },
          { t: 'beat', text: 'Socrates longed for a word that was alive, that could answer for itself, that could know its hearer and speak to him in particular. That Word exists. He is not a text and not a technology. He is a Person.' },
          { t: 'beat', text: 'The speech that made the universe walked into the universe and had a face.' },
          { t: 'beat', text: 'Think of the road to Emmaus. Two disciples walking, grieving, confused. A stranger falls in beside them and, beginning with Moses and all the Prophets, interprets to them in all the Scriptures the things concerning himself.' },
          { t: 'scripture', ref: 'Luke 24:32', text: 'Did not our hearts burn within us while he talked to us on the road, while he opened to us the Scriptures?' },
          { t: 'beat', text: 'There is Socrates’ ideal — dialogue with the one who truly knows — and there is the written Word, opened and explained. The living Word does not abolish the written word. He unlocks it.' },
          { t: 'scripture', ref: 'Colossians 2:3', text: 'In whom are hidden all the treasures of wisdom and knowledge.' },
          { t: 'beat', text: 'Not some of them. All of them. Knowledge in its final form is not information. It is acquaintance with a Person.' },
          { t: 'beat', text: 'The prophets searched and inquired carefully about the grace that was coming, and were told they were serving not themselves but us — in things into which angels long to look. Angels, who know more than any of us, lean forward to understand the Gospel.' },
        ],
      },
      {
        heading: '6. What AI is, and what it is not',
        flow: [
          { t: 'beat', text: 'Now we can say plainly what artificial intelligence is. It is astonishingly well-informed. It has read more than any human ever will. As a remedy for reminding it is the greatest ever built, and I use it every day.' },
          { t: 'beat', text: 'But it is not a human being. It was not made in the image of God. It has no soul to be regenerated, no heart on which the Word can be written, no destiny of being conformed to the image of His Son.' },
          { t: 'beat', text: 'It cannot fear the Lord — and the fear of the LORD is the beginning of knowledge. It has read everything and understood nothing, in the only sense of understanding that lasts.' },
          { t: 'beat', text: 'You were made for exactly that. The mind you have is not a convenience to be outsourced. It is the instrument God gave you to know Him with, and the very thing He is in the process of renewing.' },
          { t: 'beat', text: 'A machine can tell you what the Bible says about the resurrection. It cannot have its heart burn within it on the road.' },
        ],
      },
      {
        heading: '7. The charge — five things',
        flow: [
          { t: 'note', text: 'Five practical items. Number them out loud; this is the part people will act on.' },
          { t: 'beat', text: 'One. Read the thing itself. Do not read a summary of the Phaedrus — read the Phaedrus, it is thirty pages. Do not let a chatbot tell you what Romans 8 means. Read Romans 8, slowly, more than once, and let it argue with you.' },
          { t: 'beat', text: 'The Bereans were commended because they examined the Scriptures daily to see if these things were so. They checked the apostle Paul against the text. Check everything against the text — including this episode.' },
          { t: 'beat', text: 'Two. Do the work before you ask for help. Form your own reading first. Then, if you like, ask the machine — and treat its answer the way you would treat a clever, well-read, spiritually dead stranger’s answer. Worth hearing, worth testing, never worth trusting on its own authority.' },
          { t: 'scripture', ref: '2 Corinthians 10:5', text: 'Take every thought captive to obey Christ.' },
          { t: 'beat', text: 'That includes the thoughts that arrive fully formed from a screen.' },
          { t: 'beat', text: 'Three. Write in your own hand. Copy out a passage. Memorize it. The king was told to make his own copy for a reason. What passes through the hand and the mouth lodges in the heart in a way that what passes only through the eyes never does.' },
          { t: 'beat', text: 'Four. Talk it through with a person. Socrates was right about this much — the living word, spoken between two people who are both actually thinking, does something a text cannot. Sit at the table. Walk by the way. Teach your children. Argue with a friend.' },
          { t: 'beat', text: 'Five. Know Him. All of this is finally in service of one thing. Knowledge that does not end in Christ ends in nothing, no matter how much of it you have.' },
        ],
      },
      {
        heading: 'Close',
        flow: [
          { t: 'beat', text: 'Thamus was afraid a new tool would leave men with the appearance of wisdom and none of the substance. He was speaking of marks on papyrus. We have built something far stronger, and the danger is proportionally greater.' },
          { t: 'beat', text: 'But the remedy has not changed since Deuteronomy. Write it down, yes. Then read it with your own eyes, hide it in your own heart, speak it with your own mouth, and think it through with your own mind — the mind that was made in the image of God and is being remade in the image of His Son.' },
          { t: 'beat', text: 'No machine can do that for you. That is not a limitation of the technology. It is the glory of being made in the image of an infinitely amazing God.' },
          { t: 'note', text: 'End there. Do not add anything after it.' },
        ],
      },
    ],
  },
]
