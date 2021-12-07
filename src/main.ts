document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = anchor.getAttribute("href");
    if (!target) return;

    const targetEl = document.querySelector(target);
    if (!targetEl) return;

    targetEl.scrollIntoView({
      behavior: "smooth"
    });
  });
});
