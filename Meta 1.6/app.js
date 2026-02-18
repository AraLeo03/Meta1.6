// Datos simulados (luego vendrán de IndexedDB)
const articles = [
    { id: 1, title: "Análisis de Algoritmos", status: "En revisión" },
    { id: 2, title: "Arquitectura de Software", status: "Aceptado" },
    { id: 3, title: "Aplicaciones Web Progresivas", status: "En edición" },
    { id: 4, title: "Artículo con un título extremadamente largo para probar el comportamiento visual del tablero", status: "En revision"},
    { id: 4, title: "Artículo con cararteres @#$!&*()%", status: "En revision"}
];
    // const articles = [];

    // const articles = [
    // { id: 1, title: "Análisis de Algoritmos", status: "En revisión" }];

// Función principal para renderizar artículos
function renderArticles(articleList) {
    const board = document.getElementById("article-board");
    board.innerHTML = "";

    if (articleList.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No hay artículos disponibles.";
        board.appendChild(message);
        return;
    }

    articleList.forEach(article => {
        const card = document.createElement("div");
        card.className = "article-card";

        const title = document.createElement("span");
        title.className = "article-title";
        title.textContent = article.title;

        const status = document.createElement("span");
        status.className = "article-status";
        status.textContent = article.status;

        card.appendChild(title);
        card.appendChild(status);

        board.appendChild(card);
    });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderArticles(articles);
});

function testResponsive() {
    const width = window.innerWidth;

    if (width <= 600) {
        console.log("Prueba responsiva: MODO MÓVIL OK");
    } else {
        console.log("Prueba responsiva: MODO ESCRITORIO OK");
    }
}

window.addEventListener("resize", testResponsive);
window.addEventListener("load", testResponsive);
