export function initTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-tilt]").forEach((el) => {
    const max = Number(el.getAttribute("data-tilt") || 8);
    let shine = el.querySelector(".hero__shine, .tilt-shine");
    if (!shine) {
      shine = document.createElement("div");
      shine.className = "tilt-shine hero__shine";
      el.style.position = el.style.position || "relative";
      el.appendChild(shine);
    }

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
      shine.style.setProperty("--mx", `${px * 100}%`);
      shine.style.setProperty("--my", `${py * 100}%`);
      shine.style.opacity = "1";
    });

    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.55s var(--ease-out)";
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
      shine.style.opacity = "0";
      setTimeout(() => {
        el.style.transition = "";
      }, 550);
    });
  });
}
