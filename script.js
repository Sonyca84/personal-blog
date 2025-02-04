// Пример простого JavaScript
console.log("Блог успешно загружен!");

// Функция для добавления динамического контента
function addDynamicContent() {
    const main = document.querySelector("main");
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h3>Новая статья</h3>
        <p>Это динамически добавленная статья через JavaScript.</p>
    `;
    main.appendChild(newArticle);
}

// Вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", addDynamicContent);
