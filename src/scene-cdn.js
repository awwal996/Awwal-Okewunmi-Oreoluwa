(function () {

  function start() {

    var canvas = document.getElementById('bg');

    if (!canvas || !window.THREE) return;

    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);

    var ACC = 0xff7a45, END = -66, START = 6;

    function fade(d, lo, hi, inA, inB, outA, outB) {

      if (d < lo || d > hi) return 0;

      var a = d > inB ? 1 - Math.min(1, (d - inB) / (inA - inB)) : 1;

      var b = d < outA ? Math.max(0, (d - outB) / (outA - outB)) : 1;

      return Math.max(0, Math.min(a, b));

    }

    /* tunnel of twisting frames */

    var frames = [];

    for (var i = 0; i < 16; i++) {

      var w = 3.9, h = 2.4;

      var g = new THREE.BufferGeometry().setFromPoints([[-w, -h], [w, -h], [w, h], [-w, h]].map(function (p) { return new THREE.Vector3(p[0], p[1], 0); }));

      var m = new THREE.LineBasicMaterial({ color: ACC, transparent: true, opacity: 0.4 });

      var l = new THREE.LineLoop(g, m);

      l.position.z = -i  *4.6; l.rotation.z = i*  0.11;

      scene.add(l); frames.push(l);

    }

    /* cards: edit this list to change what the 3D cards say (max 2 short lines each) */

    var defs = [

      ['01', 'Prompt design', ['System prompts, personas,', 'examples and structure.']],

      ['02', 'VeLogo', ['Delivery web app for', 'Nigerian dishes.']],

      ['03', 'ReflectAI', ['Student companion that', 'tracks attendance.']],

      ['04', 'Prompt Lab', ['Weak prompt vs strong', 'prompt, side by side.']],

      ['05', 'Hire me', ['Awwaloreoluwa3@gmail.com']]

    ];

    function makeCard(num, title, line) {

      var c = document.createElement('canvas'); c.width = 640; c.height = 400;

      var x = c.getContext('2d');

      x.fillStyle = 'rgba(14,16,32,.92)'; x.fillRect(0, 0, 640, 400);

      x.strokeStyle = '#ff7a45'; x.lineWidth = 4; x.strokeRect(2, 2, 636, 396);

      x.fillStyle = '#ff7a45'; x.font = '700 26px system-ui,sans-serif'; x.fillText(num, 40, 70);

      x.fillStyle = '#f4f1ea'; x.font = '800 52px system-ui,sans-serif'; x.fillText(title, 40, 160);

      x.fillStyle = '#9aa0c0'; x.font = '400 28px system-ui,sans-serif';

      line.forEach(function (t, i) { x.fillText(t, 40, 230 + i * 40); });

      x.fillStyle = '#ff7a45'; x.fillRect(40, 340, 90, 4);

      var tex = new THREE.CanvasTexture(c);

      var mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, side: THREE.DoubleSide });

      return new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.125), mat);

    }

    var cards = defs.map(function (d, i) {

      var m = makeCard(d[0], d[1], d[2]);

      m.userData.z = -6 - i * 14;

      m.position.z = m.userData.z; m.rotation.y = -0.32;

      scene.add(m); return m;

    });

    /* particles */

    var PN = 1100, pp = new Float32Array(PN * 3);

    for (var k = 0; k < PN; k++) { pp[k  *3] = (Math.random() - 0.5)*  16; pp[k  *3 + 1] = (Math.random() - 0.5)*  10; pp[k  *3 + 2] = -Math.random()*  80 + 8; }

    var pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pp, 3));

    var pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: ACC, size: 0.04, transparent: true, opacity: 0.7 }));

    scene.add(pts);

    var mx = 0, my = 0, prog = 0, wide = true, camZ = START, running = true;

    addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });

    function size() {

      renderer.setSize(innerWidth, innerHeight, false);

      camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();

      wide = innerWidth > 760;

      cards.forEach(function (c) { c.scale.setScalar(wide ? 1 : 0.7); c.position.x = wide ? 2.7 : 0.5; c.position.y = wide ? 0 : -1.5; });

    }

    addEventListener('resize', size); size();

    function sc() { var m = document.documentElement.scrollHeight - innerHeight; prog = m > 0 ? scrollY / m : 0; }

    addEventListener('scroll', sc, { passive: true }); sc();

    function frame(t) {

      if (!running) return;

      var target = START + (END - START) * prog;

      camZ += (target - camZ) * (reduce ? 1 : 0.07);

      camera.position.set(mx  *0.9, -my*  0.6, camZ);

      camera.rotation.z = (target - camZ)  *0.01 + mx*  0.05;

      frames.forEach(function (f, i) {

        var d = camZ - f.position.z;

        f.material.opacity = 0.45 * fade(d, 0.5, 34, 34, 24, 3, 0.5);

        if (!reduce) f.rotation.z += 0.0008 * (i % 2 ? 1 : -1);

      });

      cards.forEach(function (c) {

        var d = camZ - c.userData.z;

        c.material.opacity = fade(d, 1.5, 24, 24, 15, 5, 1.5);

        c.rotation.y = -0.32 + mx * 0.15;

      });

      pts.position.z = reduce ? 0 : Math.sin(t  *0.0002)*  1.2;

      renderer.render(scene, camera);

      if (!reduce) requestAnimationFrame(frame);

    }

    if (reduce) {

      frame(0);

      addEventListener('scroll', function () { frame(0); }, { passive: true });

      addEventListener('resize', function () { frame(0); });

    } else requestAnimationFrame(frame);

    document.addEventListener('visibilitychange', function () {

      if (reduce) return; running = !document.hidden; if (running) requestAnimationFrame(frame);

    });

  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

})();
