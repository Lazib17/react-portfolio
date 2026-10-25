export function initCount() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;

  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  const animate = (el) => {
    const target = Number(el.getAttribute("data-count") || 0);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const value = Math.floor(easeOutExpo(t) * target);
      el.textContent = `${value}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = `${target}${suffix}`;
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  els.forEach((el) => io.observe(el));
}
