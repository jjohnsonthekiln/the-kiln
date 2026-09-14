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
]
