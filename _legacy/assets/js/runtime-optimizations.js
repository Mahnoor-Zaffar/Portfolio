// Preserved from the original inline runtime script in `index.html`.
// Delay wordification until the loader is gone to avoid startup conflicts.
(function () {
  function wrapTextNodeWords(textNode) {
    var text = textNode.textContent || '';
    if (!text.trim()) return null;

    var frag = document.createDocumentFragment();
    text.split(/(\s+)/).forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        return;
      }

      var span = document.createElement('span');
      span.className = 'word';
      span.textContent = part;
      frag.appendChild(span);
    });

    return frag;
  }

  function wordifyParagraph(p) {
    if (!p || p.dataset.wordified === '1') return;

    if (p.querySelector('.word')) {
      p.dataset.wordified = '1';
      return;
    }

    var nodes = Array.from(p.childNodes);
    var changed = false;

    nodes.forEach(function (node) {
      if (node.nodeType !== Node.TEXT_NODE) return;
      var frag = wrapTextNodeWords(node);
      if (!frag) return;
      p.replaceChild(frag, node);
      changed = true;
    });

    if (changed || p.querySelector('.word')) p.dataset.wordified = '1';
  }

  function runWordify() {
    if (window.matchMedia && window.matchMedia('(max-width: 1023px)').matches) return;
    if (navigator.connection && navigator.connection.saveData) return;
    document.querySelectorAll('p').forEach(wordifyParagraph);
  }

  function unstickMobileParagraphs() {
    if (!(window.matchMedia && window.matchMedia('(max-width: 1023px)').matches)) return;

    setTimeout(function () {
      document.querySelectorAll('p, p .word').forEach(function (el) {
        var style = window.getComputedStyle(el);
        if (style && (style.opacity === '0' || style.visibility === 'hidden')) {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
        }
      });
    }, 1800);
  }

  function optimizeRuntimeImages() {
    document.querySelectorAll('img').forEach(function (img, index) {
      img.decoding = 'async';

      if (!img.hasAttribute('loading')) {
        var rect = img.getBoundingClientRect();
        var belowFold = rect.top > (window.innerHeight || 0);
        img.loading = belowFold || index > 0 ? 'lazy' : 'eager';
      }

      if ((!img.getAttribute('width') || !img.getAttribute('height')) && img.naturalWidth && img.naturalHeight) {
        img.setAttribute('width', String(img.naturalWidth));
        img.setAttribute('height', String(img.naturalHeight));
      }

      if (!img.complete) {
        img.addEventListener('load', function () {
          if (!img.getAttribute('width') && img.naturalWidth) img.setAttribute('width', String(img.naturalWidth));
          if (!img.getAttribute('height') && img.naturalHeight) img.setAttribute('height', String(img.naturalHeight));
        }, { once: true });
      }
    });
  }

  function stabilizeMobileFlowRuntime() {
    if (!(window.matchMedia && window.matchMedia('(max-width: 768px)').matches)) return;

    if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === 'function') {
      window.ScrollTrigger.getAll().forEach(function (trigger) {
        if (trigger && typeof trigger.disable === 'function') trigger.disable(false, true);
        if (trigger && typeof trigger.kill === 'function') trigger.kill(false, true);
      });
    }

    var flowSelectors = [
      'main',
      'section',
      '.interactive-header',
      '.about-section',
      '.services',
      '.services-details',
      '.footer-cta',
      '.contact-section',
      '.contact-wrapper',
      '.get-in-touch',
      'header',
      '.pin-spacer',
      '#smooth-wrapper',
      '#smooth-content'
    ];

    document.querySelectorAll(flowSelectors.join(',')).forEach(function (el) {
      el.style.position = 'relative';
      el.style.top = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      el.style.left = 'auto';
      el.style.height = 'auto';
      el.style.minHeight = 'auto';
      el.style.transform = 'none';
      el.style.overflow = 'visible';
      el.style.zIndex = 'auto';
    });

    document.querySelectorAll('.tool-item, .skill-bubble, .platform-index').forEach(function (el) {
      el.style.position = 'relative';
      el.style.top = 'auto';
      el.style.left = 'auto';
      el.style.right = 'auto';
      el.style.bottom = 'auto';
      el.style.transform = 'none';
      el.style.zIndex = 'auto';
    });

    document.querySelectorAll('.pin-spacer > div, .dot-cursor, #contact > button').forEach(function (el) {
      if (el.matches('.dot-cursor, #contact > button')) {
        el.style.display = 'none';
      } else {
        el.style.position = 'relative';
        el.style.top = 'auto';
        el.style.left = 'auto';
        el.style.width = '100%';
        el.style.maxWidth = '100%';
        el.style.height = 'auto';
        el.style.maxHeight = 'none';
        el.style.transform = 'none';
      }
    });
  }

  function waitForLoaderThenWordify() {
    var checks = 0;
    var maxChecks = 20;
    var timer = setInterval(function () {
      checks += 1;
      var loader = document.querySelector('.loader-container');
      if (!loader || checks >= maxChecks) {
        clearInterval(timer);
        if (window.requestIdleCallback) {
          window.requestIdleCallback(runWordify, { timeout: 300 });
        } else {
          setTimeout(runWordify, 100);
        }
      }
    }, 50);
  }

  window.addEventListener('load', waitForLoaderThenWordify);
  window.addEventListener('load', unstickMobileParagraphs);
  window.addEventListener('load', optimizeRuntimeImages);
  window.addEventListener('load', stabilizeMobileFlowRuntime);
  window.addEventListener('resize', stabilizeMobileFlowRuntime);

  var mobileFlowObserver = new MutationObserver(function () {
    stabilizeMobileFlowRuntime();
  });

  window.addEventListener('load', function () {
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
      mobileFlowObserver.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ['style', 'class']
      });
    }
  });
})();
