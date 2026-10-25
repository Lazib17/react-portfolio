export function initMagnetic() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.3;
    const pad = 40;

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      if (Math.abs(x) > rect.width / 2 + pad || Math.abs(y) > rect.height / 2 + pad) return;
      el.style.transition = "transform 0.12s linear";
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.5s var(--ease-out)";
      el.style.transform = "translate(0, 0)";
    });
  });
}
