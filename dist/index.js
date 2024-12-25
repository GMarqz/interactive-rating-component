import renderTYPage from "./pages/thankYouPage.js";
const $form = document.getElementById("form");
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Listening");
    renderTYPage($form, 4);
});
