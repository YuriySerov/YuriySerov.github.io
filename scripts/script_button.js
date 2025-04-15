// Получаем элемент кнопки
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Функция для отображения кнопки при прокрутке
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block'; // Показываем кнопку
    } else {
        scrollToTopBtn.style.display = 'none'; // Скрываем кнопку
    }
};

// Функция для прокрутки страницы наверх при клике
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
