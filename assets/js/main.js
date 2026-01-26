(() => {
  const wrap = document.querySelector('[data-posts]');
  const btn = document.querySelector('[data-load-more]');
  const note = document.querySelector('[data-load-note]');

  if (!wrap || !btn) return;

  const posts = Array.from(wrap.querySelectorAll('[data-post]'));
  const initial = parseInt(wrap.getAttribute('data-initial') || '5', 10);

  // если постов нет — прячем кнопку и подпись
  if (posts.length === 0) {
    btn.style.display = 'none';
    if (note) note.textContent = '';
    return;
  }

  let shown = 0;

  function apply() {
    posts.forEach((p, i) => {
      p.style.display = i < shown ? '' : 'none';
    });

    // если всё показали — прячем кнопку
    if (shown >= posts.length) {
      btn.style.display = 'none';
      if (note) note.textContent = '';
    } else {
      btn.style.display = '';
      if (note) note.textContent = `Показано ${shown} из ${posts.length}`;
    }
  }

  shown = Math.min(initial, posts.length);
  apply();

  btn.addEventListener('click', () => {
    shown = Math.min(shown + initial, posts.length);
    apply();
  });
})();

