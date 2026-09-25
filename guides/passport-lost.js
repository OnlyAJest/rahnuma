GUIDES["passport-lost"] = {
  lastChecked: "2026-09-24",

  notes: [
    { en: "The amounts in the table are our own calculation from the official 'double / four times' rule, not an official fee list.",
      ur: "ٹیبل میں رقم ہم نے سرکاری اصول (دگنی / چار گنا) سے خود حساب کی ہے، یہ سرکاری فیس لسٹ نہیں۔" }
  ],

  intro: { en: "If your passport is lost or stolen, first report it to the police, then apply for a new one. A lost passport costs more than a normal one.",
           ur: "اگر پاسپورٹ گم یا چوری ہو جائے تو پہلے پولیس کو رپورٹ کریں، پھر نئے پاسپورٹ کی درخواست دیں۔ گم شدہ پاسپورٹ کی فیس عام فیس سے زیادہ ہوتی ہے۔" },

  keyFacts: [
    { label: { en: "1st time lost", ur: "پہلی بار گم" }, value: { en: "Double fee", ur: "دگنی فیس" } },
    { label: { en: "2nd time lost", ur: "دوسری بار گم" }, value: { en: "Four times the fee", ur: "چار گنا فیس" } },
    { label: { en: "3rd time", ur: "تیسری بار" }, value: { en: "Needs DGI&P approval", ur: "ڈائریکٹوریٹ کی منظوری" } }
  ],

  documents: [
    { en: "Police report that mentions the lost passport's number.", ur: "پولیس رپورٹ جس میں گم شدہ پاسپورٹ کا نمبر لکھا ہو۔" },
    { en: "Original valid ID card (CNIC or NICOP) and a photocopy.", ur: "اصل درست شناختی کارڈ (یا نائیکوپ) اور فوٹو کاپی۔" },
    { en: "A photocopy of the lost passport, if you have one (helps find the number).", ur: "گم شدہ پاسپورٹ کی فوٹو کاپی، اگر ہو (نمبر معلوم کرنے میں مدد ملتی ہے)۔" }
  ],

  steps: [
    { en: "Report the loss at your local police station and get a written report with the passport number.",
      ur: "مقامی تھانے میں گمشدگی کی رپورٹ درج کروائیں اور پاسپورٹ نمبر والی تحریری رپورٹ لیں۔" },
    { en: "Take the police report and your ID card to a Regional Passport Office.", ur: "پولیس رپورٹ اور شناختی کارڈ لے کر ریجنل پاسپورٹ آفس جائیں۔" },
    { en: "Follow the same steps as a new passport (photo, fingerprints, interview) and pay the higher fee.",
      ur: "نئے پاسپورٹ والا طریقہ اپنائیں (تصویر، انگلیوں کے نشان، انٹرویو) اور زیادہ فیس ادا کریں۔" }
  ],

  fees: [
    {
      title: { en: "Example: 36 pages, 5 years", ur: "مثال: 36 صفحے، 5 سال" },
      columns: [ { en: "Case", ur: "صورت" }, { en: "Normal", ur: "عام" }, { en: "Urgent", ur: "ارجنٹ" } ],
      rows: [
        [ { en: "Normal fee (not lost)", ur: "عام فیس (گم نہیں)" }, 4500, 7500 ],
        [ { en: "Lost 1st time (×2)", ur: "پہلی بار گم (دگنی)" }, 9000, 15000 ],
        [ { en: "Lost 2nd time (×4)", ur: "دوسری بار گم (چار گنا)" }, 18000, 30000 ]
      ],
      note: { en: "Calculated from the official rule (double/quadruple fee). Confirm the exact amount at the office.",
              ur: "یہ سرکاری اصول (دگنی/چار گنا فیس) کے حساب سے ہے۔ صحیح رقم دفتر سے تصدیق کر لیں۔" }
    }
  ],

  where: [
    { en: "Your local police station (for the report), then any Regional Passport Office.",
      ur: "مقامی تھانہ (رپورٹ کے لیے)، پھر کوئی بھی ریجنل پاسپورٹ آفس۔" }
  ],

  contacts: [
    { name: { en: "Passport helpline (Mon–Fri, 8:30–4:30)", ur: "پاسپورٹ ہیلپ لائن (پیر تا جمعہ، 8:30 تا 4:30)" }, phone: "051-111-344-777" },
    { name: { en: "Police emergency", ur: "پولیس ایمرجنسی" }, phone: "15" },
    { name: { en: "DGI&P official website", ur: "پاسپورٹ ڈائریکٹوریٹ کی سرکاری ویب سائٹ" }, url: "https://dgip.gov.pk" }
  ],

  mistakes: [
    { en: "Getting a police report without the passport number. Keep a photo of your passport's first page on your phone.",
      ur: "پاسپورٹ نمبر کے بغیر پولیس رپورٹ لینا۔ پاسپورٹ کے پہلے صفحے کی تصویر فون میں رکھیں۔" }
  ],

  related: ["passport-new", "character-certificate"],

  sources: [
    { name: "DGI&P – General Requirements and Fees for Passport (lost passport rules)", url: "https://dgip.gov.pk/passport/ordinary-passport.php" }
  ]
};
