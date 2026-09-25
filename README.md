# Rahnuma (رہنما)

Simple, bilingual (Urdu / English) guides to getting government documents made in Pakistan –
CNIC, B-Form, passport, birth/death/marriage/divorce certificates, driving licence, domicile,
vehicle registration, land records, police character certificate, Punjab government teacher jobs,
paperwork for working teachers, and government support/welfare programs (BISP, Sehat Card,
Rashan Card, Rahmat Card, Himmat Card, Kissan Card and more).

Built for people in rural areas on cheap phones and slow internet: plain HTML, CSS and JavaScript,
no frameworks, no build step, about 11 KB (compressed) for the home page.

## Run it

- **Easiest:** double-click `index.html`. It works straight from your computer, no internet needed.
- **With a local server** (closer to how it behaves online):
  ```
  python -m http.server 8765
  ```
  then open http://localhost:8765

## How the files fit together

```
feedback.html        Feedback and "report a change" forms
index.html           Home page: search, quick links, topic tiles
                     (index.html?cat=welfare shows one topic's guides)
guide.html           One page that shows ANY guide, with jump buttons at the top:
                     guide.html?id=cnic-new#steps opens the page at the Steps section
css/style.css        All the styling. Colours are at the top.
js/ui-text.js        Words on buttons and headings, in English and Urdu
js/guides-list.js    The menu: categories, guide titles, search keywords
js/app.js            The code that builds the pages (rarely needs editing)
js/feedback.js       The code for the feedback page
js/settings.js       Your settings: where feedback is sent
guides/*.js          The content – one file per guide
guides/_template.js  Copy this to make a new guide
```

Every piece of text is written in both languages side by side:

```js
{ en: "Original ID card", ur: "اصل شناختی کارڈ" }
```

## Common edits

**A fee changed** – open the guide in `guides/`, find the number and change it.
Write plain numbers (`1500`); the site shows "Rs 1,500" / "1,500 روپے" by itself. `0` shows as "Free".
Then update `lastChecked` at the top of that file to today's date.

**Add a new guide**
1. Copy `guides/_template.js` to `guides/your-guide-id.js` and fill it in.
2. Change `GUIDES["my-new-guide"]` to `GUIDES["your-guide-id"]`.
3. Add an entry to `js/guides-list.js` with the same id, a title and keywords.

**Add a new category** – add a block to `CATEGORIES` in `js/guides-list.js`
(copy an existing one). `region` is `"pakistan"` or `"punjab"`.

**Change the quick links** on the home page – edit `POPULAR` at the top of `js/guides-list.js`.
A guide's `shortTitle` is used for its quick-link button.

**Change colours** – edit the variables at the top of `css/style.css`.

**How the jump buttons work** – each guide is one scrolling page, with a row of buttons at the top
(Summary, Who can apply, Details, Documents, Steps, Fee, Where, Tips, Sources) that scroll straight
to that section. A button only appears if the guide has that content, so you don't need to do
anything – just fill in the sections. For welfare programs, `eligibility` and `notEligible` fill
the "Who can apply" section.

Any section of a guide can be deleted; the page simply skips it.

**Price warnings are automatic** – any section that mentions a price (a fee number, or text
with "Rs", "USD", "روپے" or "ڈالر") gets a "prices can change" note underneath. The wording is
`priceNote` in `js/ui-text.js`.

**Something uncertain?** Add it to the guide's `notes` list. It appears in a yellow
"Please note" box near the top of the page.

**A source that isn't a website** (e.g. information from teachers) – add it to `sources`
without a `url` and it shows as plain text.

## Feedback and "report a change"

`feedback.html` has two forms:
- **Give feedback** – what they wanted help with, how satisfied they are (5 faces), and optional comments.
- **Report a change** – which guide is wrong, what changed (fee, documents, steps…), details,
  how they know, and optional contact details.

Every guide page links to the report form for that guide ("Something wrong or out of date on this
page?"), and the footer on every page links to the feedback page.

**To start receiving messages** (the site has no server, so a free service collects them):
1. Make a free account at [formspree.io](https://formspree.io) and click **New form**.
2. Copy the form's address – it looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `feedbackEndpoint` in `js/settings.js`.

Each message then arrives in your email and in your Formspree dashboard (free plan: 50 a month).
Sign up for Formspree with the Gmail address in `feedbackEmail` (in the same file) so messages arrive there.
If the form can't be sent, people get a button that opens their email app with the message already
written, addressed to `feedbackEmail`.

Until you add a Formspree address, every message goes through the email button instead.

## Putting it online (free)

- **Netlify Drop:** go to app.netlify.com/drop and drag the `rahnuma` folder onto the page.
- **GitHub Pages:** push this folder to a GitHub repository → Settings → Pages → deploy from the main branch.
- **Cloudflare Pages:** also works as-is; there is no build command.

## Keeping it accurate

Every guide shows "Last checked" and its sources at the bottom. Before launch, and every few months:

1. Open each source link and compare the fees.
2. Where possible, confirm by phone (NADRA 1777, Passport 051-111-344-777) or at the office.
3. Update the numbers and `lastChecked`.

## Urdu font

The site uses the phone's built-in Naskh Urdu font (Noto Naskh Arabic on Android), so no font
has to be downloaded. To force a specific web font, add a Google Fonts `<link>` to both HTML files
and put its name first in `--urdu-font` in `css/style.css` (this adds roughly 100 KB per visit).
