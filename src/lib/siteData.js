import { Globe, Fingerprint, Search, Target, PenTool, Share2 } from "lucide-react";

export const LOGO_URL =
  "https://media.base44.com/images/public/6abaa6dc9b0790a0aa248155/6e9ebb070_URARTs2.png";

export const CONTACT = {
  email: "hello@urarts.co.za",
  phone: "+27 00 000 0000",
  whatsapp: "27000000000",
  location: "Johannesburg, South Africa",
};

export const BUDGETS = ["Under R10k", "R10k – R25k", "R25k – R50k", "R50k +"];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    slug: "web-design",
    name: "Web Design & Development",
    short: "Fast, striking websites — built, hosted and maintained for you.",
    Icon: Globe,
    pitch:
      "Websites that look sharp, load fast and turn visitors into customers — designed, built, hosted and maintained by us.",
    included: [
      "Custom design tailored to your brand",
      "Responsive build for mobile, tablet and desktop",
      "Hosting setup and ongoing maintenance",
      "Speed, security and accessibility built in",
      "Analytics and conversion tracking",
      "An easy content system so you can edit it yourself",
    ],
    approach: [
      { title: "Plan", text: "We map your goals, pages and user journeys before a pixel is drawn." },
      { title: "Design", text: "From wireframes to polished visuals, reviewed with you at each stage." },
      { title: "Build", text: "Clean, fast, responsive code on a platform you can actually manage." },
      { title: "Maintain", text: "Hosting, updates and ongoing improvements long after launch." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "Most sites take four to eight weeks, depending on size and how ready your content is." },
      { q: "Do you handle hosting?", a: "Yes — we set up, host and maintain your site as part of our service." },
      { q: "Can I edit the site myself?", a: "Absolutely. We build with a content system that lets you update pages without touching code." },
      { q: "Will it work on mobile?", a: "Every site we build is fully responsive and tested across phone, tablet and desktop." },
    ],
  },
  {
    slug: "branding",
    name: "Branding",
    short: "Identities with a voice loud enough to be remembered.",
    Icon: Fingerprint,
    pitch:
      "A brand is more than a logo. We build the name, look, voice and rules that make you instantly recognisable.",
    included: [
      "Brand strategy and positioning",
      "Logo and visual identity system",
      "Colour palette and typography",
      "Brand voice and messaging guidelines",
      "Stationery and social templates",
      "A brand guide your whole team can use",
    ],
    approach: [
      { title: "Research", text: "We learn your market, your competitors and your customers." },
      { title: "Position", text: "We define what you stand for and who you're speaking to." },
      { title: "Design", text: "Logo, colour, type and imagery come together into one system." },
      { title: "Guide", text: "You get the rules and files to keep the brand consistent everywhere." },
    ],
    faqs: [
      { q: "What's included in a brand identity?", a: "Strategy, logo suite, colour palette, typography, imagery direction and a usage guide." },
      { q: "Can you refresh my existing brand?", a: "Yes — we can evolve what works and fix what doesn't, rather than starting from zero." },
      { q: "Do I own the designs?", a: "Yes. You receive full ownership of the final artwork and source files." },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Get found on Google — and stay at the top.",
    Icon: Search,
    pitch:
      "Technical fixes, keyword strategy and content that move you up the rankings — and keep you there.",
    included: [
      "Technical SEO audit and fixes",
      "Keyword research and mapping",
      "On-page optimisation",
      "Content strategy and briefs",
      "Local SEO and Google Business Profile",
      "Monthly reporting on rankings and traffic",
    ],
    approach: [
      { title: "Audit", text: "We find what's holding your site back and what you're already ranking for." },
      { title: "Target", text: "We choose the keywords worth winning and map them to pages." },
      { title: "Optimise", text: "On-page, technical and content work, executed month by month." },
      { title: "Report", text: "Clear monthly numbers: rankings, traffic and leads." },
    ],
    faqs: [
      { q: "How long until I see results?", a: "SEO compounds — expect early movement in three months and meaningful gains by six." },
      { q: "Do you guarantee first place?", a: "No one can honestly guarantee rankings, but we target realistic wins and report transparently." },
      { q: "Is local SEO included?", a: "Yes — local search and Google Business Profile optimisation are part of our SEO service." },
    ],
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    short: "Google & Facebook campaigns that earn their budget back.",
    Icon: Target,
    pitch:
      "Targeted Google and Facebook campaigns built to bring in leads and sales — measured down to the last rand.",
    included: [
      "Google Search, Display and Shopping ads",
      "Facebook and Instagram ad campaigns",
      "Audience research and targeting",
      "Ad copy and creative production",
      "Landing page recommendations",
      "Conversion tracking and reporting",
    ],
    approach: [
      { title: "Goal", text: "We agree on the numbers that matter — leads, sales, cost per result." },
      { title: "Build", text: "Campaigns, audiences, copy and creative, all set up properly." },
      { title: "Test", text: "We run, measure and cut what doesn't work fast." },
      { title: "Scale", text: "We push budget into what performs and keep refining." },
    ],
    faqs: [
      { q: "What ad budget do I need?", a: "Most clients start from around R5,000 per month in ad spend, separate from our management fee." },
      { q: "Which platform is better, Google or Facebook?", a: "It depends on your audience and offer — we'll recommend the mix that fits your goals." },
      { q: "Do you write the ads?", a: "Yes, copy and creative are included in our ad management service." },
    ],
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    short: "Scroll-stopping visuals for print and screen.",
    Icon: PenTool,
    pitch:
      "From social posts to packaging, we design the visuals that carry your message with style and clarity.",
    included: [
      "Social media graphics and templates",
      "Brochures, flyers and posters",
      "Packaging and label design",
      "Presentation and pitch decks",
      "Signage and large format",
      "Print-ready artwork files",
    ],
    approach: [
      { title: "Brief", text: "We pin down the message, audience and format." },
      { title: "Concepts", text: "You see two or three directions to choose from." },
      { title: "Refine", text: "We polish the chosen route together." },
      { title: "Deliver", text: "Print-ready or screen-ready files, plus editable templates." },
    ],
    faqs: [
      { q: "Can you match my existing brand?", a: "Yes — we design within your brand guidelines, or help sharpen them if they're thin." },
      { q: "Do you handle printing?", a: "We prepare print-ready files and can recommend trusted printers." },
      { q: "How many revisions are included?", a: "Two rounds of revisions are standard, with more available if needed." },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    short: "Content and community that build a real following.",
    Icon: Share2,
    pitch:
      "Strategy, content and community management that keep your brand in the feed and on people's minds.",
    included: [
      "Social strategy and content calendar",
      "Graphic and short-form video content",
      "Copywriting and hashtag research",
      "Scheduling and publishing",
      "Community management and replies",
      "Monthly performance reporting",
    ],
    approach: [
      { title: "Strategy", text: "We define the platforms, tone and themes that fit your brand." },
      { title: "Create", text: "A steady stream of on-brand content, planned ahead." },
      { title: "Engage", text: "We post, reply and grow your community." },
      { title: "Measure", text: "We track reach, engagement and growth, then adjust." },
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok and YouTube — we focus on where your audience actually is." },
      { q: "Do you make the content?", a: "Yes — graphics, captions and short-form video are all part of the service." },
      { q: "How often will you post?", a: "Most plans include between three and five posts per week, tailored to your goals." },
    ],
  },
];

export const WORK = [
  {
    slug: "kasi-coffee",
    title: "Kasi Coffee Co.",
    category: "Branding",
    image: "https://picsum.photos/seed/urarts-coffee/900/700",
    gallery: [
      "https://picsum.photos/seed/urarts-coffee-a/900/700",
      "https://picsum.photos/seed/urarts-coffee-b/900/700",
    ],
    client: "Kasi Coffee Co.",
    year: "2025",
    services: ["Branding", "Packaging", "Graphic Design"],
    challenge:
      "A much-loved neighbourhood roastery with no consistent identity — every touchpoint looked like a different business.",
    solution:
      "We built a warm, confident brand system: a bold logo suite, a rich palette, packaging that pops on shelf, and templates the team can use themselves.",
    results: [
      { label: "Retail stockists won", value: "18" },
      { label: "Brand recall uplift", value: "42%" },
      { label: "Turnaround", value: "6 weeks" },
    ],
  },
  {
    slug: "nomad-fitness",
    title: "Nomad Fitness",
    category: "Web Design",
    image: "https://picsum.photos/seed/urarts-fitness/900/700",
    gallery: [
      "https://picsum.photos/seed/urarts-fitness-a/900/700",
      "https://picsum.photos/seed/urarts-fitness-b/900/700",
    ],
    client: "Nomad Fitness",
    year: "2025",
    services: ["Web Design & Development", "SEO"],
    challenge:
      "An outdated site that was slow on mobile and impossible for the team to update as classes changed.",
    solution:
      "A fast, responsive site with a simple content system, clear class booking paths and SEO foundations baked in from day one.",
    results: [
      { label: "Site speed improvement", value: "3.1x" },
      { label: "New sign-ups per month", value: "+94%" },
      { label: "Turnaround", value: "7 weeks" },
    ],
  },
  {
    slug: "bloom-skincare",
    title: "Bloom Skincare",
    category: "Social Media",
    image: "https://picsum.photos/seed/urarts-bloom/900/700",
    gallery: [
      "https://picsum.photos/seed/urarts-bloom-a/900/700",
      "https://picsum.photos/seed/urarts-bloom-b/900/700",
    ],
    client: "Bloom Skincare",
    year: "2026",
    services: ["Social Media Marketing", "Graphic Design"],
    challenge:
      "A beautiful product with almost no presence — inconsistent posting and no clear voice online.",
    solution:
      "We built a content engine: a monthly calendar, on-brand graphics and short-form video, plus daily community management.",
    results: [
      { label: "Follower growth", value: "+12k" },
      { label: "Avg. engagement rate", value: "6.4%" },
      { label: "Revenue from social", value: "+31%" },
    ],
  },
  {
    slug: "atlas-legal",
    title: "Atlas Legal",
    category: "SEO",
    image: "https://picsum.photos/seed/urarts-atlas/900/700",
    gallery: [
      "https://picsum.photos/seed/urarts-atlas-a/900/700",
      "https://picsum.photos/seed/urarts-atlas-b/900/700",
    ],
    client: "Atlas Legal",
    year: "2026",
    services: ["SEO", "Web Design & Development"],
    challenge:
      "A respected firm that was invisible on Google for the exact services clients were searching for.",
    solution:
      "A technical overhaul, keyword-mapped service pages and a steady content programme targeting local search intent.",
    results: [
      { label: "Keywords in top 3", value: "27" },
      { label: "Organic enquiries", value: "+180%" },
      { label: "Timeline", value: "6 months" },
    ],
  },
];

export const PROCESS = [
  { step: "01", title: "Discover", text: "We dig into your goals, audience and competitors." },
  { step: "02", title: "Strategy", text: "A clear plan — what we make, and why it works." },
  { step: "03", title: "Create", text: "Design and build, with your feedback at every turn." },
  { step: "04", title: "Launch & Grow", text: "We ship it, then keep optimising for results." },
];

export const TESTIMONIALS = [
  {
    quote:
      "UR Arts rebuilt our site and our brand from scratch. We finally look like the business we always were.",
    name: "Thandi Mokoena",
    role: "Founder, Kasi Coffee Co.",
  },
  {
    quote:
      "Straight-talking, fast, and genuinely creative. Our leads doubled within three months of launch.",
    name: "Ryan Petersen",
    role: "Director, Nomad Fitness",
  },
  {
    quote:
      "They gave us a fighting chance online. Clear plan, sharp design, and numbers we can actually see.",
    name: "Aisha Patel",
    role: "Owner, Bloom Skincare",
  },
];

export const ABOUT = {
  story: [
    "UR Arts started with a simple belief: small, ambitious businesses deserve the same calibre of design and marketing as the big players — without the agency bloat.",
    "We're a small, senior team that works closely with every client. No account managers playing telephone, no cookie-cutter templates. Just sharp thinking, honest advice and work that performs.",
    "Our slogan isn't decoration. Giving you a fighting chance means levelling the playing field — putting the tools, the brand and the strategy in your hands that make you genuinely competitive.",
  ],
  values: [
    { title: "Bold, not loud", text: "We design with confidence and restraint — striking work that still reads clearly." },
    { title: "Honest advice", text: "If something won't work for you, we'll say so. Your budget deserves the truth." },
    { title: "Built to perform", text: "Pretty is easy. We design for results you can measure." },
    { title: "Straightforward", text: "Clear plans, clear pricing, clear timelines. No jargon, no surprises." },
  ],
  team: [
    { name: "Lerato Dlamini", role: "Creative Director", initials: "LD" },
    { name: "James Fourie", role: "Head of Development", initials: "JF" },
    { name: "Nadia Khan", role: "Brand Strategist", initials: "NK" },
    { name: "Sipho Ndlovu", role: "Performance Lead", initials: "SN" },
  ],
};

export const FAQS = [
  {
    q: "What kind of businesses do you work with?",
    a: "Small and medium businesses, start-ups and established brands that want sharper design and marketing. If you're ambitious, we'll get on well.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope. Websites typically start around R15,000, branding around R12,000, and ongoing services are billed monthly. We'll always give you a clear quote up front.",
  },
  {
    q: "How long does a project take?",
    a: "Branding usually takes three to five weeks, websites four to eight weeks. Timelines depend on scope and how quickly feedback comes back.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer monthly retainers for hosting, maintenance, SEO, ads and social media so your brand keeps growing after launch.",
  },
  {
    q: "Can you work with our existing brand?",
    a: "Absolutely. We can extend what you have, sharpen it, or rebuild it from the ground up — whichever serves your goals best.",
  },
  {
    q: "How do we get started?",
    a: "Send us a message through the contact form or WhatsApp. We'll set up a free consultation to talk through your goals and the best way forward.",
  },
];

export const POSTS = [
  {
    slug: "why-brand-matters",
    title: "Why a strong brand is your cheapest marketing",
    category: "Branding",
    date: "12 September 2026",
    excerpt:
      "A consistent brand isn't a luxury — it's the thing that makes every other rand you spend work harder.",
    image: "https://picsum.photos/seed/urarts-blog-brand/900/600",
  },
  {
    slug: "seo-in-2026",
    title: "SEO in 2026: what actually moves the needle",
    category: "SEO",
    date: "28 August 2026",
    excerpt:
      "Forget the shortcuts. Here's the honest, durable work that still gets businesses found on Google.",
    image: "https://picsum.photos/seed/urarts-blog-seo/900/600",
  },
  {
    slug: "website-conversion",
    title: "Five fixes that make your website convert better",
    category: "Web Design",
    date: "09 August 2026",
    excerpt:
      "Small changes to layout, copy and speed can transform how many visitors actually become customers.",
    image: "https://picsum.photos/seed/urarts-blog-web/900/600",
  },
];

export const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    updated: "September 2026",
    sections: [
      { h: "What we collect", p: "When you contact us we collect the details you give us — your name, email address, phone number, the service you're interested in, your budget range and your message." },
      { h: "How we use it", p: "We use your information solely to respond to your enquiry and to provide the services you ask for. We never sell your data to third parties." },
      { h: "Storage and security", p: "Your information is stored securely and retained only for as long as needed to serve you. We take reasonable technical measures to protect it." },
      { h: "Your rights", p: "You may request access to, correction of, or deletion of your personal information at any time by emailing us." },
      { h: "Contact", p: "For any privacy questions, reach us at hello@urarts.co.za." },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "September 2026",
    sections: [
      { h: "Agreements", p: "All work is governed by a written proposal or agreement that sets out scope, deliverables, timelines and fees. These terms apply to the use of this website." },
      { h: "Payment", p: "Projects typically require a deposit before work begins, with the balance due on completion or per an agreed schedule. Ongoing services are billed monthly." },
      { h: "Intellectual property", p: "On full payment, you receive ownership of the final designs and deliverables we create for you, unless otherwise agreed in writing." },
      { h: "Liability", p: "We deliver our work with care and skill, but we are not liable for indirect or consequential losses arising from the use of our work or this website." },
      { h: "Contact", p: "Questions about these terms? Email hello@urarts.co.za." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: "September 2026",
    sections: [
      { h: "What cookies are", p: "Cookies are small text files stored on your device that help websites function and understand how they're used." },
      { h: "How we use them", p: "We use essential cookies to make the site work, and analytics cookies to understand which pages are useful so we can improve them." },
      { h: "Managing cookies", p: "You can block or delete cookies through your browser settings. Doing so may affect how parts of this site work." },
      { h: "Contact", p: "Any questions about cookies? Get in touch at hello@urarts.co.za." },
    ],
  },
};