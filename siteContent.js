// ─────────────────────────────────────────────────────────────
// EVERYTHING ON THE SITE LIVES IN THIS FILE.
// Swap the values below — no component code needs to change.
// Anything marked "DEMO" is placeholder content the brief asked
// to be clearly marked, so replace it with your real numbers,
// client work and quotes before you launch.
// ─────────────────────────────────────────────────────────────

export const agency = {
  name: "Reelcraft", // ← change to your agency name
  shortDescription:
    "We turn long-form podcasts, interviews and livestreams into short-form clips built for Shorts, Reels and TikTok.",
  email: "hello@reelcraft.co",
  socials: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export const hero = {
  headline: "Turn long videos into short-form content that gets attention.",
  sub: "We transform podcasts, interviews, livestreams and long-form videos into engaging short clips designed for YouTube Shorts, Instagram Reels and TikTok.",
  ctaPrimary: "Get started",
  ctaSecondary: "View our work",
  trustLine: "Built for creators who want to grow faster.",
}

// DEMO figures — swap in your own delivery numbers once you have them.
export const stats = [
  { value: 500, suffix: "+", label: "Clips created" },
  { value: 100, suffix: "+", label: "Videos repurposed" },
  { value: 3, suffix: "", label: "Platforms covered" },
  { value: 48, suffix: "h", label: "Typical turnaround" },
]

export const services = [
  {
    icon: "layers",
    title: "AI-powered clip selection",
    description:
      "We scan every minute of your source video to surface the moments most likely to hook a scrolling viewer.",
  },
  {
    icon: "scissors",
    title: "Short-form video editing",
    description:
      "Clean cuts, pacing and structure tailored to how people actually watch vertical video.",
  },
  {
    icon: "type",
    title: "Captions & subtitles",
    description:
      "Accurate, styled captions so your clips play just as well muted as they do with sound on.",
  },
  {
    icon: "zap",
    title: "Hook & retention optimization",
    description:
      "Every clip opens with a hook built to stop the scroll and hold attention through the watch time.",
  },
  {
    icon: "smartphone",
    title: "Social media formatting",
    description:
      "Framing, safe zones and export settings matched to each platform's own specs.",
  },
  {
    icon: "repeat",
    title: "Content repurposing",
    description:
      "One recording becomes weeks of posts, so your feed stays active between new releases.",
  },
]

export const steps = [
  {
    number: "01",
    title: "Send your content",
    description:
      "Share a podcast, YouTube video, livestream recording or a link — however it's easiest for you.",
  },
  {
    number: "02",
    title: "We find the best moments",
    description:
      "Our editors identify the hooks, stories and standout lines worth turning into their own clip.",
  },
  {
    number: "03",
    title: "We edit and optimize",
    description:
      "Cuts, captions, zooms and sound design come together into a platform-ready short.",
  },
  {
    number: "04",
    title: "You publish and grow",
    description:
      "You receive ready-to-post files — just upload them to your channels on your schedule.",
  },
]

// DEMO portfolio — replace these six entries with links/thumbnails
// from your own client work. `from` / `to` are just placeholder
// gradient colors standing in for a thumbnail image.
export const portfolio = [
  {
    title: "Podcast clip",
    context: "Business podcast",
    platform: "Reels",
    views: "812K views",
    hook: "\u201CThe pricing mistake that cost us $40K\u201D",
    from: "#3A2E2C",
    to: "#111",
  },
  {
    title: "Motivational clip",
    context: "Entrepreneur interview",
    platform: "Shorts",
    views: "1.2M views",
    hook: "\u201CNobody tells you this before you quit your job\u201D",
    from: "#2C2E3A",
    to: "#111",
  },
  {
    title: "Educational clip",
    context: "Personal brand",
    platform: "TikTok",
    views: "430K views",
    hook: "\u201C3 things I wish I knew about SEO\u201D",
    from: "#333026",
    to: "#111",
  },
  {
    title: "Podcast clip",
    context: "Business podcast",
    platform: "Shorts",
    views: "265K views",
    hook: "\u201CWhy most startups hire too early\u201D",
    from: "#2E3A31",
    to: "#111",
  },
  {
    title: "Motivational clip",
    context: "Coaching call",
    platform: "Reels",
    views: "94K views",
    hook: "\u201CThe question that changed how I coach\u201D",
    from: "#3A2C36",
    to: "#111",
  },
  {
    title: "Educational clip",
    context: "Livestream Q&A",
    platform: "TikTok",
    views: "58K views",
    hook: "\u201CHow to actually read a term sheet\u201D",
    from: "#2C3339",
    to: "#111",
  },
]

export const beforeAfter = {
  before: {
    label: "Before",
    title: "One 60-minute podcast",
    description: "A single long recording, sitting on your camera roll or drive.",
  },
  after: {
    label: "After",
    title: "20+ optimized short clips",
    description: "Cut, captioned and formatted for every short-form platform you post to.",
  },
}

export const whyChooseUs = {
  headline: "You focus on creating. We handle the content repurposing.",
  items: [
    {
      icon: "clock",
      title: "Fast turnaround",
      description: "Clips delivered on a schedule you can plan around.",
    },
    {
      icon: "video",
      title: "Professional editing",
      description: "Every clip is cut and paced by an editor, not a template.",
    },
    {
      icon: "sparkles",
      title: "Viral-style hooks",
      description: "Openings built specifically to stop a scrolling thumb.",
    },
    {
      icon: "align-left",
      title: "Engaging captions",
      description: "Styled, accurate captions on every single clip.",
    },
    {
      icon: "target",
      title: "Platform optimized",
      description: "Formatted for the specs of Shorts, Reels and TikTok.",
    },
    {
      icon: "repeat",
      title: "Consistent content",
      description: "A steady output that keeps your feed active every week.",
    },
  ],
}

export const pricing = [
  {
    name: "Starter",
    price: 99,
    period: "/month",
    features: ["10 short clips", "Captions included", "Basic editing", "3–5 day delivery"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: 249,
    period: "/month",
    features: [
      "30 short clips",
      "Advanced editing",
      "Captions included",
      "Hook optimization",
      "2–3 day delivery",
    ],
    cta: "Get started",
    highlighted: true,
    tag: "Most popular",
  },
  {
    name: "Scale",
    price: 499,
    period: "/month",
    features: [
      "60 short clips",
      "Premium editing",
      "Advanced captions",
      "Hook optimization",
      "Priority delivery",
      "Content strategy call",
    ],
    cta: "Let's work together",
    highlighted: false,
  },
]

// DEMO testimonials — these are placeholders, not real clients.
// Replace name, role and quote once you have real feedback to share.
export const testimonials = [
  {
    name: "Jordan Miles",
    role: "Podcast host, demo testimonial",
    quote:
      "Our episodes turn into a full week of clips now. The hooks alone made a visible difference in watch time.",
  },
  {
    name: "Priya Anand",
    role: "Business coach, demo testimonial",
    quote:
      "I stopped worrying about what to post. I send one call recording and get back a week of content.",
  },
  {
    name: "Diego Fernandez",
    role: "YouTuber, demo testimonial",
    quote:
      "The captions and pacing feel like a person actually watched the footage — because someone did.",
  },
]

export const faq = [
  {
    q: "What type of videos can you edit?",
    a: "Podcasts, YouTube videos, livestream recordings, interviews and webinars — most long-form video or audio-with-video content works well as source material.",
  },
  {
    q: "Do you provide captions?",
    a: "Yes. Every clip is delivered with styled, accurate captions included as standard, not as an add-on.",
  },
  {
    q: "How quickly can I receive my clips?",
    a: "Delivery windows depend on your plan, typically 24–72 hours from when we receive your source content.",
  },
  {
    q: "Which platforms do you support?",
    a: "We format clips for YouTube Shorts, Instagram Reels and TikTok, matching each platform's aspect ratio and specs.",
  },
  {
    q: "Do I need to provide the video?",
    a: "Yes — you send the source recording or a link to it, and we handle everything from there.",
  },
  {
    q: "Can you handle monthly content?",
    a: "Yes, most clients work with us on an ongoing monthly plan so their feed stays consistently active.",
  },
  {
    q: "Do you offer custom packages?",
    a: "If none of our plans fit your volume or timeline, reach out and we'll put together something that does.",
  },
]

export const finalCta = {
  headline: "Ready to turn your content into more short-form videos?",
  sub: "Send us your long-form content and we'll turn it into engaging clips built for social media.",
  cta: "Start your project",
}
