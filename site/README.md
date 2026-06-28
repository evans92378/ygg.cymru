# Ysgol Gymraeg Llundain static prototype

Static bilingual prototype for `llundain.ygg.cymru`, built with plain HTML, CSS and vanilla JavaScript.

Reference sources used for facts only:

- Existing public school website: https://www.ysgolgymraegllundain.co.uk/
- Current eTeach careers site: https://www.eteach.com/careers/ysgolgymraegllundain/

The design is original and uses locally saved school-site images as prototype content assets. Confirm image permissions before production launch.

## Files

- `index.html` - homepage
- `about.html` - school story, ethos and governance overview
- `history.html` - interactive vertical school history timeline
- `admissions.html` - admissions journey
- `fees.html` - fees and financial support model
- `community.html` - Welsh community and culture
- `recruitment.html` - careers and eTeach links
- `faqs.html` - parent FAQs
- `contact.html` - contact details and prototype form
- `styles.css` - shared design system
- `script.js` - menu, active navigation, FAQs and prototype form behaviour
- `ygll-logo.png` - approved school logo used in the site header
- `34064@2x.jpg` - small school mark used as the favicon
- `assets/34065.jpg` - school illustration from the current public site
- `assets/34100.jpg` - school illustration crop from the current public site
- `assets/79172.jpg` - classroom photo from the current public site
- `assets/79173.jpg` - pupils with medals photo from the current public site
- `assets/79174.jpg` - Eisteddfod performance photo from the current public site
- `assets/79175.jpg` - Welsh community celebration photo from the current public site
- `assets/79176.jpg` - Llangrannog activity photo from the current public site
- `assets/79177.jpg`, `assets/79178.jpg`, `assets/79179.jpg`, `assets/79180.jpg` - additional source-site image assets available for future page variants
- `assets/history-1958.png` - generated filler illustration for the 1958 timeline entry
- `assets/history-journey.png` - generated filler illustration for the London moves timeline entry
- `assets/history-hanwell.png` - generated filler illustration for the Hanwell timeline entry
- `assets/history-today.png` - generated filler illustration for the present-day timeline entry

## Frappe CMS editable content areas

Global fields:

- Site name
- Motto
- Logo or logo text
- Active language
- Language toggle labels
- Emergency or notice banner text
- Primary phone number
- Main email address
- Emergency email address
- Postal address
- Charity or trust information
- Safeguarding link
- Privacy link
- Accessibility link
- Footer useful links
- Footer contact block
- Footer statutory/policy links
- Footer trust and charity text
- Main navigation labels and URLs
- Social links
- Placeholder or approved image assets with alt text
- Image source, permission status, caption and focal-point metadata

Homepage fields:

- Hero eyebrow
- Hero headline
- Hero Welsh lead text
- Hero English support text
- Hero primary CTA label and URL
- Hero secondary CTA label and URL
- Quick link cards
- Croeso section title and body
- Welsh-medium education benefit cards
- About teaser title, body and CTA
- Admissions and fees callout
- Community teaser
- Recruitment teaser
- Location and travel text
- Contact strip heading and contact options

About page fields:

- Page title and introduction
- School history content
- Ethos card
- Curriculum card
- Care card
- Staff overview
- Staff profile list
- Governor profile list
- Trust and charity details
- Policy/document links

History page fields:

- Page title and introduction
- Timeline jump labels
- Timeline year/date label
- Timeline eyebrow
- Timeline heading
- Timeline summary text
- Timeline expanded text
- Timeline image
- Timeline image alt text
- Timeline source note

Admissions page fields:

- Page title and introduction
- Visit CTA
- Admissions steps
- Open evening information
- Age range and year group notes
- Miri Mawr or early years content
- Admissions policy document link
- Application form link

Fees page fields:

- Page title and introduction
- Current annual fee amount
- Fee effective date
- Payment schedule notes
- Nursery session fee
- Nursery Education Grant text
- What is included
- Optional costs
- Wraparound care fees
- Financial support text
- Fees policy document link
- Finance contact details

Community page fields:

- Page title and introduction
- Community feature cards
- CRhAFf text
- Events list
- Partner organisations
- Community images and alt text
- Fundraising links

Recruitment page fields:

- Page title and introduction
- eTeach vacancies URL
- Talent pool URL
- Why work here cards
- Current vacancy summaries
- Recruitment contact
- Safeguarding recruitment statement

FAQ page fields:

- Page title and introduction
- FAQ categories
- FAQ questions
- FAQ answers in Welsh
- FAQ English support text
- Related page links
- Source fact review date

Contact page fields:

- Page title and introduction
- Phone number
- Email address
- Address
- Map embed or map image
- Contact form subjects
- Form success message
- Office hours
- Travel notes

## Notes for production

- Replace all placeholder visual blocks with approved school photography or commissioned imagery.
- Review public-site images for consent, licensing and cropping before production.
- Connect the contact form to a real backend before launch.
- Keep Welsh first in labels, headings and page hierarchy, with English support where it helps access.
- Add live policy, safeguarding and statutory document links before public launch.

## Frappe CMS Scaffold

An initial structured Frappe app scaffold has been added in `school_site_editor/`.

See `school_site_editor/README.md` for:

- DocType implementation plan
- Welsh/English publishing validation
- school-specific permissions approach
- dashboard editor plan
- static prototype to Frappe field mapping
