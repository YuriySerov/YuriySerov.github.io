document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const trigger = document.getElementById("loadTrigger");
  const scrollBtn = document.getElementById("scrollToTopBtn");

  const originalDrinks = Array.from(document.querySelectorAll(".drink-category"));

  function cloneDrinkBlocks() {
    originalDrinks.forEach(drink => {
      const clone = drink.cloneNode(true);
      container.insertBefore(clone, trigger);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cloneDrinkBlocks();
      }
    });
  }, {
    threshold: 0.1,
  });

  observer.observe(trigger);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
