const s = document.querySelectorAll("[koshka]"), o = new IntersectionObserver((e) => {
  e.forEach((t) => {
    if (t.isIntersecting)
      t.target.setAttribute("spotted", "");
    else {
      if (t.target.hasAttribute("koshka-chonky"))
        return;
      t.target.removeAttribute("spotted");
    }
  });
});
s.forEach((e) => o.observe(e));
