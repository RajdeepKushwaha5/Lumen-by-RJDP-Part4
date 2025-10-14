// small JS placeholder: copy mouse_coords.js behaviour if present
(function () {
  // show mouse coords in console for debugging like original
  window.addEventListener('mousemove', function (e) {
    // console.log('mouse', e.clientX, e.clientY);
  });
})();

// Auto-update copyright year (moved from inline script)
(function () {
  try {
    var y = new Date().getFullYear();
    var el = document.getElementById('year');
    if (el) el.textContent = y;
  } catch (e) {
    // noop
  }
})();

/* Lightweight hero particle canvas */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var canvas = document.querySelector('.hero-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var w = 0, h = 0;

  function resize() {
    w = canvas.width = canvas.clientWidth;
    h = canvas.height = canvas.clientHeight;
  }

  function initParticles() {
    particles = [];
    var count = Math.max(10, Math.round((w * h) / 60000));
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: 0.1 + Math.random() * 0.4
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0,255,65,' + p.alpha + ')';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  function start() {
    resize();
    initParticles();
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function () {
    resize(); initParticles();
  });

  start();
})();
