// =====================================================================
// APP
// Builds the pages from the data in ui-text.js, guides-list.js and the
// /guides folder. You normally don't need to edit this file just to
// change content — edit the data files instead.
//
// Sections:
//   1. Language (Urdu / English switch)
//   2. Small helpers
//   3. Home page (topic tiles, topic lists, search)
//   4. Guide page (sections + jump buttons)
//   5. Start-up
// =====================================================================

// Every guide file adds itself to this object: GUIDES["cnic-new"] = {...}
const GUIDES = {};

let lang = "ur"; // "ur" or "en". Urdu is the default.


// ---------------------------------------------------------------------
// 1. LANGUAGE
// ---------------------------------------------------------------------

// Pick the language: from the link (?lang=en), then from last visit, else Urdu.
function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "ur") return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ur") return saved;
  } catch (e) { /* storage blocked – ignore */ }
  return "ur";
}

function switchLang() {
  lang = (lang === "ur") ? "en" : "ur";
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }

  // Keep the language in the address bar so shared links open in the same language.
  const params = new URLSearchParams(location.search);
  params.set("lang", lang);
  history.replaceState(null, "", "?" + params.toString() + location.hash);

  renderPage();
}

// Translate: t({en: "Hello", ur: "سلام"}) returns the text for the current language.
// Plain strings and numbers are returned unchanged.
function t(value) {
  if (value && typeof value === "object") return value[lang] || value.en || "";
  return value === undefined || value === null ? "" : value;
}


// ---------------------------------------------------------------------
// 2. SMALL HELPERS
// ---------------------------------------------------------------------

// Link to a page, keeping the current language. extra = other URL settings, e.g. {cat: "identity"}
function pageLink(page, id, extra) {
  const params = new URLSearchParams(extra || {});
  if (id) params.set("id", id);
  params.set("lang", lang);
  return page + "?" + params.toString();
}

// Fee formatting: 0 → "Free", 1500 → "Rs 1,500" / "1,500 روپے".
// Text values (e.g. {en: "USD 39", ur: "39 ڈالر"}) are shown as written.
function formatCell(value) {
  if (typeof value === "number") {
    if (value === 0) return t(UI.free);
    const amount = value.toLocaleString("en-US");
    return lang === "ur" ? amount + " روپے" : "Rs " + amount;
  }
  return t(value);
}

// "2026-09-24" → "24 September 2026" / "24 ستمبر 2026"
function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return day + " " + MONTHS[lang][month - 1] + " " + year;
}

// "pakistan" → "All Pakistan", "punjab" → "Punjab". Anything else shows nothing.
function regionName(region) {
  if (region === "punjab") return t(UI.punjab);
  if (region === "pakistan") return t(UI.allPakistan);
  return "";
}

// Does this content mention a price? (a fee number, or text with Rs / USD / روپے / ڈالر)
// Any section that does gets the "prices can change" note automatically.
function mentionsPrice(content) {
  if (typeof content === "number") return content > 0;
  if (typeof content === "string") return /\bRs\b|USD|روپے|ڈالر/.test(content);
  if (Array.isArray(content)) return content.some(mentionsPrice);
  if (content && typeof content === "object") return Object.values(content).some(mentionsPrice);
  return false;
}

function priceNote() {
  return `<p class="price-note">${t(UI.priceNote)}</p>`;
}

// Find a guide's entry (title, category) in guides-list.js
function findGuideInfo(id) {
  for (const category of CATEGORIES) {
    const guide = category.guides.find(g => g.id === id);
    if (guide) return { guide, category };
  }
  return null;
}

function renderTable(table) {
  const head = table.columns.map(c => `<th>${t(c)}</th>`).join("");
  const body = table.rows.map(row =>
    "<tr>" + row.map(cell => `<td>${formatCell(cell)}</td>`).join("") + "</tr>"
  ).join("");
  return `
    ${table.title ? `<h3>${t(table.title)}</h3>` : ""}
    <div class="table-wrap"><table>
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table></div>
    ${table.note ? `<p class="note">${t(table.note)}</p>` : ""}`;
}

// A list of documents with tick boxes.
function renderChecklist(items) {
  return `
    <p class="tip">${t(UI.documentsTip)}</p>
    <ul class="checklist">
      ${items.map(item =>
        `<li><label><input type="checkbox"> <span>${t(item)}</span></label></li>`).join("")}
    </ul>`;
}

function renderList(items, tag = "ul", className = "") {
  if (!items || items.length === 0) return "";
  return `<${tag} class="${className}">` +
    items.map(item => `<li>${t(item)}</li>`).join("") +
    `</${tag}>`;
}

// One guide as a row in a list (home page, topic page, search results).
function guideRow(guide, category) {
  const region = regionName(guide.region || category.region);
  return `
    <li data-search="${searchTextFor(guide, category)}">
      <a href="${pageLink("guide.html", guide.id)}">
        <span class="row-icon" aria-hidden="true">${category.icon}</span>
        <span class="row-text">
          <span class="row-title">${t(guide.title)}</span>
          ${region ? `<span class="row-sub">${region}</span>` : ""}
        </span>
        <span class="arrow" aria-hidden="true"></span>
      </a>
    </li>`;
}

// Common page parts (header + footer text) for both pages.
function renderFrame() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  document.getElementById("logo").textContent = t(UI.siteName);
  document.getElementById("logo").href = pageLink("index.html");
  document.getElementById("lang-btn").textContent = t(UI.switchLang);
  document.getElementById("footer").textContent = t(UI.footer);
}


// ---------------------------------------------------------------------
// 3. HOME PAGE
//    index.html            → search + topic tiles
//    index.html?cat=teachers → the list of guides in one topic
// ---------------------------------------------------------------------

function renderHome() {
  const catId = new URLSearchParams(location.search).get("cat");
  const category = CATEGORIES.find(c => c.id === catId);
  if (category) { renderCategory(category); return; }

  const app = document.getElementById("app");
  const oldSearch = document.getElementById("search");
  const searchText = oldSearch ? oldSearch.value : "";
  document.title = t(UI.siteName) + " – " + t(UI.tagline);

  // Quick links: the most needed guides, listed in guides-list.js
  const quick = POPULAR.map(id => {
    const info = findGuideInfo(id);
    return info ? `<a class="chip" href="${pageLink("guide.html", id)}">${info.category.icon} ${t(info.guide.shortTitle || info.guide.title)}</a>` : "";
  }).join("");

  // One tile per topic
  const tiles = CATEGORIES.map(c => `
    <a class="tile" href="${pageLink("index.html", null, { cat: c.id })}">
      <span class="tile-icon" aria-hidden="true">${c.icon}</span>
      <span class="tile-title">${t(c.title)}</span>
      <span class="tile-count">${c.guides.length} ${t(UI.guidesCount)}${regionName(c.region) ? " · " + regionName(c.region) : ""}</span>
    </a>`).join("");

  // All guides in one list – only shown while searching
  const allRows = CATEGORIES.map(c => c.guides.map(g => guideRow(g, c)).join("")).join("");

  app.innerHTML = `
    <section class="hero">
      <h1>${t(UI.tagline)}</h1>
      <label for="search">${t(UI.searchLabel)}</label>
      <input id="search" type="search" autocomplete="off" placeholder="${t(UI.searchHint)}">
    </section>

    <div id="browse">
      <h2 class="small-heading">${t(UI.quickLinks)}</h2>
      <nav class="chips">${quick}</nav>
      <h2 class="small-heading">${t(UI.topics)}</h2>
      <div class="tiles">${tiles}</div>
      <section class="about">
        <h2>${t(UI.aboutTitle)}</h2>
        <p>${t(UI.aboutText)}</p>
      </section>
    </div>

    <div id="results" hidden>
      <ul class="guide-list">${allRows}</ul>
      <p id="no-results" class="no-results" hidden>${t(UI.noResults)}</p>
    </div>`;

  const search = document.getElementById("search");
  search.value = searchText;
  search.addEventListener("input", () => filterGuides(search.value));
  filterGuides(searchText);
}

// The list of guides inside one topic.
function renderCategory(category) {
  document.title = t(category.title) + " – " + t(UI.siteName);
  const region = regionName(category.region);
  document.getElementById("app").innerHTML = `
    <a class="back" href="${pageLink("index.html")}">${t(UI.allTopics)}</a>
    <h1 class="topic-title"><span aria-hidden="true">${category.icon}</span> ${t(category.title)}</h1>
    ${region ? `<p class="crumb">${region}</p>` : ""}
    <ul class="guide-list">${category.guides.map(g => guideRow(g, category)).join("")}</ul>`;
}

// All the words the search box should match for one guide (both languages).
function searchTextFor(guide, category) {
  return [guide.title.en, guide.title.ur, category.title.en, category.title.ur, guide.keywords]
    .join(" ").toLowerCase().replace(/"/g, "");
}

// While typing: hide the tiles and show matching guides instead.
function filterGuides(query) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const searching = words.length > 0;
  document.getElementById("browse").hidden = searching;
  document.getElementById("results").hidden = !searching;
  if (!searching) return;

  let anyVisible = false;
  document.querySelectorAll("#results li[data-search]").forEach(item => {
    const matches = words.every(word => item.dataset.search.includes(word));
    item.hidden = !matches;
    if (matches) anyVisible = true;
  });
  document.getElementById("no-results").hidden = anyVisible;
}


// ---------------------------------------------------------------------
// 4. GUIDE PAGE  (guide.html?id=cnic-new#steps)
//    The whole guide is one scrolling page. A row of buttons at the top
//    jumps to each section. The part after # opens the page at a section.
// ---------------------------------------------------------------------

function currentGuideId() {
  return new URLSearchParams(location.search).get("id");
}

// Load guides/<id>.js, then draw the page.
function loadGuide() {
  const id = currentGuideId();
  const app = document.getElementById("app");

  if (!id || !findGuideInfo(id)) { renderNotFound(); return; }
  app.innerHTML = `<p>${t(UI.loading)}</p>`;

  const script = document.createElement("script");
  script.src = "guides/" + id + ".js";
  script.onload = renderGuide;
  script.onerror = renderNotFound;
  document.body.appendChild(script);
}

function renderNotFound() {
  document.getElementById("app").innerHTML = `
    <a class="back" href="${pageLink("index.html")}">${t(UI.back)}</a>
    <h1>${t(UI.notFound)}</h1>`;
}

// Build the list of sections for a guide. Sections with no content are left out.
// Each tab: { id, icon, label, html }
function buildTabs(data, guide) {
  const tabs = [];
  const add = (id, icon, label, html) => { if (html) tabs.push({ id, icon, label, html }); };

  // --- Summary ---
  let summary = "";
  if (data.intro) summary += `<p class="intro">${t(data.intro)}</p>`;
  if (data.keyFacts) {
    summary += `<dl class="key-facts">` + data.keyFacts.map(fact =>
      `<div><dt>${t(fact.label)}</dt><dd>${t(fact.value)}</dd></div>`).join("") + `</dl>` +
      (mentionsPrice(data.keyFacts) ? priceNote() : "");
  }
  if (data.notes) {
    summary += `
      <div class="notes">
        <h2><span class="icon" aria-hidden="true">ℹ️</span> ${t(UI.notes)}</h2>
        ${renderList(data.notes)}
      </div>`;
  }
  summary += `
    <p class="checked">
      <strong>${t(UI.lastChecked)} ${formatDate(data.lastChecked)}${lang === "ur" ? "۔" : "."}</strong>
      ${t(UI.disclaimer)}
    </p>`;
  const shareText = encodeURIComponent(t(guide.title) + "\n" + location.href.split("#")[0]);
  summary += `<a class="share" href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener">${t(UI.share)}</a>`;
  if (data.related) {
    const links = data.related.map(relatedId => {
      const r = findGuideInfo(relatedId);
      return r ? `<li><a href="${pageLink("guide.html", relatedId)}">${r.category.icon} ${t(r.guide.title)}</a></li>` : "";
    }).join("");
    summary += block("🔗", UI.related, `<ul class="related">${links}</ul>`);
  }
  add("summary", "ℹ️", UI.tabSummary, summary);

  // --- Who can apply (welfare programs) ---
  let who = "";
  if (data.eligibility) who += block("✅", UI.eligibility, renderList(data.eligibility, "ul", "yes-list"), data.eligibility);
  if (data.notEligible) who += block("🚫", UI.notEligible, renderList(data.notEligible, "ul", "no-list"), data.notEligible);
  add("who", "✅", UI.tabWho, who);

  // --- Details (extra sections, e.g. teacher merit tables) ---
  add("details", "📌", UI.tabDetails, (data.extra || []).map(extra =>
    block(extra.icon || "📌", extra.heading,
      (extra.text ? `<p>${t(extra.text)}</p>` : "") +
      renderList(extra.points) +
      (extra.table ? renderTable(extra.table) : ""), extra)).join(""));

  // --- Documents (single list, or several checklists) ---
  let docs = "";
  if (data.documents) docs += block("📄", UI.documents, renderChecklist(data.documents), data.documents);
  (data.checklists || []).forEach(list => {
    docs += block("📋", list.title,
      renderChecklist(list.items) + (list.note ? `<p class="note">${t(list.note)}</p>` : ""), list);
  });
  // --- Steps ---
  const steps = data.steps ? block("👣", UI.steps, renderList(data.steps, "ol", "steps"), data.steps) : "";

  // Guides with several checklists (working teachers) show the steps first,
  // because the steps explain which checklist to use and in what order.
  if (data.checklists) {
    add("steps", "👣", UI.tabSteps, steps);
    add("documents", "📄", UI.tabDocuments, docs);
  } else {
    add("documents", "📄", UI.tabDocuments, docs);
    add("steps", "👣", UI.tabSteps, steps);
  }

  // --- Fee ---
  if (data.fees) add("fees", "💰", UI.tabFees, block("💰", UI.fees, data.fees.map(renderTable).join(""), data.fees));

  // --- Where to go + contacts ---
  let where = "";
  if (data.where) where += block("📍", UI.where, renderList(data.where), data.where);
  if (data.contacts) {
    where += block("📞", UI.contacts, `<ul class="contacts">` +
      data.contacts.map(c => {
        const link = c.phone
          ? `<a href="tel:${c.phone.replace(/[^0-9+]/g, "")}" dir="ltr">${c.phone}</a>`
          : `<a href="${c.url}" target="_blank" rel="noopener" dir="ltr">${c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a>`;
        return `<li><span>${t(c.name)}</span> ${link}</li>`;
      }).join("") + `</ul>`);
  }
  add("where", "📍", UI.tabWhere, where);

  // --- Tips: mistakes + questions ---
  let tips = "";
  if (data.mistakes) tips += block("⚠️", UI.mistakes, renderList(data.mistakes, "ul", "warn"), data.mistakes);
  if (data.faqs) {
    tips += block("❓", UI.faqs, data.faqs.map(f =>
      `<details><summary>${t(f.q)}</summary><p>${t(f.a)}</p></details>`).join(""), data.faqs);
  }
  add("tips", "💡", UI.tabTips, tips);

  // --- Sources ---
  if (data.sources) {
    add("sources", "📚", UI.tabSources, block("📚", UI.sources, `<ul class="sources">` +
      // A source without a url (e.g. "information from teachers") is shown as plain text.
      data.sources.map(s => s.url
        ? `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`
        : `<li>${s.name}</li>`).join("") + `</ul>`));
  }

  return tabs;
}

function renderGuide() {
  const id = currentGuideId();
  const data = GUIDES[id];
  const info = findGuideInfo(id);
  if (!data || !info) { renderNotFound(); return; }

  const { guide, category } = info;
  document.title = t(guide.title) + " – " + t(UI.siteName);

  const tabs = buildTabs(data, guide);
  const region = regionName(guide.region || category.region);

  // Jump buttons at the top + every section one after another (normal scrolling).
  const jumpBar = tabs.map(tab => `
    <a class="tab" href="#${tab.id}" data-tab="${tab.id}">
      <span aria-hidden="true">${tab.icon}</span> ${t(tab.label)}
    </a>`).join("");

  const sections = tabs.map(tab => `
    <section class="panel" id="${tab.id}" data-panel="${tab.id}">
      ${tab.html}
    </section>`).join("");

  document.getElementById("app").innerHTML = `
    <a class="back" href="${pageLink("index.html", null, { cat: category.id })}">${t(category.title)}</a>
    <h1>${t(guide.title)}</h1>
    ${region ? `<p class="crumb">${category.icon} ${region}</p>` : ""}
    <nav class="tabs">${jumpBar}</nav>
    ${sections}`;

  // Tapping a button scrolls smoothly to that section.
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      jumpTo(tab.dataset.tab);
    });
  });

  // A link like guide.html?id=cnic-new#steps opens at the Steps section.
  const startAt = location.hash.slice(1);
  if (startAt && document.getElementById(startAt)) jumpTo(startAt, false);
  else highlightTab(tabs[0] && tabs[0].id);
}

// Scroll to a section and remember it in the address (so the link can be shared).
function jumpTo(sectionId, smooth = true) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  history.replaceState(null, "", "#" + sectionId);
  highlightTab(sectionId);
}

// Colour the button of the section the reader is looking at.
function highlightTab(sectionId) {
  document.querySelectorAll(".tab").forEach(tab => {
    const active = tab.dataset.tab === sectionId;
    if (active && !tab.classList.contains("active")) {
      tab.scrollIntoView({ block: "nearest", inline: "center" });
    }
    tab.classList.toggle("active", active);
  });
}

// While scrolling, keep the highlighted button in step with the page.
function updateTabOnScroll() {
  const panels = [...document.querySelectorAll(".panel")];
  if (panels.length === 0) return;
  let current = panels[0].dataset.panel;
  panels.forEach(p => { if (p.getBoundingClientRect().top <= 150) current = p.dataset.panel; });
  highlightTab(current);
}

// A white box with a heading. If its content mentions a price,
// the "prices can change" note is added at the bottom automatically.
function block(icon, heading, body, content) {
  return `
    <div class="block">
      <h2><span class="icon" aria-hidden="true">${icon}</span> ${t(heading)}</h2>
      ${body}
      ${mentionsPrice(content) ? priceNote() : ""}
    </div>`;
}


// ---------------------------------------------------------------------
// 5. START-UP
// ---------------------------------------------------------------------

function renderPage() {
  renderFrame();
  if (document.body.dataset.page === "home") {
    renderHome();
  } else if (GUIDES[currentGuideId()]) {
    renderGuide();   // guide already loaded – just redraw in the new language
  } else {
    loadGuide();
  }
}

lang = detectLang();
document.getElementById("lang-btn").addEventListener("click", switchLang);
window.addEventListener("hashchange", () => jumpTo(location.hash.slice(1)));
let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => { updateTabOnScroll(); scrollTicking = false; });
});
renderPage();
