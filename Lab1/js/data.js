const hour = new Date().getHours();

const headerParagraph = document.querySelector("#header");

if (hour >= 4 && hour <= 11) {
    headerParagraph.textContent = "Bună dimineața! Bine ai venit pe pagina mea.";
} else if (hour >= 12 && hour <= 17) {
    headerParagraph.textContent = "Bună ziua! Bine ai venit pe pagina mea.";
} else {
    headerParagraph.textContent = "Bună seara! Bine ai venit pe pagina mea.";
}