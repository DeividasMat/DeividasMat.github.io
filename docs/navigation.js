(() => {
  if (location.hash === '#blog' && !document.querySelector('.blog-page')) {
    location.replace(new URL('blog/', document.baseURI));
    return;
  }
  const localLinks = [...document.querySelectorAll('.site-index nav a[href^="#"]')];
  const sections = localLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
  let queued = false;
  function update() {
    queued = false;
    if (!sections.length) return;
    let current = sections[0];
    const threshold = window.innerWidth <= 850 ? 110 : 130;
    for (const section of sections) if (section.getBoundingClientRect().top <= threshold) current = section;
    const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (nearBottom) current = sections[sections.length - 1];
    for (const link of localLinks) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  function schedule() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  window.addEventListener('hashchange', () => {
    if (location.hash === '#blog' && !document.querySelector('.blog-page')) {
      location.assign(new URL('blog/', document.baseURI));
    } else schedule();
  });
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
  document.querySelectorAll('.video-preview').forEach(button => {
    button.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.className = 'video-frame';
      frame.title = button.dataset.title;
      frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.video + '?autoplay=1';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      button.replaceWith(frame);
      frame.focus();
    });
  });
  update();
})();
