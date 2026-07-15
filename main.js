// Shared behavior + shared data across all pages

// Mobile nav toggle
function initNav() {
  const burger = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");
  if (!burger || !navLinks) return;
  burger.addEventListener("click", () => {
    const showing = navLinks.style.display === "flex";
    navLinks.style.display = showing ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "84px";
    navLinks.style.left = "20px";
    navLinks.style.right = "20px";
    navLinks.style.background = "var(--bg-alt)";
    navLinks.style.borderRadius = "16px";
    navLinks.style.zIndex = "200";
  });

  // Mark active link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

// Marquee content
function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const marqueeItems = [
    "UI/UX Designer",
    "UI/UX Developer",
    "Web Design",
    "App Design",
    "Web Development",
    "Brand Strategy",
    "Product Design",
  ];
  const html = marqueeItems.map((i) => `<span>${i}</span>`).join("");
  track.innerHTML = html + html;
}

// Shared services data (used on home teaser + full services page)
const SERVICES = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    short:
      "Interfaces that are easy to use and consistent across every screen and state.",
    includes: [
      "Wireframes & user flows",
      "High-fidelity UI screens",
      "Design system / component library",
    ],
  },
  {
    icon: "🧭",
    title: "UX Research",
    short:
      "User interviews and testing that ground design decisions in real behavior.",
    includes: [
      "User interviews",
      "Usability testing",
      "Journey & funnel mapping",
    ],
  },
  {
    icon: "📱",
    title: "App Design",
    short:
      "Mobile-first product design built for clarity, speed, and adoption.",
    includes: [
      "iOS & Android UI kits",
      "Prototype for user testing",
      "Handoff-ready specs",
    ],
  },
  {
    icon: "🔗",
    title: "Web Design",
    short:
      "Marketing and product sites that convert without sacrificing craft.",
    includes: [
      "Landing pages",
      "Responsive layouts",
      "Conversion-focused copy structure",
    ],
  },
  {
    icon: "💡",
    title: "Brand Strategy",
    short: "Visual identity systems that hold up across every touchpoint.",
    includes: [
      "Color & type systems",
      "Logo & mark refinement",
      "Brand guideline docs",
    ],
  },
  {
    icon: "⚙️",
    title: "Web Development",
    short: "Front-end builds that translate design files into shipped product.",
    includes: [
      "HTML/CSS/JS builds",
      "React component builds",
      "QA against design specs",
    ],
  },
];

function renderServices(targetId, withIncludes) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = SERVICES.map(
    (s) => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h4>${s.title}</h4>
      <p>${s.short}</p>
      ${withIncludes ? `<ul class="includes">${s.includes.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
    </div>
  `,
  ).join("");
}

// Shared tools data
const TOOLS = [
  { name: "Figma", tag: "Fg", bg: "#1e1e2e" },
  { name: "Adobe InDesign", tag: "Id", bg: "#cc3d5f" },
  { name: "Premiere Pro", tag: "Pr", bg: "#4a3fbf" },
  { name: "Adobe XD", tag: "Xd", bg: "#ff2fc2" },
  { name: "HTML 5", tag: "5", bg: "#e34f26" },
  { name: "Bootstrap", tag: "B", bg: "#7952b3" },
  { name: "Adobe Photoshop", tag: "Ps", bg: "#2f6fd1" },
  { name: "CSS 3", tag: "3", bg: "#2965f1" },
  { name: "MUI & Tailwind", tag: "M", bg: "#38bdf8" },
  { name: "Adobe Illustrator", tag: "Ai", bg: "#e6a02f" },
  { name: "Javascript", tag: "Js", bg: "#f0db4f" },
  { name: "React", tag: "⚛", bg: "#21232a" },
];

function renderTools(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = TOOLS.map(
    (t) => `
    <div class="tool-item">
      <div class="tool-icon" style="background:${t.bg}">${t.tag}</div>
      <span class="name">${t.name}</span>
    </div>
  `,
  ).join("");
}

// Portfolio grid renderer (uses PROJECTS from projects-data.js)
function renderProjectGrid(targetId, filter) {
  const el = document.getElementById(targetId);
  if (!el || typeof PROJECTS === "undefined") return;
  const list =
    !filter || filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === filter);
  el.innerHTML = list
    .map(
      (p) => `
    <a href="project-detail.html?id=${p.id}" class="project-card" style="display:block;">
      <div class="project-thumb" style="background:${p.thumbColor}">
        <img src="images/${p.id}/thumb.jpg" alt="${p.title}" onerror="this.style.display='none'">
        
      </div>
      <div class="project-info">
        <div>
          <span class="cat">${p.cat}</span>
          <h5>${p.title.split("—")[0].trim()}</h5>
        </div>
        <div class="ext-link">↗</div>
      </div>
    </a>
  `,
    )
    .join("");
}

function initFilters(filtersId, gridId) {
  const filtersEl = document.getElementById(filtersId);
  if (!filtersEl) return;
  const filters = ["All", "UI Design", "Development", "Graphics"];
  filtersEl.innerHTML = filters
    .map(
      (f, i) => `
    <button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>
  `,
    )
    .join("");
  renderProjectGrid(gridId, "All");
  filtersEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-btn")) return;
    filtersEl
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    renderProjectGrid(gridId, e.target.dataset.filter);
  });
}

// FAQ accordion
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initMarquee();
});
