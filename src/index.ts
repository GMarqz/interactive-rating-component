import renderTYPage from "./pages/thankYouPage.js";

const $form = document.getElementById("form") as HTMLFormElement;

$form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log("Listening");
    renderTYPage($form, 4);
})