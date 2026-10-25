export function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ring = document.createElement("div");
  ring.className = "cursor";
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const label = document.createElement("div");
  label.className = "cursor-label";
  document.body.append(ring, dot, label);

  let mx = 0;
  let my = 0;
  let rx = 0;
  let ry = 0;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    label.style.transform = `translate(${mx + 18}px, ${my + 18}px)`;
    ring.classList.add("is-ready");
    dot.classList.add("is-ready");
  });

  const loop = () => {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  };
  loop();

  const setHover = (on, text = "") => {
    ring.classList.toggle("is-hover", on || Boolean(text));
    if (text) {
      label.textContent = text;
      label.classList.add("is-visible");
    } else {
      label.classList.remove("is-visible");
      label.textContent = "";
    }
  };

  document.addEventListener("mouseover", (e) => {
    const magnetic = e.target.closest("[data-cursor]");
    if (magnetic) {
      setHover(true, magnetic.getAttribute("data-cursor") || "");
      return;
    }
    if (e.target.closest("a, button, .btn, .icon-btn")) {
      setHover(true);
      return;
    }
    setHover(false);
  });
}
