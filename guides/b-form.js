GUIDES["b-form"] = {
  lastChecked: "2026-09-24",

  notes: [
    { en: "The Juvenile Card fee is not shown in NADRA's published fee table. Ask at the NADRA centre.",
      ur: "جووینائل کارڈ کی فیس نادرا کی شائع شدہ فیس لسٹ میں نہیں ہے۔ نادرا سینٹر پر پوچھ لیں۔" }
  ],

  intro: { en: "The B-Form (officially the Child Registration Certificate, CRC) registers a child under 18 with NADRA. It is needed for school admission, board exams, a child's passport and later for the child's own ID card.",
           ur: "ب فارم (سرکاری نام: چائلڈ رجسٹریشن سرٹیفکیٹ) 18 سال سے کم عمر بچے کو نادرا میں رجسٹر کرتا ہے۔ یہ اسکول داخلے، بورڈ امتحان، بچے کے پاسپورٹ اور بعد میں اس کے شناختی کارڈ کے لیے ضروری ہے۔" },

  keyFacts: [
    { label: { en: "Fee", ur: "فیس" }, value: { en: "Rs 50 (normal)", ur: "50 روپے (عام)" } },
    { label: { en: "Time", ur: "وقت" }, value: { en: "7 days", ur: "7 دن" } },
    { label: { en: "Age", ur: "عمر" }, value: { en: "Under 18", ur: "18 سال سے کم" } },
    { label: { en: "Where", ur: "کہاں" }, value: { en: "NADRA office or PakID app", ur: "نادرا دفتر یا پاک آئی ڈی ایپ" } }
  ],

  documents: [
    { en: "The child's computerised birth certificate from the Union Council. This is required – get it first.",
      ur: "یونین کونسل کا بچے کا کمپیوٹرائزڈ پیدائش سرٹیفکیٹ۔ یہ لازمی ہے – پہلے یہ بنوائیں۔" },
    { en: "Original ID card of the mother or father (one parent is enough). A legal guardian needs a guardianship certificate from the court.",
      ur: "والد یا والدہ کا اصل شناختی کارڈ (ایک کافی ہے)۔ سرپرست کو عدالت کا سرپرستی سرٹیفکیٹ چاہیے۔" },
    { en: "The child, if older than 3 years (or any age if the B-Form is for a passport).",
      ur: "بچہ خود، اگر 3 سال سے بڑا ہو (پاسپورٹ کے لیے ہو تو ہر عمر میں)۔" }
  ],

  steps: [
    { en: "Get the child's birth certificate from your Union Council (it is free in Punjab within 7 years of birth).",
      ur: "یونین کونسل سے بچے کا پیدائش سرٹیفکیٹ بنوائیں (پنجاب میں پیدائش کے 7 سال کے اندر مفت ہے)۔" },
    { en: "Make sure the parents' marriage is recorded with NADRA. If not, update that first.",
      ur: "یقینی بنائیں کہ والدین کی شادی نادرا ریکارڈ میں درج ہے۔ اگر نہیں تو پہلے وہ درج کروائیں۔" },
    { en: "Go to a NADRA centre with the child and the documents, or apply in the PakID app.",
      ur: "بچے اور کاغذات کے ساتھ نادرا سینٹر جائیں، یا پاک آئی ڈی ایپ سے درخواست دیں۔" },
    { en: "NADRA takes the child's photo, and eye scan / fingerprints depending on age.",
      ur: "نادرا عمر کے مطابق بچے کی تصویر، آنکھ کا اسکین یا انگلیوں کے نشان لے گا۔" },
    { en: "Check all spellings, pay the fee, and collect the B-Form after 7 days (or next day for executive).",
      ur: "تمام ہجے چیک کریں، فیس جمع کرائیں اور 7 دن بعد (ایگزیکٹو میں اگلے دن) ب فارم وصول کریں۔" }
  ],

  fees: [
    {
      columns: [ { en: "Speed", ur: "رفتار" }, { en: "Fee", ur: "فیس" }, { en: "Time", ur: "وقت" } ],
      rows: [
        [ { en: "Normal", ur: "عام (نارمل)" }, 50,  { en: "7 days", ur: "7 دن" } ],
        [ { en: "Executive", ur: "ایگزیکٹو" }, 500, { en: "1 day",  ur: "1 دن" } ]
      ]
    }
  ],

  extra: [
    {
      icon: "👶",
      heading: { en: "What NADRA records at each age", ur: "ہر عمر میں نادرا کیا ریکارڈ کرتا ہے" },
      table: {
        columns: [ { en: "Child's age", ur: "بچے کی عمر" }, { en: "Taken", ur: "کیا لیا جاتا ہے" }, { en: "Valid until", ur: "کب تک درست" } ],
        rows: [
          [ { en: "Up to 3 years", ur: "3 سال تک" }, { en: "Nothing (photo only if for passport)", ur: "کچھ نہیں (پاسپورٹ کے لیے صرف تصویر)" }, { en: "Age 3", ur: "3 سال کی عمر" } ],
          [ { en: "3 to 10 years", ur: "3 سے 10 سال" }, { en: "Photo and eye scan", ur: "تصویر اور آنکھ کا اسکین" }, { en: "Age 10", ur: "10 سال کی عمر" } ],
          [ { en: "10 to 18 years", ur: "10 سے 18 سال" }, { en: "Photo, fingerprints and eye scan", ur: "تصویر، انگلیوں کے نشان اور آنکھ کا اسکین" }, { en: "Age 18", ur: "18 سال کی عمر" } ]
        ],
        note: { en: "So a B-Form made for a baby must be updated at age 3, 10 and 18. At 18 the child applies for their own ID card.",
                ur: "یعنی بچپن میں بنا ب فارم 3، 10 اور 18 سال کی عمر پر اپ ڈیٹ کروانا ہوتا ہے۔ 18 سال پر بچہ اپنا شناختی کارڈ بنواتا ہے۔" }
      }
    }
  ],

  where: [
    { en: "Any NADRA Registration Centre or Mobile Registration Van.", ur: "کوئی بھی نادرا رجسٹریشن سینٹر یا موبائل وین۔" },
    { en: "PakID app – choose the child registration option.", ur: "پاک آئی ڈی ایپ – بچوں کی رجسٹریشن کا آپشن منتخب کریں۔" }
  ],

  contacts: [
    { name: { en: "NADRA helpline (24 hours)", ur: "نادرا ہیلپ لائن (24 گھنٹے)" }, phone: "1777" },
    { name: { en: "NADRA website", ur: "نادرا ویب سائٹ" }, url: "https://www.nadra.gov.pk" }
  ],

  mistakes: [
    { en: "Going to NADRA without the Union Council birth certificate. NADRA cannot make a B-Form without it.",
      ur: "یونین کونسل کے پیدائش سرٹیفکیٹ کے بغیر نادرا جانا۔ اس کے بغیر ب فارم نہیں بنتا۔" },
    { en: "Different date of birth on the birth certificate and B-Form. They must match, or it causes problems at school and exams.",
      ur: "پیدائش سرٹیفکیٹ اور ب فارم پر مختلف تاریخ پیدائش۔ دونوں ایک جیسی ہونی چاہییں ورنہ اسکول اور امتحان میں مسئلہ ہوتا ہے۔" },
    { en: "Waiting until board registration. Schools and boards ask for the B-Form – make it early.",
      ur: "بورڈ رجسٹریشن تک انتظار کرنا۔ اسکول اور بورڈ ب فارم مانگتے ہیں – جلدی بنوا لیں۔" }
  ],

  faqs: [
    { q: { en: "Only one parent is available. Can we still apply?", ur: "صرف ایک والد یا والدہ موجود ہیں۔ کیا درخواست دے سکتے ہیں؟" },
      a: { en: "Yes. Either the mother or the father can apply alone. A legal guardian can apply with a guardianship certificate.",
           ur: "جی ہاں۔ والد یا والدہ میں سے کوئی ایک اکیلے درخواست دے سکتا ہے۔ قانونی سرپرست سرپرستی سرٹیفکیٹ کے ساتھ درخواست دے سکتا ہے۔" } },
    { q: { en: "Is a B-Form needed for a child's passport?", ur: "کیا بچے کے پاسپورٹ کے لیے ب فارم ضروری ہے؟" },
      a: { en: "Yes. A valid B-Form with the child's picture (or a Juvenile Card) is required for every passport for a child under 18.",
           ur: "جی ہاں۔ 18 سال سے کم عمر بچے کے پاسپورٹ کے لیے تصویر والا درست ب فارم (یا جووینائل کارڈ) لازمی ہے۔" } },
    { q: { en: "What is a Juvenile Card?", ur: "جووینائل کارڈ کیا ہے؟" },
      a: { en: "It is a card version of the B-Form with the child's photo. It is optional; ask at NADRA if your child needs one.",
           ur: "یہ ب فارم کی کارڈ والی شکل ہے جس پر بچے کی تصویر ہوتی ہے۔ یہ اختیاری ہے؛ ضرورت ہو تو نادرا سے پوچھیں۔" } }
  ],

  related: ["birth-certificate", "passport-new", "cnic-new"],

  sources: [
    { name: "NADRA – Child Registration Certificate (CRC) / Juvenile Card", url: "https://www.nadra.gov.pk/identityDocument/juvenile?action=new" },
    { name: "NADRA – Fee Structure", url: "https://www.nadra.gov.pk/feeStructure" }
  ]
};
