import "./styles/scroll-animate.scss";

const koshkas = document.querySelectorAll("[koshka]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("spotted", "");
    } else {
      if (entry.target.hasAttribute("koshka-chonky")) {
        return;
      }

      entry.target.removeAttribute("spotted");
    }
  });
});

koshkas.forEach((koshka) => observer.observe(koshka));

export {};
