export function initPreloader({ name = "Lazib Hossain" } = {}) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = sessionStorage.getItem("preloader-seen") === "1";

  if (reduced || seen) {
    document.documentElement.classList.remove("is-booting");
    document.body.style.opacity = "1";
    return Promise.resolve();
  }

  const el = document.createElement("div");
  el.className = "preloader";
  el.innerHTML = `
    <div class="preloader__inner">
      <div class="preloader__glyph">LH</div>
      <div class="preloader__bar"><div class="preloader__fill"></div></div>
      <div class="preloader__meta">
        <span>${name} — Portfolio '26</span>
        <span class="preloader__count">0</span>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  const fill = el.querySelector(".preloader__fill");
  const count = el.querySelector(".preloader__count");
  const start = performance.now();
  const minMs = 1400;
  let progress = 0;

  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const images = [...document.querySelectorAll("img")]
    .slice(0, 8)
    .map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          }
        })
    );

  const assets = Promise.all([fontsReady, ...images]);

  return new Promise((resolve) => {
    const tick = (now) => {
      const elapsed = now - start;
      const timeRatio = Math.min(1, elapsed / minMs);
      progress = Math.max(progress, timeRatio * 0.85);
      const pct = Math.floor(progress * 100);
      fill.style.width = `${pct}%`;
      count.textContent = String(pct);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    assets.finally(() => {
      const finish = () => {
        progress = 1;
        fill.style.width = "100%";
        count.textContent = "100";
        sessionStorage.setItem("preloader-seen", "1");
        el.classList.add("is-done");
        document.documentElement.classList.remove("is-booting");
        document.body.style.opacity = "1";
        setTimeout(() => {
          el.remove();
          resolve();
        }, 650);
      };

      const wait = Math.max(0, minMs - (performance.now() - start));
      setTimeout(finish, wait);
    });
  });
}
