// Shared project data used by projects.html (listing) and project-detail.html (case study)
const PROJECTS = [
  {
    id: "dzone",
    title: "DZONE — Ed-Tech Website",
    tag: "UI Design",
    cat: "UI Design and Development",
    year: "2025",
    client: "DZONE Learning Pvt Ltd",
    role: "Lead Product Designer",
    duration: "6 weeks",
    liveLabel: "View Live Site",
    thumbColor: "#000000",
    bannerColor: "Url(./Assets/dzoneBanner.jpg)",
    summary:
      "A course-discovery and enrollment platform for an ed-tech startup, rebuilt to turn browsing students into paying learners.",
    overview:
      "DZONE came to us with a course catalog that looked dated and converted poorly. Students were bouncing before they reached checkout. The brief was to redesign the marketing site and course pages so the value of each course reads instantly, and to shorten the path from landing page to enrollment.",
    problem:
      "The old site buried pricing and outcomes below the fold, used generic stock photography, and had a five-step checkout. Mobile conversion was under 1%.",
    colors: [
      { name: "Deep Crimson", hex: "#B0335A" },
      { name: "Blush Pink", hex: "#F2B8C6" },
      { name: "Ink Navy", hex: "#1B1330" },
      { name: "Warm White", hex: "#FBF6F5" },
    ],
    research: [
      {
        icon: "🎤",
        title: "User interviews",
        desc: "12 interviews with prospective and enrolled students to map decision triggers and drop-off points.",
      },
      {
        icon: "📊",
        title: "Funnel analysis",
        desc: "Reviewed 90 days of analytics to find where mobile users abandoned the enrollment flow.",
      },
      {
        icon: "🧪",
        title: "Usability testing",
        desc: "5 moderated sessions on the checkout prototype before development handoff.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Stakeholder interviews, competitor teardown, and analytics audit to define the real problem.",
      },
      {
        title: "Define",
        desc: "Mapped the enrollment funnel and prioritized the three screens costing the most drop-off.",
      },
      {
        title: "Design",
        desc: "Wireframed, then designed a high-contrast system built around course outcomes, not features.",
      },
      {
        title: "Deliver",
        desc: "Built a component library in Figma, handed off with redlines, and supported dev QA.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      Other: ["Google Analytics", "Hotjar"],
    },
    results: [
      { num: "+64%", label: "Mobile conversion" },
      { num: "-40%", label: "Checkout steps" },
      { num: "2.1x", label: "Course page time-on-page" },
      { num: "38", label: "Courses relaunched" },
    ],
    testimonial: {
      quote:
        "Enrollment numbers moved within the first month of launch. The new course pages finally explain what students actually get.",
      who: "Founder, DZONE",
      role: "Client",
    },
  },
  {
    id: "emp2ortal",
    title: "EMP2ORTAL — Employee Self-Service Portal",
    tag: "UI Design",
    cat: "UI Design",
    year: "2024",
    client: "Internal HR Tech Team",
    role: "Product Designer",
    duration: "8 weeks",
    liveLabel: "View Case Study Deck",
    thumbColor: "#000",
    bannerColor: "linear-gradient(135deg,#5fb8c9 0%,#123b42 100%)",
    summary:
      "An internal HR portal where employees manage leave, payslips, and announcements in one calm, low-friction dashboard.",
    overview:
      "The existing HR tools were spread across three disconnected systems. Employees didn't know where to look for leave balances or payslips. EMP2ORTAL consolidates it all into a single dashboard designed for speed — most tasks needed to complete in under three clicks.",
    problem:
      "Three separate logins, inconsistent visual language, and no mobile support led to a support-ticket volume HR couldn't keep up with.",
    colors: [
      { name: "Teal", hex: "#2A6F7D" },
      { name: "Sky Mist", hex: "#BEE7ED" },
      { name: "Charcoal", hex: "#1E2A30" },
      { name: "Off White", hex: "#F4FAFB" },
    ],
    research: [
      {
        icon: "🗂️",
        title: "Support ticket audit",
        desc: "Categorized 300+ HR tickets to find the top five recurring requests to design around first.",
      },
      {
        icon: "🧭",
        title: "Task-flow mapping",
        desc: "Shadowed HR staff to trace how leave requests actually moved between systems.",
      },
      {
        icon: "✅",
        title: "A/B dashboard test",
        desc: "Tested two dashboard layouts with 24 employees to pick the clearer information hierarchy.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Audited support tickets and interviewed HR staff to find the highest-friction tasks.",
      },
      {
        title: "Define",
        desc: "Prioritized leave requests, payslips, and announcements as the three core modules.",
      },
      {
        title: "Design",
        desc: "Built a single-login dashboard with a consistent card system across all modules.",
      },
      {
        title: "Deliver",
        desc: "Delivered responsive specs and a design system doc for the internal dev team.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe XD"],
      Frontend: ["React", "MUI & Tailwind", "JavaScript"],
      Other: ["Notion (specs)", "Zeplin"],
    },
    results: [
      { num: "-71%", label: "HR support tickets" },
      { num: "1 login", label: "Replacing 3 systems" },
      { num: "92%", label: "Employee satisfaction" },
      { num: "3 clicks", label: "Avg. task completion" },
    ],
    testimonial: {
      quote:
        "Our HR team stopped fielding 'where do I find my payslip' emails almost entirely after launch.",
      who: "HR Operations Lead",
      role: "Client",
    },
  },
  {
    id: "aahardarshan",
    title: "Aahardarshan — Healthcare Website",
    tag: "Development",
    cat: "UI Design & Development",
    year: "2025",
    client: "Aahardarshan Clinic",
    role: "UI/UX Designer + Front-end Developer",
    duration: "5 weeks",
    liveLabel: "View Live Site",
    thumbColor: "#11260B",
    bannerColor: "linear-gradient(135deg,#7a2d5a 0%,#231020 100%)",
    summary:
      "A patient-facing website for a nutrition and healthcare clinic, designed to build trust and make appointment booking effortless.",
    overview:
      "Healthcare websites live or die on trust. Aahardarshan needed a site that felt credible to first-time visitors while making it simple to find a doctor and book a consultation — all without a dedicated dev team to maintain complexity later.",
    problem:
      "The clinic previously had no website, relying entirely on word-of-mouth. New patients had no way to evaluate credentials or book online.",
    colors: [
      { name: "Clinical Teal", hex: "#2E8B84" },
      { name: "Soft Coral", hex: "#F2907A" },
      { name: "Deep Slate", hex: "#1C2733" },
      { name: "Paper White", hex: "#F8F9FB" },
    ],
    research: [
      {
        icon: "🩺",
        title: "Patient interviews",
        desc: "Talked to 8 recent patients about what made them trust (or distrust) a clinic online.",
      },
      {
        icon: "🔍",
        title: "Competitor benchmarking",
        desc: "Reviewed 6 regional clinic sites to identify booking-flow best practices.",
      },
      {
        icon: "📱",
        title: "Mobile-first testing",
        desc: "Validated the booking flow on low-end Android devices, the clinic's primary patient device.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Interviewed patients and clinic staff to understand the trust signals that mattered most.",
      },
      {
        title: "Define",
        desc: "Structured content around doctor credentials, services, and a single clear booking CTA.",
      },
      {
        title: "Design",
        desc: "Designed a warm, clinical palette that felt professional without being cold.",
      },
      {
        title: "Deliver",
        desc: "Hand-coded a lightweight, fast-loading site the clinic's team can update themselves.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe Photoshop"],
      Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      Other: ["Google Business Profile integration"],
    },
    results: [
      { num: "+180%", label: "Online booking requests" },
      { num: "1.8s", label: "Avg. load time" },
      { num: "4.8★", label: "Post-launch patient rating" },
      { num: "100%", label: "Mobile-optimized" },
    ],
    testimonial: {
      quote:
        "Patients tell us they booked because the site made us look established. That mattered more than we expected.",
      who: "Clinic Director",
      role: "Client",
    },
  },
  {
    id: "domain-portal",
    title: "Domain Management Portal",
    tag: "UI Design",
    cat: "UI Design",
    year: "2024",
    client: "SaaS Infrastructure Team",
    role: "Product Designer",
    duration: "10 weeks",
    liveLabel: "View Prototype",
    thumbColor: "#243C59",
    bannerColor: "linear-gradient(135deg,#5b3fc9 0%,#1a1032 100%)",
    summary:
      "A technical dashboard for managing domains, DNS records, and SSL certificates — built for engineers, not consumers.",
    overview:
      "This is a dense, data-heavy admin tool for developers managing dozens of domains at once. The challenge was making a technically complex domain: DNS records, certificate expiry, nameservers, feel scannable rather than overwhelming.",
    problem:
      "The legacy tool was a raw table dump with no visual hierarchy. Engineers were missing certificate expiry warnings and causing outages.",
    colors: [
      { name: "Electric Violet", hex: "#6D28D9" },
      { name: "Lavender Mist", hex: "#D8CCF0" },
      { name: "Void Black", hex: "#14101F" },
      { name: "Signal Green", hex: "#3ED598" },
    ],
    research: [
      {
        icon: "💻",
        title: "Engineer shadowing",
        desc: "Observed 6 engineers managing domains in the legacy tool to find where errors happened.",
      },
      {
        icon: "🚨",
        title: "Incident review",
        desc: "Analyzed 3 months of outage postmortems tied to missed certificate renewals.",
      },
      {
        icon: "🗳️",
        title: "Card sorting",
        desc: "Ran a card sort with the infra team to define the right information architecture.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Shadowed engineers and reviewed outage postmortems to find the highest-risk blind spots.",
      },
      {
        title: "Define",
        desc: "Prioritized expiry visibility and bulk actions as the two features worth building first.",
      },
      {
        title: "Design",
        desc: "Designed a status-driven dashboard using color to flag urgency at a glance.",
      },
      {
        title: "Deliver",
        desc: "Delivered a full component spec with states for every DNS record status.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe XD"],
      Frontend: ["React", "Tailwind CSS", "JavaScript"],
      Other: ["Storybook", "Jira integration"],
    },
    results: [
      { num: "0", label: "Missed renewals since launch" },
      { num: "-55%", label: "Time to resolve DNS issues" },
      { num: "140+", label: "Domains managed daily" },
      { num: "4.6/5", label: "Internal usability score" },
    ],
    testimonial: {
      quote:
        "We haven't had a certificate-related outage since this shipped. The color-coded status system alone paid for itself.",
      who: "Infrastructure Lead",
      role: "Client",
    },
  },
  {
    id: "oystr",
    title: "OYSTR — Digital Menu Service",
    tag: "UI Design",
    cat: "UI Design",
    year: "2025",
    client: "OYSTR Restaurant Tech",
    role: "Lead Product Designer",
    duration: "7 weeks",
    liveLabel: "View Live Product",
    thumbColor: "linear-gradient(135deg,#2c2f45,#111327)",
    bannerColor: "linear-gradient(135deg,#2c2f45 0%,#08090f 100%)",
    summary:
      "One QR, one scan, complete control — a contactless menu and ordering platform for restaurants, from scan to checkout.",
    overview:
      "OYSTR replaces printed menus with a QR-based ordering experience. The goal: a diner scans a code and can browse, customize, and order in under 60 seconds, with zero app download and zero confusion about what's happening after they tap 'order'.",
    problem:
      "Competing QR-menu products were slow, cluttered with ads, and made customers unsure if their order actually went through.",
    colors: [
      { name: "Jet Black", hex: "#111327" },
      { name: "Oyster Grey", hex: "#8C8FA3" },
      { name: "Signal White", hex: "#FFFFFF" },
      { name: "Accent Amber", hex: "#F2A73B" },
    ],
    research: [
      {
        icon: "⏱️",
        title: "Speed benchmarking",
        desc: "Timed the full order flow of 4 competitor apps to set a target of under 60 seconds.",
      },
      {
        icon: "🍽️",
        title: "Diner shadowing",
        desc: "Observed 15 diners using QR menus in the wild to catalog points of hesitation.",
      },
      {
        icon: "👨‍🍳",
        title: "Restaurant staff interviews",
        desc: "Talked to kitchen and floor staff about how digital orders should surface on their end.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Benchmarked competitor speed and shadowed real diners scanning QR codes in restaurants.",
      },
      {
        title: "Define",
        desc: "Set a hard constraint: order flow must complete in under 60 seconds, no exceptions.",
      },
      {
        title: "Design",
        desc: "Designed a single-scroll menu with sticky cart and instant order confirmation.",
      },
      {
        title: "Deliver",
        desc: "Shipped a white-label design system restaurants can re-skin with their own branding.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe Illustrator"],
      Frontend: ["React", "Tailwind CSS", "JavaScript"],
      Other: ["QR generation API", "Stripe checkout"],
    },
    results: [
      { num: "48s", label: "Avg. order completion" },
      { num: "+29%", label: "Avg. order value" },
      { num: "0 app", label: "downloads required" },
      { num: "120+", label: "Restaurants onboarded" },
    ],
    testimonial: {
      quote:
        "Guests stopped asking 'did my order go through' after we switched to OYSTR. The confirmation screen alone fixed that.",
      who: "Restaurant Owner",
      role: "Client",
    },
  },
  {
    id: "banners",
    title: "Banners — Campaign Graphics",
    tag: "Graphics",
    cat: "Graphics",
    year: "2024",
    client: "DZONE Learning Pvt Ltd",
    role: "Graphic Designer",
    duration: "Ongoing",
    liveLabel: "View Gallery",
    thumbColor: "#04343D",
    bannerColor: "#04343D",
    summary:
      "A set of promotional web banners for DZONE's course launches, built as a reusable template system for fast turnaround.",
    overview:
      "Marketing needed a new banner for nearly every course launch, often with under 24 hours' notice. Instead of designing each one from scratch, I built a modular banner system with fixed zones for offer, course art, and CTA — so new banners could be assembled in minutes.",
    problem:
      "One-off banner design was creating a bottleneck for the marketing team ahead of every launch.",
    colors: [
      { name: "Crimson", hex: "#B0335A" },
      { name: "Sunlight Yellow", hex: "#F5C518" },
      { name: "Ink Navy", hex: "#1B1330" },
      { name: "Warm White", hex: "#FBF6F5" },
    ],
    research: [
      {
        icon: "📅",
        title: "Turnaround audit",
        desc: "Tracked how long each banner took to design and where the bottleneck actually was.",
      },
      {
        icon: "🎯",
        title: "CTR review",
        desc: "Reviewed click-through rates across 20 past banners to find which layouts converted best.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Audited past banner turnaround times and click-through performance.",
      },
      {
        title: "Define",
        desc: "Identified the three layout zones every banner reused, regardless of course.",
      },
      {
        title: "Design",
        desc: "Built a modular Figma template with locked brand elements and swappable content.",
      },
      {
        title: "Deliver",
        desc: "Trained the marketing team to self-serve new banners from the template.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      Other: ["Figma component library"],
    },
    results: [
      { num: "6hr → 20min", label: "Avg. turnaround" },
      { num: "+22%", label: "Click-through rate" },
      { num: "40+", label: "Banners shipped" },
      { num: "1", label: "Reusable template system" },
    ],
    testimonial: {
      quote:
        "We used to wait days for a banner. Now the marketing team builds their own in the template between meetings.",
      who: "Marketing Manager",
      role: "Client",
    },
  },
  {
    id: "social-post",
    title: "Social Media Post — Campaign Series",
    tag: "Graphics",
    cat: "Graphics",
    year: "2024",
    client: "DZONE Learning Pvt Ltd",
    role: "Graphic Designer",
    duration: "Ongoing",
    liveLabel: "View Gallery",
    thumbColor: "#005CA9",
    bannerColor: "linear-gradient(135deg,#7a2d5a 0%,#1f0f1a 100%)",
    summary:
      "A recurring series of social media graphics supporting DZONE's course launches and community engagement across Instagram and LinkedIn.",
    overview:
      "Beyond web banners, DZONE needed a consistent social presence to build brand recall across weekly posts. This series established a repeatable visual grammar so every post felt like DZONE, even without a caption.",
    problem:
      "Social posts were inconsistent in style, making the brand feel unfamiliar post to post.",
    colors: [
      { name: "Crimson", hex: "#B0335A" },
      { name: "Blush Pink", hex: "#F2B8C6" },
      { name: "Ink Navy", hex: "#1B1330" },
      { name: "Sunlight Yellow", hex: "#F5C518" },
    ],
    research: [
      {
        icon: "📈",
        title: "Engagement audit",
        desc: "Analyzed 3 months of post performance to identify which formats drove saves and shares.",
      },
      {
        icon: "🎨",
        title: "Brand consistency review",
        desc: "Catalogued prior posts to define a locked color and type system for future ones.",
      },
    ],
    process: [
      {
        title: "Discover",
        desc: "Audited past post performance to see which formats resonated with the audience.",
      },
      {
        title: "Define",
        desc: "Set a locked grid, palette, and type pairing for every post going forward.",
      },
      {
        title: "Design",
        desc: "Designed a flexible template covering announcements, testimonials, and offers.",
      },
      {
        title: "Deliver",
        desc: "Delivered a Figma kit the social team uses to publish weekly without design support.",
      },
    ],
    tech: {
      Design: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      Other: ["Canva handoff kit"],
    },
    results: [
      { num: "+35%", label: "Post engagement rate" },
      { num: "3x", label: "Weekly posting cadence" },
      { num: "90+", label: "Posts published" },
      { num: "1", label: "Locked brand system" },
    ],
    testimonial: {
      quote:
        "Our feed finally looks like one brand instead of five different people designed it.",
      who: "Social Media Lead",
      role: "Client",
    },
  },
];
