import Lenis from "lenis";

export function initScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-scroll]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(btn.getAttribute("data-scroll"));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const sel = btn.getAttribute("data-scroll");
      const target = document.querySelector(sel);
      if (target) lenis.scrollTo(target, { offset: -80 });
    });
  });

  return lenis;
}
