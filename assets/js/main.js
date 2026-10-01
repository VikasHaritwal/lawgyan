(function () {
  var root = document.documentElement;
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Dark mode toggle
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.dataset.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      store('theme', next);
    });
  }

  // Bar Council of India disclaimer, shown once per visitor
  var modal = document.getElementById('bci-modal');
  if (modal && store('bci-agreed') !== 'yes') {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var agree = document.getElementById('bci-agree');
    agree.focus();
    agree.addEventListener('click', function () {
      store('bci-agreed', 'yes');
      modal.hidden = true;
      document.body.style.overflow = '';
    });
  }

  // Reading progress bar
  var bar = document.getElementById('progress-bar');
  var article = document.querySelector('.post-body');
  if (bar && article) {
    var update = function () {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var pct = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;
      bar.style.width = (pct * 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // Copy link
  var copy = document.querySelector('.copy-link');
  if (copy) {
    copy.addEventListener('click', function () {
      var url = copy.dataset.url && copy.dataset.url.indexOf('http') === 0 ? copy.dataset.url : location.href;
      var done = function () { copy.textContent = 'Copied ✓'; setTimeout(function () { copy.textContent = 'Copy link'; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () {});
    });
  }

  // Topic filters on the blog page
  var chips = document.querySelectorAll('.chip[data-filter]');
  if (chips.length) {
    var cards = document.querySelectorAll('#post-list .post-card');
    var empty = document.getElementById('empty');
    var apply = function (filter) {
      var shown = 0;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.filter === filter); });
      cards.forEach(function (card) {
        var match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { apply(c.dataset.filter); }); });
    var initial = location.hash.slice(1);
    if (initial && document.querySelector('.chip[data-filter="' + initial + '"]')) apply(initial);
  }
})();
