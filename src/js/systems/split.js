export function initSplit() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    const words = text.split(/\s+/);
    el.innerHTML = words
      .map(
        (word, i) =>
          `<span class="split-word"><span style="--i:${i}">${word}</span></span>`
      )
      .join("");
    el.classList.add("split-ready");
  });
}
