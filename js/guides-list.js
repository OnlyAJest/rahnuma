// =====================================================================
// GUIDES LIST
// This is the menu of the whole site: every category and every guide.
// The home page and the search box are built from this list.
//
// To ADD a new guide:
//   1. Copy guides/_template.js to guides/<new-id>.js and fill it in.
//   2. Add a line for it below, in the right category, using the same id.
//
// "keywords" helps the search box. Add any words people might type,
// in English, Urdu and Roman Urdu (e.g. "shanakhti card").
// "region" is either "pakistan" or "punjab". A guide can have its own
// "region" if its topic mixes both (e.g. welfare programs).
// "shortTitle" (optional) is used for the small quick-link buttons.
// =====================================================================

// Quick links shown at the top of the home page (guide ids).
const POPULAR = ["cnic-new", "wf-registration", "wf-bisp-kafaalat", "b-form", "wf-health", "passport-new", "domicile"];

const CATEGORIES = [
  {
    id: "identity",
    icon: "🪪",
    region: "pakistan",
    title: { en: "ID cards (NADRA)", ur: "شناختی کارڈ (نادرا)" },
    guides: [
      { id: "cnic-new", shortTitle: { en: "ID card", ur: "شناختی کارڈ" },
        title: { en: "New ID card (CNIC) – first time", ur: "پہلا شناختی کارڈ بنوانا" },
        keywords: "cnic nic smart card id card identity new first nadra shanakhti card naya شناختی کارڈ نیا نادرا" },
      { id: "cnic-renew",
        title: { en: "Renew or correct your ID card", ur: "شناختی کارڈ کی تجدید یا درستگی" },
        keywords: "shanakhti card id card nadra fee cnic renew renewal expired expiry modify modification change correction address name date of birth age tajdeed شناختی کارڈ تجدید معیاد ختم درستگی تبدیلی پتہ" },
      { id: "cnic-lost",
        title: { en: "Lost or damaged ID card", ur: "گم شدہ یا خراب شناختی کارڈ" },
        keywords: "shanakhti card id card nadra fee cnic lost stolen damaged duplicate reprint gum kho gaya شناختی کارڈ گم چوری ڈپلیکیٹ" },
      { id: "b-form", shortTitle: { en: "B-Form", ur: "ب فارم" },
        title: { en: "B-Form for children (CRC)", ur: "بچوں کا ب فارم (CRC)" },
        keywords: "fee nadra b form bform b-form crc child registration certificate juvenile card children bachay ب فارم بچوں بچے" },
      { id: "nicop",
        title: { en: "NICOP – ID card for Pakistanis abroad", ur: "نائیکوپ – بیرونِ ملک پاکستانیوں کا کارڈ" },
        keywords: "fee shanakhti card id card nicop overseas abroad dubai saudi uk usa bahar nadra نائیکوپ بیرون ملک اوورسیز" }
    ]
  },
  {
    id: "welfare",
    icon: "🤲",
    title: { en: "Support and welfare programs", ur: "امدادی اور فلاحی پروگرام" },
    guides: [
      { id: "wf-registration", region: "punjab", shortTitle: { en: "PSER registration", ur: "پی ایس ای آر اندراج" },
        title: { en: "Register in PSER and NSER – needed for almost every program", ur: "پی ایس ای آر اور این ایس ای آر میں اندراج – تقریباً ہر پروگرام کے لیے ضروری" },
        keywords: "pser nser survey registration register bisp dynamic survey pmt score 8171 0800-02345 ehsaas welfare sarwe اندراج سروے رجسٹریشن" },
      { id: "wf-bisp-kafaalat", region: "pakistan", shortTitle: { en: "BISP", ur: "بی آئی ایس پی" },
        title: { en: "BISP Kafaalat – quarterly cash for women", ur: "بی آئی ایس پی کفالت – خواتین کے لیے سہ ماہی رقم" },
        keywords: "bisp benazir income support kafaalat kafalat 8171 ehsaas qist installment payment women بی آئی ایس پی بینظیر کفالت قسط 8171" },
      { id: "wf-bisp-children", region: "pakistan",
        title: { en: "BISP for children – school stipends and Nashonuma", ur: "بی آئی ایس پی بچوں کے لیے – تعلیمی وظیفہ اور نشوونما" },
        keywords: "bisp taleemi wazaif stipend school children nashonuma pregnant mother baby nutrition تعلیمی وظائف نشوونما حاملہ بچے" },
      { id: "wf-health", region: "punjab", shortTitle: { en: "Sehat Card", ur: "صحت کارڈ" },
        title: { en: "Sehat Card and free hospital treatment", ur: "صحت کارڈ اور مفت علاج" },
        keywords: "sehat card health card sahulat hospital free treatment 8500 insurance ilaj صحت کارڈ سہولت ہسپتال علاج" },
      { id: "wf-rashan-card", region: "punjab",
        title: { en: "Rashan Card (ration card) for workers", ur: "راشن کارڈ (مزدوروں کے لیے)" },
        keywords: "rashan ration card workers labour mazdoor social security pessi 3000 grocery راشن کارڈ مزدور سوشل سیکیورٹی" },
      { id: "wf-rahmat-card", region: "punjab",
        title: { en: "Rahmat Card for widows and orphans", ur: "رحمت کارڈ – بیوہ خواتین اور یتیم بچوں کے لیے" },
        keywords: "rahmat rehmat card widow bewa orphan yateem zakat 1077 sahulat رحمت کارڈ بیوہ یتیم" },
      { id: "wf-himmat-card", region: "punjab",
        title: { en: "Himmat Card for persons with disabilities", ur: "ہمت کارڈ – معذور افراد کے لیے" },
        keywords: "himmat card disability disabled mazoor special persons social welfare ہمت کارڈ معذور" },
      { id: "wf-zakat-baitulmal",
        title: { en: "Zakat and Bait-ul-Mal help", ur: "زکوٰۃ اور بیت المال سے مدد" },
        keywords: "zakat guzara allowance bait ul mal baitulmal medical help poor financial assistance زکوٰۃ گزارہ الاؤنس بیت المال" },
      { id: "wf-kissan-card", region: "punjab",
        title: { en: "Kissan Card for farmers", ur: "کسان کارڈ" },
        keywords: "kissan kisan card farmer zameendar loan seed fertilizer khad beej 8070 کسان کارڈ کھاد بیج" },
      { id: "wf-livestock-card", region: "punjab",
        title: { en: "Livestock Card for animal farmers", ur: "لائیو اسٹاک کارڈ – مویشی پالنے والوں کے لیے" },
        keywords: "livestock card animals cattle buffalo calves feed maal mawaishi لائیو اسٹاک مویشی جانور چارہ" },
      { id: "wf-housing", region: "punjab",
        title: { en: "Apni Chhat Apna Ghar – interest-free housing loans", ur: "اپنی چھت اپنا گھر – بلا سود قرض" },
        keywords: "apni chhat apna ghar house loan housing makan ghar mehfooz chhat roof اپنی چھت اپنا گھر مکان قرض" },
      { id: "wf-solar", region: "punjab",
        title: { en: "Free solar panel scheme", ur: "مفت سولر پینل اسکیم" },
        keywords: "solar panel free bijli electricity 200 units roshan سولر پینل بجلی" },
      { id: "wf-honhaar", region: "punjab",
        title: { en: "Honhaar Scholarship for university students", ur: "ہونہار اسکالرشپ – یونیورسٹی طلبہ کے لیے" },
        keywords: "honhaar honhar scholarship university student fee laptop وظیفہ ہونہار اسکالرشپ طالب علم" },
      { id: "wf-scams",
        title: { en: "Avoid fake messages, websites and agents", ur: "جعلی پیغامات، ویب سائٹس اور ایجنٹوں سے بچیں" },
        keywords: "fraud scam fake message sms agent money bisp jaali dhoka فراڈ جعلی میسج دھوکہ ایجنٹ" }
    ]
  },
  {
    id: "passport",
    icon: "🛂",
    region: "pakistan",
    title: { en: "Passport", ur: "پاسپورٹ" },
    guides: [
      { id: "passport-new", shortTitle: { en: "Passport", ur: "پاسپورٹ" },
        title: { en: "New passport", ur: "نیا پاسپورٹ" },
        keywords: "passport new first fee urgent fast track e-passport dgip pasport پاسپورٹ نیا فیس ارجنٹ" },
      { id: "passport-renew",
        title: { en: "Renew your passport", ur: "پاسپورٹ کی تجدید" },
        keywords: "fee passport renew renewal expired online tajdeed پاسپورٹ تجدید آن لائن" },
      { id: "passport-lost",
        title: { en: "Lost passport", ur: "گم شدہ پاسپورٹ" },
        keywords: "fee passport lost stolen police report gum پاسپورٹ گم چوری" }
    ]
  },
  {
    id: "civil",
    icon: "📜",
    region: "punjab",
    title: { en: "Birth, death, marriage and divorce", ur: "پیدائش، وفات، نکاح اور طلاق" },
    guides: [
      { id: "birth-certificate",
        title: { en: "Birth certificate", ur: "پیدائش کا سرٹیفکیٹ" },
        keywords: "birth certificate union council paidaish registration baby پیدائش سرٹیفکیٹ یونین کونسل برتھ" },
      { id: "death-certificate",
        title: { en: "Death certificate", ur: "وفات کا سرٹیفکیٹ" },
        keywords: "death certificate union council wafat maut succession وفات ڈیتھ سرٹیفکیٹ جانشینی" },
      { id: "marriage-certificate",
        title: { en: "Marriage certificate", ur: "نکاح (شادی) کا سرٹیفکیٹ" },
        keywords: "marriage certificate nikah nikahnama shadi union council mrc نکاح نامہ شادی سرٹیفکیٹ" },
      { id: "divorce-certificate",
        title: { en: "Divorce certificate", ur: "طلاق کا سرٹیفکیٹ" },
        keywords: "divorce talaq khula certificate union council arbitration طلاق خلع سرٹیفکیٹ" }
    ]
  },
  {
    id: "licences",
    icon: "🏠",
    region: "punjab",
    title: { en: "Licences, land and certificates", ur: "لائسنس، زمین اور سرٹیفکیٹ" },
    guides: [
      { id: "driving-licence",
        title: { en: "Driving licence", ur: "ڈرائیونگ لائسنس" },
        keywords: "driving licence license learner permit motorcycle bike car dlims ڈرائیونگ لائسنس لرنر موٹر سائیکل گاڑی" },
      { id: "domicile", shortTitle: { en: "Domicile", ur: "ڈومیسائل" },
        title: { en: "Domicile certificate", ur: "ڈومیسائل" },
        keywords: "domicile certificate e-khidmat dc office domasail ڈومیسائل ای خدمت" },
      { id: "vehicle-registration",
        title: { en: "Register a motorcycle or car", ur: "موٹر سائیکل یا گاڑی کی رجسٹریشن" },
        keywords: "vehicle registration motorcycle bike car excise number plate smart card token tax transfer گاڑی موٹر سائیکل رجسٹریشن نمبر پلیٹ ایکسائز" },
      { id: "fard",
        title: { en: "Land record (Fard)", ur: "زمین کا ریکارڈ (فرد)" },
        keywords: "fard land record plra arazi zameen property intiqal mutation فرد زمین اراضی ریکارڈ انتقال" },
      { id: "character-certificate",
        title: { en: "Police character certificate", ur: "پولیس کریکٹر سرٹیفکیٹ" },
        keywords: "police character certificate pcc khidmat markaz abroad job کریکٹر سرٹیفکیٹ پولیس خدمت مرکز" }
    ]
  },
  {
    id: "teachers",
    icon: "👩‍🏫",
    region: "punjab",
    title: { en: "Government teacher jobs", ur: "سرکاری اساتذہ کی نوکری" },
    guides: [
      { id: "teacher-hiring",
        title: { en: "How government schools hire teachers", ur: "سرکاری اسکول اساتذہ کیسے بھرتی کرتے ہیں" },
        keywords: "teacher job hiring recruitment educator ese sese sse sti intern ppsc test merit ustad naukri استاد ٹیچر نوکری بھرتی ایجوکیٹر انٹرن" },
      { id: "teacher-qualifications",
        title: { en: "Degrees needed to become a teacher", ur: "استاد بننے کے لیے ضروری ڈگریاں" },
        keywords: "job naukri ustad teacher qualification degree b.ed bed ade bs education masters hec attestation ڈگری بی ایڈ تعلیم تصدیق" },
      { id: "teacher-documents",
        title: { en: "Document checklist for teacher jobs", ur: "ٹیچر کی نوکری کے لیے کاغذات کی فہرست" },
        keywords: "job naukri ustad teacher documents checklist attested copies domicile marks sheet کاغذات فہرست تصدیق شدہ" },
      { id: "teacher-vacancies",
        title: { en: "Finding real vacancies and avoiding fake ads", ur: "اصلی آسامیاں کہاں ملیں اور جعلی اشتہار سے بچاؤ" },
        keywords: "naukri ustad teacher vacancies jobs ads fake scam where to find advertisement اشتہار جعلی آسامی نوکری فراڈ" }
    ]
  },
  {
    id: "working-teachers",
    icon: "🗂️",
    region: "punjab",
    title: { en: "For working teachers (office paperwork)", ur: "برسرِ روزگار اساتذہ کے لیے (دفتری کاغذات)" },
    guides: [
      { id: "wt-office-basics",
        title: { en: "How to submit a case to the education office", ur: "محکمہ تعلیم کے دفتر میں کیس کیسے جمع کرائیں" },
        keywords: "teacher office aeo ddeo deo proper channel attested service book pay slip docket challan 32-a glossary terms استاد دفتر اے ای او ڈی ڈی ای او سروس بک" },
      { id: "wt-leave",
        title: { en: "Medical and maternity leave", ur: "میڈیکل اور زچگی کی چھٹی" },
        keywords: "teacher leave medical maternity chutti sick pregnancy baby چھٹی میڈیکل زچگی بیماری" },
      { id: "wt-noc-promotion",
        title: { en: "NOC (passport / other job) and applying for a higher post", ur: "این او سی (پاسپورٹ / دوسری نوکری) اور اعلیٰ آسامی کے لیے درخواست" },
        keywords: "teacher noc passport other department job higher post promotion apply این او سی پاسپورٹ ترقی اعلیٰ آسامی" },
      { id: "wt-service-records",
        title: { en: "First appointment verification and qualification allowance", ur: "پہلے تقرر نامے کی تصدیق اور کوالیفیکیشن الاؤنس" },
        keywords: "teacher first appointment order verification qualification allowance degree hec تقرر نامہ تصدیق کوالیفیکیشن الاؤنس" },
      { id: "wt-retirement",
        title: { en: "Retirement and pension", ur: "ریٹائرمنٹ اور پنشن" },
        keywords: "teacher retirement pension gratuity 60 years premature lpr sedhrms notification ریٹائرمنٹ پنشن گریجویٹی" },
      { id: "wt-gp-fund",
        title: { en: "GP Fund – advance and final payment", ur: "جی پی فنڈ – ایڈوانس اور حتمی ادائیگی" },
        keywords: "teacher gp fund gpf provident advance loan refundable non-refundable final جی پی فنڈ ایڈوانس" },
      { id: "wt-death-in-service",
        title: { en: "When a teacher dies in service: help for the family", ur: "دورانِ ملازمت استاد کی وفات: خاندان کے لیے رہنمائی" },
        keywords: "teacher death died in service widow family pension osd group insurance obituary succession وفات بیوہ فیملی پنشن گروپ انشورنس" }
    ]
  }
];
