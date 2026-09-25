// =====================================================================
// UI TEXT
// Words used on buttons, headings and labels across the whole site.
// (The content of each guide lives in the /guides folder instead.)
//
// Every entry has an English (en) and Urdu (ur) version.
// To change a word, just edit the text between the quotes.
// =====================================================================

const UI = {
  siteName:     { en: "Rahnuma", ur: "رہنما" },
  tagline:      { en: "Simple guides for getting government documents made in Pakistan",
                  ur: "سرکاری کاغذات بنوانے کے لیے آسان رہنمائی" },
  switchLang:   { en: "اردو", ur: "English" },

  // Home page
  searchLabel:  { en: "What do you need to get made?", ur: "آپ کو کیا بنوانا ہے؟" },
  searchHint:   { en: "e.g. ID card, passport, domicile", ur: "مثلاً شناختی کارڈ، پاسپورٹ، ڈومیسائل" },
  noResults:    { en: "Nothing found. Try a different word, or look through the list below.",
                  ur: "کچھ نہیں ملا۔ کوئی اور لفظ لکھ کر دیکھیں یا نیچے دی گئی فہرست دیکھیں۔" },
  quickLinks:   { en: "Most needed", ur: "سب سے زیادہ ضرورت" },
  topics:       { en: "Choose a topic", ur: "موضوع منتخب کریں" },
  allTopics:    { en: "All topics", ur: "تمام موضوعات" },
  guidesCount:  { en: "guides", ur: "صفحات" },
  allPakistan:  { en: "All Pakistan", ur: "پورا پاکستان" },
  punjab:       { en: "Punjab", ur: "پنجاب" },
  aboutTitle:   { en: "About Rahnuma", ur: "رہنما کے بارے میں" },
  aboutText:    { en: "Rahnuma is a free, volunteer-run website that explains, in simple words, which documents you need, what it costs, and where to go for common government services. It is not a government website and does not collect any of your information.",
                  ur: "رہنما ایک مفت اور رضاکارانہ ویب سائٹ ہے جو آسان الفاظ میں بتاتی ہے کہ عام سرکاری کاموں کے لیے کون سے کاغذات چاہییں، کتنی فیس لگتی ہے اور کہاں جانا ہے۔ یہ سرکاری ویب سائٹ نہیں ہے اور آپ کی کوئی معلومات جمع نہیں کرتی۔" },

  // Guide page
  back:         { en: "All guides", ur: "تمام معلومات" },

  // Jump-button names on the guide page (keep them short – they sit side by side)
  tabSummary:   { en: "Summary", ur: "خلاصہ" },
  tabWho:       { en: "Who can apply", ur: "کون اہل ہے" },
  tabDetails:   { en: "Details", ur: "تفصیل" },
  tabDocuments: { en: "Documents", ur: "کاغذات" },
  tabSteps:     { en: "Steps", ur: "طریقہ" },
  tabFees:      { en: "Fee", ur: "فیس" },
  tabWhere:     { en: "Where", ur: "کہاں" },
  tabTips:      { en: "Tips", ur: "مشورے" },
  tabSources:   { en: "Sources", ur: "ذرائع" },

  eligibility:  { en: "Who can apply", ur: "کون درخواست دے سکتا ہے" },
  notEligible:  { en: "Who cannot apply", ur: "کون اہل نہیں" },
  lastChecked:  { en: "Last checked:", ur: "آخری بار جانچ:" },
  disclaimer:   { en: "Fees and rules can change. Please confirm with the office or official website before you go.",
                  ur: "فیس اور قوانین بدل سکتے ہیں۔ جانے سے پہلے متعلقہ دفتر یا سرکاری ویب سائٹ سے تصدیق کر لیں۔" },
  priceNote:    { en: "💬 Prices change from time to time, and the prices on this website may not be fully up to date. Please confirm the current fee at the office or on the official website before paying.",
                  ur: "💬 قیمتیں وقتاً فوقتاً بدلتی رہتی ہیں اور اس ویب سائٹ پر دی گئی قیمتیں مکمل طور پر تازہ ترین نہیں بھی ہو سکتیں۔ ادائیگی سے پہلے دفتر یا سرکاری ویب سائٹ سے موجودہ فیس کی تصدیق کر لیں۔" },
  notes:        { en: "Please note", ur: "براہِ کرم نوٹ کریں" },
  documents:    { en: "Documents you need", ur: "ضروری کاغذات" },
  documentsTip: { en: "Tick each one when you have it ready.", ur: "جو کاغذ تیار ہو جائے اس پر نشان لگا لیں۔" },
  steps:        { en: "Step by step", ur: "مرحلہ وار طریقہ" },
  fees:         { en: "Fee and time", ur: "فیس اور وقت" },
  where:        { en: "Where to go", ur: "کہاں جائیں" },
  contacts:     { en: "Helpline and websites", ur: "ہیلپ لائن اور ویب سائٹ" },
  mistakes:     { en: "Common mistakes to avoid", ur: "ان غلطیوں سے بچیں" },
  faqs:         { en: "Common questions", ur: "عام سوالات" },
  related:      { en: "Related guides", ur: "متعلقہ معلومات" },
  sources:      { en: "Where this information comes from", ur: "یہ معلومات کہاں سے لی گئیں" },
  share:        { en: "Send this page on WhatsApp", ur: "یہ صفحہ واٹس ایپ پر بھیجیں" },
  notFound:     { en: "Sorry, this guide was not found.", ur: "معذرت، یہ صفحہ نہیں ملا۔" },
  loading:      { en: "Loading…", ur: "لوڈ ہو رہا ہے…" },
  free:         { en: "Free", ur: "مفت" },

  footer:       { en: "Rahnuma is a volunteer community project, not a government website.",
                  ur: "رہنما ایک رضاکارانہ فلاحی منصوبہ ہے، سرکاری ویب سائٹ نہیں۔" }
};

const MONTHS = {
  en: ["January", "February", "March", "April", "May", "June", "July",
       "August", "September", "October", "November", "December"],
  ur: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی",
       "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
};
