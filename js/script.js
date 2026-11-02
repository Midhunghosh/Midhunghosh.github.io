/* ===== EDIT THESE ===== */
const CONFIG = {
  email: "m4midhunghosh@gmail.com",
  linkedin: "https://www.linkedin.com/in/midhunghosh",
  resumeReady: true
};
/* ====================== */
const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const toast = m => { const t = $("#toast"); t.textContent = m; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 3500); };

$("#yr").textContent = new Date().getFullYear();

/* Nav */
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
$$("#menu a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));
const links = $$("#menu a");
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => io.observe(s));

/* Config-driven links */
$$("[data-linkedin]").forEach(a => {
  if (CONFIG.linkedin) { a.href = CONFIG.linkedin; if (a.textContent.includes("add")) a.textContent = CONFIG.linkedin; }
  else a.addEventListener("click", e => { e.preventDefault(); toast("Add your LinkedIn URL in js/script.js"); });
});
$$("[data-email]").forEach(a => {
  if (CONFIG.email) { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; }
  else a.addEventListener("click", e => { e.preventDefault(); toast("Add your email in js/script.js"); });
});
$$("[data-resume]").forEach(a => {
  if (!CONFIG.resumeReady) a.addEventListener("click", e => { e.preventDefault(); toast("Resume not added yet. See README for steps."); });
});

/* Project details */
const L = (a) => "<ul>" + a.map(x => `<li>${x}</li>`).join("") + "</ul>";
const PH = t => `<div class="ph">[Placeholder] ${t}</div>`;
const PROJECTS = {
  gig: {
    title: "India Gig Economy: Platform Workers Analysis",
    gh: "https://github.com/Midhunghosh/Final_Project-India_Gig_Economy-Platform_Workers_Analysis",
    html: `
<h3>Summary</h3><p>An exploratory analysis of survey data from 50,000 Indian gig platform workers across ride-hailing, delivery and logistics platforms, with a Jupyter notebook and a presentation deck.</p>
<h3>Problem statement</h3><p>Gig platforms offer flexible earning, but workers can face long hours, thin margins after fuel and EMI costs, and limited social security.</p>
<h3>Business objectives</h3>${L(["Understand who the workers are","Measure earnings after costs","Compare working conditions by platform and demographic group","Identify social-security gaps"])}
<h3>Dataset</h3><p>Survey-style dataset of 50,000 rows and 26 original columns (demographics, work patterns, income and costs, bank/UPI and social-security access), obtained from Kaggle per the notebook. Years covered per the presentation: 2023–2026.</p>
<h3>Tools and technologies</h3><p>Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Jupyter Notebook (as imported in the notebook). Findings were also presented as a PowerPoint deck.</p>
<h3>Data preparation and cleaning</h3>${L(["Checked missing values: only two columns had gaps; secondary income is blank for workers without one","Checked duplicates, data types and value ranges: no corrections needed","Derived features such as monthly savings (net income less fuel and EMI), age bands, experience levels and income per hour","IQR method used for outliers on income per hour","Saved a cleaned dataset"])}
<h3>Methodology</h3><p>Univariate, bivariate and multivariate exploratory analysis, including correlations and grouped comparisons by platform, state, tenure and vehicle financing.</p>
<h3>Visualizations</h3>${PH("Add chart screenshots to assets/projects/ (for example, income by platform, hours vs. hourly income).")}
<h3>Key findings (from the project's presentation and notebook)</h3>
<div class="facts"><div><b>50,000</b><span>workers surveyed</span></div><div><b>27</b><span>median age (years)</span></div><div><b>₹7,645</b><span>median monthly net income</span></div><div><b>9.2 hrs</b><span>median daily hours</span></div><div><b>−0.37</b><span>correlation, daily hours vs. hourly income</span></div><div><b>70.3%</b><span>no or unclear social security</span></div></div>
${L(["Workforce is young and heavily male (93.6% male per the deck)","Platform choice shapes earnings; longer hours go with lower hourly income","Income stays flat with tenure","Workers with no vehicle loan average ₹8,037 monthly savings and keep more than those paying EMIs"])}
<h3>Business implications and recommendations</h3>${L(["Consider tenure-linked incentives, since pay does not grow with experience","Expand social-security enrolment support","Explore vehicle-financing partnerships to improve take-home savings"])}
<h3>Challenges and lessons learned</h3>${PH("Add your own reflections, e.g. handling the large derived-feature set and outliers.")}
<p>Planned improvements: <span class="todo">[add, e.g. time-series analysis if the data allows]</span></p>`
  },
  ott: {
    title: "OTT Platforms Analysis",
    gh: "https://github.com/Midhunghosh/OTT-Platforms",
    html: `
<h3>Summary</h3><p>A Power BI template (.pbit) that explores OTT content data across platforms, with a cleaned content table and custom DAX measures.</p>
<h3>Problem statement</h3><p>Understand how content is distributed across OTT platforms and how platforms compare on content attributes. <span class="todo">[Refine in your own words]</span></p>
<h3>Business objectives</h3>${L(["Show content distribution across platforms","Identify patterns in content type and genre","Compare platforms on available attributes","Present results in a clear dashboard"])}
<h3>Dataset</h3><p>A cleaned table of unique titles with: type, genre, platform, country, language, release year, duration, rating, votes, weighted rating, engagement, popularity and trending scores. <span class="todo">[Add dataset source]</span></p>
<h3>Tools and technologies</h3><p>Power BI with DAX, per the template's data model. The repository contains only the .pbit file; no Python or SQL is claimed for this project.</p>
<h3>Data preparation</h3><p>The model includes derived columns for content age, duration category and rating category. <span class="todo">[Describe cleaning steps you performed]</span></p>
<h3>Methodology and KPIs</h3><p>DAX measures in the model: Avg Rating, Total Content, Total Votes, Popularity Index, Top Content.</p>
<h3>Dashboard screenshots</h3>${PH("Open the .pbit in Power BI Desktop, export pages as images, and add them to assets/projects/.")}
<h3>Key findings</h3>${PH("Add verified findings from your dashboard. None are stated here because the repository has no written results.")}
<h3>Business implications and recommendations</h3>${PH("Add once findings are confirmed.")}
<h3>Challenges and lessons learned</h3>${PH("Add your own reflections.")}`
  }
};
const dlg = $("#modal"); let opener;
$$("[data-open]").forEach(b => b.addEventListener("click", () => {
  const p = PROJECTS[b.dataset.open]; opener = b;
  $("#mt").textContent = p.title;
  $("#mb").innerHTML = p.html + `<p style="margin-top:22px"><a class="btn primary" href="${p.gh}" target="_blank" rel="noopener">View Project on GitHub</a></p>`;
  dlg.showModal(); dlg.scrollTop = 0;
}));
$("#mx").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => opener && opener.focus());

/* Form validation (no backend: nothing is sent) */
const form = $("#form");
const rules = { n: v => v.trim() ? "" : "Enter your name.", m: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.", s: v => v.trim() ? "" : "Enter a subject.", g: v => v.trim().length >= 10 ? "" : "Write at least 10 characters." };
form.addEventListener("submit", e => {
  e.preventDefault(); let ok = true, first;
  for (const id in rules) {
    const f = $("#" + id), msg = rules[id](f.value);
    $("#e-" + id).textContent = msg; f.setAttribute("aria-invalid", !!msg);
    if (msg) { ok = false; first = first || f; }
  }
  const st = $("#status");
  if (!ok) { st.textContent = "Fix the highlighted fields."; first.focus(); return; }
  st.textContent = CONFIG.email
    ? "This form isn't connected to a mail service yet. Please email me directly at " + CONFIG.email + "."
    : "This form isn't connected to a mail service yet. See the README to set one up.";
});

/* Lightweight hero background: drifting connected nodes */
(() => {
  const c = $("#bg"), x = c.getContext("2d"), still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, pts, raf;
  const init = () => {
    w = c.width = c.offsetWidth; h = c.height = c.offsetHeight;
    const n = Math.min(60, Math.floor(w * h / 22000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 }));
  };
  const draw = () => {
    x.clearRect(0, 0, w, h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (!still) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) { x.strokeStyle = `rgba(56,189,248,${.22 * (1 - d / 130)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke(); }
      }
      x.fillStyle = "rgba(45,212,191,.7)"; x.beginPath(); x.arc(p.x, p.y, 2, 0, 6.3); x.fill();
    }
    if (!still) raf = requestAnimationFrame(draw);
  };
  init(); draw();
  addEventListener("resize", () => { cancelAnimationFrame(raf); init(); draw(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); else if (!still) draw(); });
})();
