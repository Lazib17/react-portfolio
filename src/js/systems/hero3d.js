import * as THREE from "three";

export function initHero3D(canvas) {
  if (!canvas) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 4.2;

  const count = isMobile ? 420 : 900;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.1 + Math.random() * 1.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xb6ff3c,
    size: isMobile ? 0.018 : 0.022,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const wireGeo = new THREE.IcosahedronGeometry(1.35, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  });
  const wire = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wire);

  let mx = 0;
  let my = 0;
  let running = true;
  let raf = 0;

  const onMove = (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener("mousemove", onMove);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas.parentElement;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  const io = new IntersectionObserver(
    ([entry]) => {
      running = entry.isIntersecting;
      if (running) raf = requestAnimationFrame(animate);
    },
    { threshold: 0.05 }
  );
  io.observe(canvas);

  const animate = () => {
    if (!running) return;
    points.rotation.y += 0.0018;
    points.rotation.x += 0.0007;
    wire.rotation.y -= 0.0012;
    wire.rotation.x += 0.0005;
    camera.position.x += (mx * 0.35 - camera.position.x) * 0.04;
    camera.position.y += (-my * 0.25 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  raf = requestAnimationFrame(animate);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", resize);
    geometry.dispose();
    material.dispose();
    wireGeo.dispose();
    wireMat.dispose();
    renderer.dispose();
  };
}

export function initHeroDots(canvas) {
  if (!canvas) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const ctx = canvas.getContext("2d");
  let w = 0;
  let h = 0;
  let mx = -999;
  let my = -999;
  let raf = 0;
  let running = true;
  const gap = 28;

  const resize = () => {
    const parent = canvas.parentElement;
    w = parent.clientWidth;
    h = parent.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const onMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left;
    my = e.clientY - rect.top;
  };

  const draw = () => {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (let y = gap; y < h; y += gap) {
      for (let x = gap; x < w; x += gap) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 140);
        const r = 1 + influence * 3.2;
        const a = 0.12 + influence * 0.7;
        ctx.beginPath();
        ctx.fillStyle = `rgba(182,255,60,${a})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    raf = requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", onMove);
  const io = new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting;
    if (running) raf = requestAnimationFrame(draw);
  });
  io.observe(canvas);
  raf = requestAnimationFrame(draw);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    io.disconnect();
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMove);
  };
}
