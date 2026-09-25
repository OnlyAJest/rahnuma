// =====================================================================
// FEEDBACK PAGE  (feedback.html)
// Two forms:
//   feedback.html                          → "Give feedback"
//   feedback.html?type=report&guide=cnic-new → "Report a change" for a guide
//
// Messages are sent to the address in js/settings.js (Formspree).
// If that fails, people can send the same message by email instead.
// All words shown on the page are in js/ui-text.js (the "fb..." entries).
// =====================================================================

// The five faces for "How satisfied are you?"
const SATISFACTION = [
  { value: "1", icon: "😞", label: "fbSat1" },
  { value: "2", icon: "🙁", label: "fbSat2" },
  { value: "3", icon: "😐", label: "fbSat3" },
  { value: "4", icon: "🙂", label: "fbSat4" },
  { value: "5", icon: "😄", label: "fbSat5" }
];

// Tick boxes for "What has changed?"
const REPORT_PARTS = [
  { value: "fee", label: "fbPartFee" },
  { value: "documents", label: "fbPartDocs" },
  { value: "steps", label: "fbPartSteps" },
  { value: "time", label: "fbPartTime" },
  { value: "office", label: "fbPartOffice" },
  { value: "contact", label: "fbPartContact" },
  { value: "other", label: "fbPartOther" }
];

// Choices for "How do you know?"
const REPORT_SOURCES = [
  { value: "visited", label: "fbSrcVisited" },
  { value: "official", label: "fbSrcOfficial" },
  { value: "heard", label: "fbSrcHeard" },
  { value: "other", label: "fbSrcOther" }
];


function renderFeedback() {
  const params = new URLSearchParams(location.search);
  const type = params.get("type") === "report" ? "report" : "feedback";
  const guideId = params.get("guide") || "";
  const saved = readForm();   // keep what was typed when the language is switched

  document.title = t(UI.fbTitle) + " – " + t(UI.siteName);
  document.getElementById("app").innerHTML = `
    <a class="back" href="${pageLink("index.html")}">${t(UI.allTopics)}</a>
    <h1>${t(UI.fbTitle)}</h1>
    <p class="intro">${t(UI.fbIntro)}</p>

    <nav class="switch">
      <a href="${pageLink("feedback.html", null, { type: "feedback", guide: guideId })}" class="${type === "feedback" ? "active" : ""}">⭐ ${t(UI.fbTabFeedback)}</a>
      <a href="${pageLink("feedback.html", null, { type: "report", guide: guideId })}" class="${type === "report" ? "active" : ""}">✏️ ${t(UI.fbTabReport)}</a>
    </nav>

    <div id="fb-area">${type === "report" ? reportForm(guideId) : feedbackForm(guideId)}</div>`;

  restoreForm(saved);
  document.getElementById("fb-form").addEventListener("submit", submitFeedback);
}


// ---------- The two forms ----------

function feedbackForm(guideId) {
  return `
    <form id="fb-form" class="block form" data-type="feedback" novalidate>
      <label for="fb-topic">1. ${t(UI.fbTopic)}</label>
      <select id="fb-topic" name="topic">${guideOptions(guideId)}</select>

      <fieldset>
        <legend>2. ${t(UI.fbSatisfaction)}</legend>
        <div class="faces">
          ${SATISFACTION.map(s => `
            <label class="face">
              <input type="radio" name="satisfaction" value="${s.value}">
              <span class="face-icon" aria-hidden="true">${s.icon}</span>
              <span class="face-label">${t(UI[s.label])}</span>
            </label>`).join("")}
        </div>
      </fieldset>

      <label for="fb-comments">3. ${t(UI.fbComments)} <span class="optional">(${t(UI.fbOptional)})</span></label>
      <textarea id="fb-comments" name="comments" rows="4" maxlength="2000"></textarea>

      ${formEnd()}
    </form>`;
}

function reportForm(guideId) {
  return `
    <form id="fb-form" class="block form" data-type="report" novalidate>
      <label for="fb-guide">1. ${t(UI.fbWhichPage)}</label>
      <select id="fb-guide" name="guide">${guideOptions(guideId)}</select>

      <fieldset>
        <legend>2. ${t(UI.fbWhatWrong)}</legend>
        <div class="choices">
          ${REPORT_PARTS.map(p => `
            <label class="choice"><input type="checkbox" name="parts" value="${p.value}"> <span>${t(UI[p.label])}</span></label>`).join("")}
        </div>
      </fieldset>

      <label for="fb-details">3. ${t(UI.fbDetails)}</label>
      <p class="tip">${t(UI.fbDetailsHint)}</p>
      <textarea id="fb-details" name="details" rows="5" maxlength="3000"></textarea>

      <label for="fb-source">4. ${t(UI.fbSource)} <span class="optional">(${t(UI.fbOptional)})</span></label>
      <select id="fb-source" name="source">
        <option value="">${t(UI.fbChoose)}</option>
        ${REPORT_SOURCES.map(s => `<option value="${s.value}">${t(UI[s.label])}</option>`).join("")}
      </select>

      <label for="fb-contact">5. ${t(UI.fbContact)} <span class="optional">(${t(UI.fbOptional)})</span></label>
      <p class="tip">${t(UI.fbContactHint)}</p>
      <input id="fb-contact" name="contact" type="text" maxlength="100" autocomplete="off">

      ${formEnd()}
    </form>`;
}

// Privacy note, hidden spam trap, error line and Send button – same on both forms.
function formEnd() {
  return `
    <p class="privacy">🔒 ${t(UI.fbPrivacy)}</p>
    <input type="text" name="_gotcha" class="trap" tabindex="-1" autocomplete="off" aria-hidden="true">
    <p id="fb-error" class="fb-error" role="alert" hidden></p>
    <button type="submit" class="submit">${t(UI.fbSend)}</button>`;
}

// Drop-down list of every guide, grouped by topic, plus "something else".
function guideOptions(selectedId) {
  const groups = CATEGORIES.map(c => `
    <optgroup label="${t(c.title)}">
      ${c.guides.map(g => `<option value="${g.id}" ${g.id === selectedId ? "selected" : ""}>${t(g.title)}</option>`).join("")}
    </optgroup>`).join("");
  return `<option value="">${t(UI.fbChoose)}</option>${groups}<option value="other">${t(UI.fbOther)}</option>`;
}


// ---------- Reading and restoring what was typed ----------

function readForm() {
  const form = document.getElementById("fb-form");
  if (!form) return null;
  const data = new FormData(form);
  return {
    topic: data.get("topic") || "",
    guide: data.get("guide") || "",
    satisfaction: data.get("satisfaction") || "",
    comments: data.get("comments") || "",
    parts: data.getAll("parts"),
    details: data.get("details") || "",
    source: data.get("source") || "",
    contact: data.get("contact") || "",
    _gotcha: data.get("_gotcha") || ""
  };
}

function restoreForm(saved) {
  if (!saved) return;
  const form = document.getElementById("fb-form");
  Object.entries(saved).forEach(([name, value]) => {
    form.querySelectorAll(`[name="${name}"]`).forEach(field => {
      if (field.type === "radio") field.checked = field.value === value;
      else if (field.type === "checkbox") field.checked = value.includes(field.value);
      else if (value) field.value = value;
    });
  });
}


// ---------- Sending ----------

async function submitFeedback(event) {
  event.preventDefault();
  const form = event.target;
  const type = form.dataset.type;
  const data = readForm();

  // Check the required answers
  let problem = null;
  if (type === "feedback") {
    if (!data.topic) problem = UI.fbNeedTopic;
    else if (!data.satisfaction) problem = UI.fbNeedSatisfaction;
  } else {
    if (!data.guide) problem = UI.fbNeedGuide;
    else if (!data.details.trim()) problem = UI.fbNeedDetails;
  }
  const errorLine = document.getElementById("fb-error");
  if (problem) {
    errorLine.textContent = t(problem);
    errorLine.hidden = false;
    return;
  }
  errorLine.hidden = true;
  if (data._gotcha) return;   // filled in by a spam robot, not a person

  const message = buildMessage(type, data);
  const button = form.querySelector(".submit");
  button.disabled = true;
  button.textContent = t(UI.fbSending);

  if (SETTINGS.feedbackEndpoint) {
    try {
      const response = await fetch(SETTINGS.feedbackEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(message)
      });
      if (response.ok) { showThanks(type, data.guide); return; }
    } catch (e) { /* no internet or service down – fall through to email */ }
  }

  button.disabled = false;
  button.textContent = t(UI.fbSend);
  showFallback(message);
}

// The message that is sent (in English, so it's easy to read in your inbox).
function guideTitleEn(id) {
  if (!id) return "";
  if (id === "other") return "Something else / not listed";
  const info = findGuideInfo(id);
  return info ? info.guide.title.en + " (" + id + ")" : id;
}

function buildMessage(type, data) {
  const en = key => UI[key].en;
  const message = {
    _subject: type === "report" ? "Rahnuma: reported change – " + guideTitleEn(data.guide) : "Rahnuma: feedback",
    type: type === "report" ? "Report a change" : "Feedback",
    language_used: lang === "ur" ? "Urdu" : "English",
    sent_at: new Date().toISOString()
  };
  if (type === "feedback") {
    const sat = SATISFACTION.find(s => s.value === data.satisfaction);
    message.wanted_help_with = guideTitleEn(data.topic);
    message.satisfaction = data.satisfaction + "/5 – " + en(sat.label);
    if (data.comments.trim()) message.comments = data.comments.trim();
  } else {
    message.guide = guideTitleEn(data.guide);
    if (data.parts.length) message.what_changed = data.parts.map(p => en(REPORT_PARTS.find(x => x.value === p).label)).join(", ");
    message.details = data.details.trim();
    if (data.source) message.how_they_know = en(REPORT_SOURCES.find(s => s.value === data.source).label);
    if (data.contact.trim()) message.contact = data.contact.trim();
  }
  return message;
}


// ---------- After sending ----------

function showThanks(type, guideId) {
  const backToGuide = guideId && guideId !== "other" && findGuideInfo(guideId)
    ? `<a class="next-link" href="${pageLink("guide.html", guideId)}">${findGuideInfo(guideId).category.icon} ${t(findGuideInfo(guideId).guide.title)}</a>`
    : "";
  document.getElementById("fb-area").innerHTML = `
    <div class="block thanks">
      <h2>✅ ${t(UI.fbThanksTitle)}</h2>
      <p>${t(type === "report" ? UI.fbThanksReport : UI.fbThanksFeedback)}</p>
      ${backToGuide}
      <a class="next-link" href="${pageLink("index.html")}">${t(UI.allTopics)}</a>
    </div>`;
  window.scrollTo(0, 0);
}

// Online sending isn't set up or didn't work: offer email instead.
function showFallback(message) {
  const errorLine = document.getElementById("fb-error");
  if (!SETTINGS.feedbackEmail) {
    errorLine.textContent = t(UI.fbCantSend);
    errorLine.hidden = false;
    return;
  }
  const body = Object.entries(message)
    .filter(([key]) => key !== "_subject")
    .map(([key, value]) => key.replace(/_/g, " ") + ": " + value)
    .join("\n");
  const mailto = "mailto:" + SETTINGS.feedbackEmail +
    "?subject=" + encodeURIComponent(message._subject) +
    "&body=" + encodeURIComponent(body);
  errorLine.innerHTML = `
    ${t(UI.fbEmailFallback)}
    <a class="share email" href="${mailto}">✉️ ${t(UI.fbEmailButton)}</a>`;
  errorLine.hidden = false;
}
