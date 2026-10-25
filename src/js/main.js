import "../css/base.css";
import "../css/components.css";
import "../css/sections.css";
import "lenis/dist/lenis.css";

import { content } from "../data/content.js";
import {
  renderHeader,
  renderFooter,
  renderIndexMain,
  renderProjectsMain,
  renderContactMain,
} from "./render.js";
import { initPreloader } from "./systems/preloader.js";
import { initCurtain } from "./systems/curtain.js";
import { initCursor } from "./systems/cursor.js";
import { initMagnetic } from "./systems/magnetic.js";
import { initTilt } from "./systems/tilt.js";
import { initReveal } from "./systems/reveal.js";
import { initSplit } from "./systems/split.js";
import { initCount } from "./systems/count.js";
import { initScroll } from "./systems/scroll.js";
import { initTyping } from "./systems/typing.js";
import { initHero3D, initHeroDots } from "./systems/hero3d.js";

function pageId() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  if (file.includes("projects")) return "projects";
  if (file.includes("contact")) return "contact";
  return "home";
}

function mountShell(active) {
  const app = document.querySelector("#app");
  let main = "";
  if (active === "projects") main = renderProjectsMain();
  else if (active === "contact") main = renderContactMain();
  else main = renderIndexMain();

  app.innerHTML = `${renderHeader(active)}<main>${main}</main>${renderFooter()}`;
}

function initHeader(lenis) {
  const header = document.querySelector("[data-header]");
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!header) return;

  let lastY = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY || 0;
      header.classList.toggle("is-scrolled", y > 24);
      if (y > lastY && y > 120) header.classList.add("is-hidden");
      else header.classList.remove("is-hidden");
      lastY = y;
    },
    { passive: true }
  );

  const lightSections = document.querySelectorAll(".section--light");
  if (lightSections.length) {
    const io = new IntersectionObserver(
      (entries) => {
        const any = entries.some((e) => e.isIntersecting && e.intersectionRatio > 0.2);
        header.classList.toggle("is-light", any);
      },
      { threshold: [0.2, 0.4] }
    );
    lightSections.forEach((s) => io.observe(s));
  }

  burger?.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu?.classList.toggle("is-open", !open);
    document.body.style.overflow = open ? "" : "hidden";
    if (lenis) {
      if (open) lenis.start();
      else lenis.stop();
    }
  });

  menu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
      lenis?.start();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu?.classList.contains("is-open")) {
      burger?.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
      lenis?.start();
    }
  });
}

function initExperience() {
  const filters = document.querySelector("[data-exp-filters]");
  const list = document.querySelector("[data-exp-list]");
  const fill = document.querySelector("[data-exp-progress]");
  const dot = document.querySelector("[data-exp-dot]");
  if (!filters || !list) return;

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filters.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-selected", "false"));
    btn.setAttribute("aria-selected", "true");
    const filter = btn.getAttribute("data-filter");
    list.querySelectorAll(".exp-item").forEach((item) => {
      const show = filter === "all" || item.getAttribute("data-type") === filter;
      item.classList.toggle("is-hidden", !show);
    });
  });

  list.addEventListener("mouseenter", () => list.classList.add("is-hovering"));
  list.addEventListener("mouseleave", () => list.classList.remove("is-hovering"));

  const onScroll = () => {
    if (!fill || !dot) return;
    const rect = list.getBoundingClientRect();
    const view = window.innerHeight * 0.55;
    const total = rect.height;
    const passed = Math.min(total, Math.max(0, view - rect.top));
    const ratio = total ? passed / total : 0;
    fill.style.transform = `scaleY(${ratio})`;
    dot.style.top = `calc(${ratio * 100}% - 4px)`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-contact-status]");
  const submitBtn = form.querySelector("[data-contact-submit]");
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(content.profile.email)}`;

  const setStatus = (message, type = "") => {
    if (!status) return;
    status.hidden = !message;
    status.textContent = message;
    status.className = `contact-status${type ? ` contact-status--${type}` : ""}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    if (String(data.get("_gotcha") || "").trim()) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "Portfolio Contact").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.", "error");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }
    setStatus("Sending your message...", "pending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
          _subject: `Portfolio message: ${subject}`,
          _template: "table",
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || "Could not send message.");
      }

      form.reset();
      setStatus("Message sent. I’ll get back to you soon.", "success");
    } catch (error) {
      setStatus(
        "Couldn’t send right now. Email me directly at " + content.profile.email,
        "error"
      );
      console.error(error);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}

function initFooterParallax() {
  const giant = document.querySelector("[data-footer-giant]");
  if (!giant || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY * 0.04;
      giant.style.transform = `translateX(-50%) translateY(${y}px)`;
    },
    { passive: true }
  );
}

async function boot() {
  const active = pageId();
  mountShell(active);

  const showPreloader = active === "home";
  if (showPreloader) {
    await initPreloader({ name: content.profile.name });
  } else {
    document.documentElement.classList.remove("is-booting");
    document.body.style.opacity = "1";
  }

  initCurtain();
  const lenis = initScroll();
  initHeader(lenis);
  initSplit();
  initReveal();
  initCursor();
  initMagnetic();
  initTilt();
  initCount();
  initTyping("[data-typing]", content.hero.typingWords);
  initExperience();
  initContactForm();
  initFooterParallax();

  if (active === "home") {
    initHero3D(document.querySelector("[data-hero-canvas]"));
    initHeroDots(document.querySelector("[data-hero-dots]"));
  }

  // Trigger first-screen reveals after preloader
  const hero = document.querySelector(".hero");
  const revealHero = () => {
    hero?.classList.add("is-ready");
    document.querySelectorAll(".hero [data-reveal], .hero [data-split]").forEach((el) => {
      el.classList.add("is-inview");
    });
  };
  requestAnimationFrame(() => requestAnimationFrame(revealHero));
  setTimeout(revealHero, 80);
}

boot();
