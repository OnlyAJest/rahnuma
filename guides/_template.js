// =====================================================================
// TEMPLATE FOR A NEW GUIDE
// 1. Copy this file and rename it, e.g. guides/my-new-guide.js
// 2. Change "my-new-guide" below to the same name.
// 3. Add the guide to js/guides-list.js (that's where its title goes).
//
// Every piece of text is written twice: { en: "English", ur: "اردو" }.
// Any section you don't need can simply be deleted – the page skips it.
//
// Fees: write a plain number (1500) and the site shows "Rs 1,500" /
// "1,500 روپے" automatically. 0 shows as "Free". For anything else
// (e.g. dollars) write the text yourself: { en: "USD 39", ur: "39 ڈالر" }.
//
// Any section that mentions a price (a fee number, or text containing
// "Rs", "USD", "روپے" or "ڈالر") automatically gets a "prices can change"
// note underneath – you don't need to write it yourself.
// =====================================================================

GUIDES["my-new-guide"] = {
  lastChecked: "2026-09-24",   // YYYY-MM-DD – update whenever you re-check the facts

  intro: { en: "One or two sentences saying what this is and who needs it.",
           ur: "ایک دو جملے کہ یہ کیا ہے اور کس کو چاہیے۔" },

  // "Please note" box near the top: use it for anything uncertain,
  // e.g. rules that vary by district, or facts from unofficial sources.
  notes: [
    { en: "This can vary from district to district.", ur: "یہ ضلع بہ ضلع مختلف ہو سکتا ہے۔" }
  ],

  // Small summary boxes at the top of the page
  keyFacts: [
    { label: { en: "Fee", ur: "فیس" },  value: { en: "Rs 500", ur: "500 روپے" } },
    { label: { en: "Time", ur: "وقت" }, value: { en: "7 days", ur: "7 دن" } }
  ],

  // For welfare programs: shown in the "Who can apply" section
  eligibility: [ { en: "Who qualifies", ur: "کون اہل ہے" } ],
  notEligible: [ { en: "Who does not qualify", ur: "کون اہل نہیں" } ],

  documents: [
    { en: "Original CNIC", ur: "اصل شناختی کارڈ" }
  ],

  // Optional: several separate tick-box checklists on one page,
  // e.g. "Medical leave" and "Maternity leave". Each gets its own box.
  checklists: [
    { title: { en: "Checklist name", ur: "فہرست کا نام" },
      items: [ { en: "Document", ur: "کاغذ" } ],
      note: { en: "Optional note under the list.", ur: "اختیاری نوٹ۔" } }
  ],

  steps: [
    { en: "First step", ur: "پہلا مرحلہ" },
    { en: "Second step", ur: "دوسرا مرحلہ" }
  ],

  // One or more tables. Each row must have the same number of cells as "columns".
  fees: [
    {
      title: { en: "Fees", ur: "فیس" },            // optional
      columns: [ { en: "Speed", ur: "رفتار" }, { en: "Fee", ur: "فیس" }, { en: "Time", ur: "وقت" } ],
      rows: [
        [ { en: "Normal", ur: "عام" }, 500, { en: "7 days", ur: "7 دن" } ]
      ],
      note: { en: "Optional note under the table.", ur: "ٹیبل کے نیچے اختیاری نوٹ۔" }
    }
  ],

  // Optional extra sections with your own heading (text, bullet points and/or a table).
  // These are shown near the top of the page, before the documents list.
  extra: [
    {
      icon: "📌",
      heading: { en: "Extra section", ur: "اضافی حصہ" },
      text: { en: "A paragraph.", ur: "ایک پیراگراف۔" },
      points: [ { en: "A bullet point", ur: "ایک نکتہ" } ]
      // table: { columns: [...], rows: [...] }
    }
  ],

  where: [
    { en: "Which office to visit", ur: "کس دفتر جانا ہے" }
  ],

  // Use "phone" OR "url"
  contacts: [
    { name: { en: "Helpline", ur: "ہیلپ لائن" }, phone: "1777" },
    { name: { en: "Official website", ur: "سرکاری ویب سائٹ" }, url: "https://www.example.gov.pk" }
  ],

  mistakes: [
    { en: "A common mistake", ur: "ایک عام غلطی" }
  ],

  faqs: [
    { q: { en: "A question?", ur: "ایک سوال؟" },
      a: { en: "The answer.", ur: "جواب۔" } }
  ],

  related: ["cnic-new"],   // ids of other guides to link to

  // Where you got the facts. Shown at the bottom of the page.
  // Leave out "url" for sources that aren't websites (e.g. interviews).
  sources: [
    { name: "Official source name", url: "https://www.example.gov.pk" },
    { name: "Information from teachers working in Punjab" }
  ]
};
