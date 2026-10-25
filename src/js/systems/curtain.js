export function initCurtain() {
  if (document.querySelector(".curtain")) return;

  const curtain = document.createElement("div");
  curtain.className = "curtain";
  curtain.setAttribute("aria-hidden", "true");
  curtain.innerHTML = Array.from({ length: 5 }, (_, i) =>
    `<div class="curtain__strip" style="--i:${i}"></div>`
  ).join("");
  document.body.appendChild(curtain);

  const cover = () =>
    new Promise((resolve) => {
      curtain.classList.remove("is-revealing");
      curtain.classList.add("is-covering");
      setTimeout(resolve, 900);
    });

  document.addEventListener("click", async (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http") || link.target === "_blank" || link.hasAttribute("download")) {
      return;
    }
    if (href.endsWith(".pdf")) return;

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && !url.hash) return;

    e.preventDefault();
    await cover();
    window.location.href = href;
  });

  requestAnimationFrame(() => {
    curtain.classList.add("is-revealing");
    setTimeout(() => curtain.classList.remove("is-covering", "is-revealing"), 900);
  });
}
