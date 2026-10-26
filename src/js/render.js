import { content } from "../data/content.js";

const c = content;

export function renderHeader(active = "home") {
  const nav = c.nav
    .map(
      (item) =>
        `<a href="${item.href}" class="${item.id === active ? "is-active" : ""}">${item.label}</a>`
    )
    .join("");

  const mobile = c.nav
    .map(
      (item, i) =>
        `<a href="${item.href}" style="--i:${i}"><span>${item.label}</span><span class="mobile-menu__num">0${i + 1}</span></a>`
    )
    .join("");

  return `
  <header class="site-header" data-header>
    <div class="site-header__inner">
      <a class="logo" href="index.html" data-magnetic>
        <span class="logo__mark">${c.profile.initials}</span>
        <span class="logo__text">${c.profile.firstName}</span>
      </a>
      <nav class="nav-desktop" aria-label="Primary">${nav}</nav>
      <a class="btn btn--primary header-cta" href="contact.html" data-magnetic>Let's talk →</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-menu" data-burger aria-label="Open menu">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-menu" id="mobile-menu" data-mobile-menu>
    <div class="mobile-menu__inner">
      <nav class="mobile-menu__links" aria-label="Mobile">${mobile}</nav>
      <div class="mobile-menu__foot">
        <div class="mobile-menu__actions">
          <a class="btn btn--primary" href="contact.html" data-magnetic>Let's talk →</a>
          <a class="btn btn--ghost" href="${c.profile.cvUrl}" download>Resume</a>
        </div>
        <div class="mobile-menu__social">
          <a class="icon-btn" href="${c.profile.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a class="icon-btn" href="${c.profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a class="icon-btn" href="mailto:${c.profile.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
        <p class="mobile-menu__loc"><i class="fa-solid fa-location-dot"></i> ${c.profile.location}</p>
      </div>
    </div>
  </div>`;
}

export function renderFooter() {
  return `
  <footer class="site-footer on-dark">
    <div class="site-footer__inner">
      <a class="logo" href="index.html">
        <span class="logo__mark">${c.profile.initials}</span>
        <span class="logo__text">${c.profile.name}</span>
      </a>
      <div class="site-footer__social">
        <a class="icon-btn" href="${c.profile.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a class="icon-btn" href="${c.profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a class="icon-btn" href="mailto:${c.profile.email}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
    <div class="site-footer__giant" aria-hidden="true" data-footer-giant>${c.profile.firstName.toUpperCase()}</div>
    <p class="site-footer__copy">© ${c.site.year} ${c.profile.name}. ${c.footer.copyrightSuffix}</p>
  </footer>`;
}

export function renderMarquee() {
  const items = [...c.skills.marquee, ...c.skills.marquee]
    .map(
      (skill) =>
        `<span class="marquee__item">${skill}<i class="fa-solid fa-asterisk marquee__star" aria-hidden="true"></i></span>`
    )
    .join("");
  return `<section class="marquee" aria-hidden="true"><div class="marquee__track">${items}</div></section>`;
}

export function renderIndexMain() {
  const highlights = c.about.highlights
    .map(
      (h, i) => `
      <article class="about-card" data-reveal style="--delay:${i * 100}ms">
        <h3>${h.title}</h3>
        <p>${h.description}</p>
      </article>`
    )
    .join("");

  const skillCards = c.skills.groups
    .map((group, gi) => {
      const rows = group.items
        .slice(0, 6)
        .map(
          (name, i) => `
          <div class="skill-row" style="--i:${i}">
            <div class="skill-row__top"><span>${name}</span></div>
            <div class="skill-row__bar"><div class="skill-row__fill" style="--w:${78 + ((i * 3) % 16)}%"></div></div>
          </div>`
        )
        .join("");
      return `
      <article class="skill-card" data-tilt="8" data-reveal style="--delay:${gi * 120}ms">
        <div class="skill-card__icon"><i class="fa-solid ${group.icon}"></i></div>
        <h3>${group.title}</h3>
        <p class="skill-card__sub">${group.subtitle}</p>
        ${rows}
      </article>`;
    })
    .join("");

  const entries = c.experience.entries
    .map((item, i) => {
      const dates =
        item.startDate && item.endDate
          ? `${item.startDate} — ${item.endDate}`
          : item.startDate || item.endDate || "";
      const meta = [dates, item.location].filter(Boolean).join(" · ");
      const bullets = item.experiences.map((x) => `<li>${x}</li>`).join("");
      const tags = item.tags.map((t) => `<span class="tag">${t}</span>`).join("");
      const website = item.website
        ? `<a class="tag tag--link" href="${item.website}" target="_blank" rel="noopener noreferrer">Website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`
        : "";
      return `
      <article class="exp-item" data-type="${item.type}" data-reveal style="--delay:${i * 80}ms">
        <div class="exp-item__year">${item.year}</div>
        <div class="exp-item__body">
          <h3>${item.role}</h3>
          <p class="exp-item__org">${item.organisation}</p>
          ${meta ? `<p class="exp-item__meta">${meta}</p>` : ""}
          <ul>${bullets}</ul>
          <div class="exp-item__tags">${tags}${website}</div>
        </div>
      </article>`;
    })
    .join("");

  return `
  <section class="hero on-dark" id="home">
    <canvas class="hero__canvas" data-hero-canvas></canvas>
    <canvas class="hero__dots" data-hero-dots></canvas>
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__inner">
      <div>
        <div class="hero__badge" data-reveal>
          <img src="${c.profile.photo}" alt="" width="28" height="28" />
          <span class="pulse-dot" aria-hidden="true"></span>
          <span>${c.hero.badge}</span>
        </div>
        <h1 class="hero__title h-xl" data-reveal aria-label="${c.profile.name}">
          <span class="hero__line" data-split>${c.hero.nameLines[0]}</span><br />
          <span class="hero__line outline-text" data-split>${c.hero.nameLines[1]}</span><br />
          <span class="hero__line" data-split>${c.hero.nameLines[2]}</span>
        </h1>
        <p class="hero__roles" data-reveal style="--delay:120ms">
          <span>${c.hero.rolesPrefix}</span>
          <span class="typing-word" data-typing></span><span class="typing-caret" aria-hidden="true"></span>
        </p>
        <p class="hero__lead" data-reveal style="--delay:180ms">${c.profile.bio}</p>
        <div class="hero__actions" data-reveal style="--delay:240ms">
          <a class="btn btn--primary" href="${c.hero.ctaPrimary.scroll}" data-scroll="${c.hero.ctaPrimary.scroll}" data-magnetic>${c.hero.ctaPrimary.label}</a>
          <a class="btn btn--ghost" href="${c.hero.ctaProjects.href}" data-magnetic>${c.hero.ctaProjects.label}</a>
          <a class="btn btn--ghost" href="${c.hero.ctaResume.href}" download data-magnetic>${c.hero.ctaResume.label}</a>
        </div>
        <div class="hero__social hero__social--mobile">
          <a class="icon-btn" href="${c.profile.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a class="icon-btn" href="${c.profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <span style="color:var(--muted-dark);font-size:.9rem;align-self:center">${c.profile.location}</span>
        </div>
      </div>
      <div class="hero__card-wrap" data-reveal="scale" style="--delay:200ms">
        <svg class="hero__orbit" viewBox="0 0 140 140" aria-hidden="true">
          <defs>
            <path id="orbitPath" d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0" />
          </defs>
          <text fill="rgba(245,244,240,.7)" font-size="11" letter-spacing="3">
            <textPath href="#orbitPath">${c.hero.rotatingBadge.repeat(2)}</textPath>
          </text>
        </svg>
        <div class="hero__card" data-tilt="14" data-cursor="Hello!">
          <img src="${c.profile.photo}" alt="${c.profile.name}" loading="eager" />
          <div class="hero__shine"></div>
          <div class="hero__card-meta">
            <strong>${c.profile.name}</strong>
            <span>${c.profile.degree}</span>
            <span>${c.profile.location}</span>
          </div>
        </div>
        <div class="hero__social">
          <a class="icon-btn" href="${c.profile.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a class="icon-btn" href="${c.profile.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="hero__scroll" aria-hidden="true"><span>Scroll</span><span class="hero__scroll-line"></span></div>
  </section>

  ${renderMarquee()}

  <section class="section on-dark" id="about">
    <div class="container">
      <div class="about__grid">
        <p class="eyebrow" data-reveal>${c.about.eyebrow}</p>
        <p class="about__lead" data-reveal style="--delay:100ms">${c.about.lead}</p>
      </div>
      <div class="about__cards">${highlights}</div>
    </div>
  </section>

  <section class="section section--light" id="skills">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow" data-reveal>${c.skills.eyebrow}</p>
          <h2 class="h-lg" data-split data-reveal>${c.skills.title}</h2>
        </div>
        <p data-reveal style="--delay:120ms">${c.skills.description}</p>
      </div>
      <div class="skills-grid">${skillCards}</div>
    </div>
  </section>

  <section class="section on-dark" id="experience">
    <div class="container">
      <div class="exp-layout">
        <div class="exp-sticky">
          <p class="eyebrow" data-reveal>${c.experience.eyebrow}</p>
          <h2 class="h-lg" data-split data-reveal>${c.experience.title}</h2>
          <p data-reveal style="--delay:100ms;color:var(--muted-dark);margin-top:1rem">${c.experience.description}</p>
          <div class="exp-filters" role="tablist" aria-label="Filter experience" data-exp-filters>
            <button type="button" role="tab" aria-selected="true" data-filter="all">All</button>
            <button type="button" role="tab" aria-selected="false" data-filter="work">Experience</button>
            <button type="button" role="tab" aria-selected="false" data-filter="education">Education</button>
          </div>
        </div>
        <div class="exp-list-wrap">
          <div class="exp-progress" aria-hidden="true">
            <div class="exp-progress__fill" data-exp-progress></div>
            <div class="exp-progress__dot" data-exp-dot></div>
          </div>
          <div class="exp-list" data-exp-list>${entries}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta on-dark">
    <div class="container">
      <h2 class="cta__title h-lg" data-split data-reveal>${c.cta.title}</h2>
      <div class="cta__actions" data-reveal style="--delay:150ms">
        <a class="btn btn--primary" href="${c.cta.primary.href}" data-magnetic>${c.cta.primary.label}</a>
        <a class="btn btn--ghost" href="${c.cta.secondary.href}" data-magnetic>${c.cta.secondary.label}</a>
      </div>
    </div>
  </section>`;
}

export function renderProjectsMain() {
  const cards = c.projects.items
    .map((p, i) => {
      const tags = p.skills.map((s) => `<span class="tag">${s}</span>`).join("");
      const demo =
        p.demo && p.demo !== "#"
          ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
          : "";
      return `
      <article class="project-card" data-tilt="6" data-reveal style="--delay:${i * 80}ms" data-cursor="View">
        <div class="project-card__media">
          <img src="${p.imageSrc}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="project-card__body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-card__tags">${tags}</div>
          <div class="project-card__links">
            ${demo}
            <a href="${p.source}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> Source</a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  return `
  <section class="page-hero on-dark">
    <div class="container">
      <p class="eyebrow" data-reveal>${c.projects.eyebrow}</p>
      <h1 class="h-xl" data-split data-reveal>${c.projects.title}</h1>
      <p data-reveal style="--delay:120ms;color:var(--muted-dark);max-width:40rem;margin-top:1.25rem">${c.projects.description}</p>
    </div>
  </section>
  <section class="on-dark">
    <div class="container projects-grid">${cards}</div>
  </section>`;
}

export function renderContactMain() {
  return `
  <section class="page-hero on-dark">
    <div class="container">
      <p class="eyebrow" data-reveal>${c.contact.eyebrow}</p>
      <h1 class="h-xl" data-split data-reveal>${c.contact.title}</h1>
      <p data-reveal style="--delay:120ms;color:var(--muted-dark);max-width:36rem;margin-top:1.25rem">${c.contact.subtitle}</p>
    </div>
  </section>
  <section class="on-dark">
    <div class="container contact-layout">
      <div data-reveal>
        <a class="contact-email" href="mailto:${c.profile.email}" data-magnetic>${c.profile.email}</a>
        <div class="contact-meta">
          <a href="${c.profile.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a>
          <a href="${c.profile.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
          <p><i class="fa-solid fa-location-dot"></i> ${c.profile.location}</p>
          <p><span class="pulse-dot" style="display:inline-block;margin-right:.5rem;vertical-align:middle"></span>${c.profile.availability}</p>
        </div>
      </div>
      <form class="contact-form" data-reveal style="--delay:120ms" data-contact-form novalidate>
        <input type="text" name="_gotcha" class="contact-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <div class="field-row">
          <label class="field"><span>Name</span><input name="name" required placeholder="Your name" autocomplete="name" /></label>
          <label class="field"><span>Email</span><input type="email" name="email" required placeholder="you@email.com" autocomplete="email" /></label>
        </div>
        <label class="field"><span>Subject</span><input name="subject" placeholder="What's this about?" /></label>
        <label class="field"><span>Message</span><textarea name="message" rows="5" required placeholder="Tell me about your project..."></textarea></label>
        <p class="contact-status" data-contact-status role="status" aria-live="polite" hidden></p>
        <button class="btn btn--primary" type="submit" data-magnetic data-contact-submit>Send Message</button>
      </form>
    </div>
  </section>`;
}
