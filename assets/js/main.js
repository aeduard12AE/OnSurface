(function () {
  const list = document.querySelector("[data-posts]");
  const btn = document.querySelector("[data-load-more]");
  const note = document.querySelector("[data-load-note]");
  if (!list || !btn) return;

  const items = Array.from(list.querySelectorAll("[data-post]"));
  const initial = Number(list.getAttribute("data-initial")) || 5;

  function apply() {
    items.forEach((el, idx) => el.style.display = idx < initial ? "" : "none");
    if (items.length <= initial) {
      btn.style.display = "none";
      if (note) note.textContent = "Пока что это всё.";
    } else {
      if (note) note.textContent = `Показано ${initial} из ${items.length}.`;
    }
  }

  btn.addEventListener("click", () => {
    items.forEach(el => el.style.display = "");
    btn.style.display = "none";
    if (note) note.textContent = `Показаны все посты: ${items.length}.`;
  });

  apply();
})();
