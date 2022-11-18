window.addEventListener("DOMContentLoaded", () => {
  new Splide("#product-type-carousel", {
    type: "loop",
    padding: "5rem",
    perPage: 3,
    perMove: 1,
    gap: 10,
    pagination: false,
    breakpoints: {
      1136: {
        perPage: 2,
        padding: "0",
        gap: 0,
      },
      680: {
        perPage: 1,
        padding: "0",
        gap: 0,
      },
    },
  }).mount();
  gsap.fromTo("#backdrop-header", { opacity: 0 }, { opacity: 1, delay: 0.25, duration: 1 });
  gsap.fromTo("#brand-name", { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.5, ease: "circ" });
  gsap.fromTo("#caption", { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 0.75, ease: "circ" });
  gsap.fromTo("#start-button", { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 1, ease: "circ" });
  gsap.fromTo("#hero-arrow-down", { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 1.25, ease: "circ" });
});
