import * as THREE from 'three';

export function initScene() {

  const canvas = document.getElementById('bg');

  if (!canvas) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);

  camera.position.z = 9;

  const knotMat = new THREE.MeshBasicMaterial({ color: 0xff7aa2, wireframe: true, transparent: true, opacity: 0.75 });

  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.7, 0.5, 160, 20), knotMat);

  scene.add(knot);

  const field = new THREE.Group();

  scene.add(field);

  const bits = [];

  const geos = [new THREE.OctahedronGeometry(0.28), new THREE.TetrahedronGeometry(0.3), new THREE.IcosahedronGeometry(0.25)];

  for (let i = 0; i < 70; i++) {

    const m = new THREE.Mesh(

      geos[i % 3],

      new THREE.MeshBasicMaterial({ color: 0x7fd1ff, wireframe: true, transparent: true, opacity: 0.55 })

    );

    m.position.set((Math.random() - 0.5)  *18, -Math.random()*  26 + 4, (Math.random() - 0.5) * 10 - 2);

    m.userData = { s: 0.2 + Math.random()  *0.6, o: Math.random()*  6 };

    field.add(m);

    bits.push(m);

  }

  let mx = 0, my = 0, prog = 0, wide = true, running = true;

  addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });

  function size() {

    const w = innerWidth, h = innerHeight;

    renderer.setSize(w, h, false);

    camera.aspect = w / h;

    camera.updateProjectionMatrix();

    wide = w > 800;

    knot.scale.setScalar(wide ? 1 : 0.7);

  }

  addEventListener('resize', size);

  size();

  function onScroll() {

    const max = document.documentElement.scrollHeight - innerHeight;

    prog = max > 0 ? scrollY / max : 0;

  }

  addEventListener('scroll', onScroll, { passive: true });

  onScroll();

  const col = new THREE.Color();

  function frame(t) {

    if (!running) return;

    t *= 0.001;

    const kx = wide ? 3.1 : 0.6;

    knot.position.x += ((kx - Math.sin(prog  *Math.PI*  2)  *(wide ? 1.2 : 0)) - knot.position.x)*  0.06;

    knot.position.y += ((-prog  *1.5 + -my*  0.6) - knot.position.y) * 0.06;

    knot.rotation.y = prog  *9 + (reduce ? 0 : t*  0.15) + mx * 0.8;

    knot.rotation.x = prog  *4 + my*  0.6;

    col.setHSL(0.95 - prog * 0.5, 0.85, 0.66);

    knotMat.color.copy(col);

    field.position.y = prog * 20;

    for (const b of bits) {

      if (!reduce) { b.rotation.x += 0.004  *b.userData.s; b.rotation.y += 0.006*  b.userData.s; }

    }

    camera.position.x += (mx  *0.8 - camera.position.x)*  0.04;

    renderer.render(scene, camera);

    if (!reduce) requestAnimationFrame(frame);

  }

  if (reduce) {

    frame(0);

    addEventListener('scroll', () => frame(0), { passive: true });

    addEventListener('resize', () => frame(0));

  } else {

    requestAnimationFrame(frame);

  }

  document.addEventListener('visibilitychange', () => {

    if (reduce) return;

    running = !document.hidden;

    if (running) requestAnimationFrame(frame);

  });

}
