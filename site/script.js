(function () {
  const body = document.body;
  const nav = document.querySelector("[data-nav]");
  const menuButton = document.querySelector("[data-menu-button]");
  const header = document.querySelector("[data-header]");

  const navItems = [
    ["about.html", "Amdanom", "About"],
    ["history.html", "Hanes", "History"],
    ["admissions.html", "Derbyniadau", "Admissions"],
    ["fees.html", "Ffioedd", "Fees"],
    ["community.html", "Cymuned", "Community"],
    ["recruitment.html", "Swyddi", "Jobs"],
    ["faqs.html", "Cwestiynau", "FAQs"],
    ["contact.html", "Cysylltu", "Contact"]
  ];

  function setMenu(open) {
    if (!menuButton || !nav) return;
    const wasOpen = nav.classList.contains("is-open");
    body.classList.toggle("menu-open", open);
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    body.style.overflow = open ? "hidden" : "";
    if (open) {
      const firstLink = nav.querySelector("a");
      if (firstLink) firstLink.focus();
    } else if (wasOpen) {
      menuButton.focus();
    }
  }

  function buildNav() {
    if (!nav) return;
    nav.innerHTML = navItems.map(([href, cy, en]) => (
      `<a href="${href}" data-cy="${cy}" data-en="${en}">${cy}</a>`
    )).join("");
  }

  function injectLanguageToggle() {
    if (!header || header.querySelector(".language-toggle")) return;
    const toggle = document.createElement("div");
    toggle.className = "language-toggle";
    toggle.setAttribute("aria-label", "Newid iaith / Change language");
    toggle.innerHTML = `
      <button type="button" data-lang-choice="cy" aria-pressed="true">CY</button>
      <button type="button" data-lang-choice="en" aria-pressed="false">EN</button>
    `;
    header.insertBefore(toggle, menuButton || nav);
  }

  function injectFooter() {
    const footer = document.querySelector("[data-site-footer], .site-footer");
    if (!footer) return;
    footer.className = "site-footer";
    footer.setAttribute("data-site-footer", "");
    footer.innerHTML = `
      <div class="container footer-main">
        <section class="footer-brand">
          <img src="ygll-logo.png" alt="Ysgol Gymraeg Llundain logo" width="112" height="112">
          <div>
            <h2 data-cy="Ysgol Gymraeg Llundain" data-en="London Welsh School">Ysgol Gymraeg Llundain</h2>
            <p data-cy="Addysg gynradd Gymraeg ddwyieithog yn Hanwell, Ealing." data-en="Welsh-medium bilingual primary education in Hanwell, Ealing.">Addysg gynradd Gymraeg ddwyieithog yn Hanwell, Ealing.</p>
            <p class="footer-motto" data-cy="A fynn, a fedr" data-en="Where there is a will, there is a way">A fynn, a fedr</p>
          </div>
        </section>
        <section>
          <h3 data-cy="Cysylltu" data-en="Contact">Cysylltu</h3>
          <address>
            Ysgol Gymraeg Llundain<br>
            Canolfan Gymunedol Hanwell<br>
            Westcott Crescent, Hanwell<br>
            London W7 1PD
          </address>
          <p><a href="tel:+442085750237">020 8575 0237</a><br><a href="mailto:info@ysgolgymraegllundain.co.uk">info@ysgolgymraegllundain.co.uk</a></p>
        </section>
        <nav aria-label="Footer navigation">
          <h3 data-cy="Ysgol" data-en="School">Ysgol</h3>
          <a href="about.html" data-cy="Amdanom" data-en="About">Amdanom</a>
          <a href="history.html" data-cy="Hanes" data-en="History">Hanes</a>
          <a href="admissions.html" data-cy="Derbyniadau" data-en="Admissions">Derbyniadau</a>
          <a href="fees.html" data-cy="Ffioedd" data-en="Fees">Ffioedd</a>
          <a href="community.html" data-cy="Cymuned" data-en="Community">Cymuned</a>
          <a href="recruitment.html" data-cy="Swyddi" data-en="Jobs">Swyddi</a>
        </nav>
        <nav aria-label="Policies and statutory links">
          <h3 data-cy="Gwybodaeth" data-en="Information">Gwybodaeth</h3>
          <a href="#" data-cy="Diogelu" data-en="Safeguarding">Diogelu</a>
          <a href="#" data-cy="PolisÃ¯au" data-en="Policies">PolisÃ¯au</a>
          <a href="#" data-cy="Preifatrwydd" data-en="Privacy">Preifatrwydd</a>
          <a href="#" data-cy="Hygyrchedd" data-en="Accessibility">Hygyrchedd</a>
          <a href="faqs.html" data-cy="Cwestiynau cyffredin" data-en="Frequently asked questions">Cwestiynau cyffredin</a>
        </nav>
      </div>
      <div class="container footer-bottom">
        <p data-cy="Rhan o The Welsh Schools Trust Limited, rhif elusen 1167479." data-en="Part of The Welsh Schools Trust Limited, charity number 1167479.">Rhan o The Welsh Schools Trust Limited, rhif elusen 1167479.</p>
        <p data-cy="Prototeip statig ar gyfer llundain.ygg.cymru." data-en="Static prototype for llundain.ygg.cymru.">Prototeip statig ar gyfer llundain.ygg.cymru.</p>
      </div>
    `;
  }

  const dictionary = {
    "A fynn, a fedr": "Where there is a will, there is a way",
    "Neidio i'r cynnwys / Skip to content": "Skip to content / Neidio i'r cynnwys",
    "Hysbysiad / Notice:": "Notice / Hysbysiad:",
    "Mae'r ysgol ar agor fel arfer heddiw. For urgent messages when school is closed, email": "The school is open as usual today. I gael negeseuon brys pan fydd yr ysgol ar gau, e-bostiwch",
    "Tyfu'n Gymraeg. Perthyn i Lundain.": "Grow in Welsh. Belong in London.",
    "Dechrau derbyniadau": "Start admissions",
    "Gweld gyrfaoedd": "View careers",
    "Cysylltu Ã¢'r swyddfa": "Contact the office",
    "Ffurflen gyswllt": "Contact form",
    "Yn barod i holi, ymweld neu wneud cais?": "Ready to ask, visit or apply?",
    "Cysylltu": "Contact",
    "Derbyniadau": "Admissions",
    "Ffioedd": "Fees",
    "Swyddi gwag": "Vacancies",
    "Cymuned": "Community",
    "Hanes": "History",
    "Amdanom": "About",
    "Swyddi": "Jobs",
    "Cwestiynau": "FAQs"
  };

  function prepareDictionaryTargets() {
    document.querySelectorAll("h1, h2, h3, p, a, button, summary, label, span, small, strong").forEach((el) => {
      if (el.children.length > 0 || el.dataset.cy || el.dataset.en) return;
      const text = el.textContent.trim();
      if (!dictionary[text]) return;
      el.dataset.cy = text;
      el.dataset.en = dictionary[text];
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    document.querySelectorAll("[data-cy][data-en]").forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    document.querySelectorAll("[data-lang-choice]").forEach((button) => {
      const active = button.dataset.langChoice === lang;
      button.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("ygll-language", lang);
  }

  buildNav();
  injectLanguageToggle();
  injectFooter();
  prepareDictionaryTargets();

  const navLinks = [...document.querySelectorAll(".site-nav a")];
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
    navLinks.forEach((link) => link.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) setMenu(false);
    }));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) setMenu(false);
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
  });

  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langChoice));
  });
  function defaultLanguageForHost() {
    const host = window.location.hostname.toLowerCase();
    if (host === "ygg.wales" || host.endsWith(".ygg.wales")) return "en";
    return "cy";
  }

  applyLanguage(localStorage.getItem("ygll-language") || defaultLanguageForHost());

  document.querySelectorAll("details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      document.querySelectorAll("details[open]").forEach((other) => {
        if (other !== item && other.closest(".faq-list")) other.removeAttribute("open");
      });
    });
  });

  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".timeline-item.is-active").forEach((active) => {
        if (active !== item) active.classList.remove("is-active");
      });
      item.classList.add("is-active");
    });
  });

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      if (button) {
        button.dataset.cy = "Diolch - neges brawf yn unig";
        button.dataset.en = "Thank you - prototype message only";
        button.textContent = document.body.dataset.lang === "en" ? button.dataset.en : button.dataset.cy;
      }
    });
  }
})();
