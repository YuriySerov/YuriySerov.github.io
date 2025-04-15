window.addEventListener("load", () => {
  // Прокручиваем страницу вверх после полной загрузки страницы
  setTimeout(() => {
    window.scrollTo(0, 0); // Прокручиваем в верхнюю часть
  }, 0); // Небольшая задержка, чтобы прокрутка произошла после рендеринга
});


let page = 1;
const container = document.getElementById("items");
const loading = document.getElementById("loading");



// Функция загрузки элементов
function loadItems() {
  loading.style.display = "block";

  setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
      const item = document.createElement("div");
      item.className = "item";
      item.textContent = `Элемент ${(page - 1) * 5 + i}`;
      container.appendChild(item);
    }
    loading.style.display = "none";
    page++;

  }, 100);

}

// Использование IntersectionObserver для подгрузки данных
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      // Проверяем, является ли элемент видимым
      if (entry.isIntersecting) {
        loadItems(); // Загружаем новые элементы
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,  // Понижаем threshold, чтобы наблюдатель срабатывал, когда элемент хотя бы наполовину виден
  }
);

// Наблюдение за элементом, который будет видимым в конце списка
observer.observe(document.getElementById("loadTrigger"));

// Начальная загрузка
loadItems(); // Загрузить первые элементы


