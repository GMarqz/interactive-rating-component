import renderTYPage from "./pages/thankYouPage.js";

const $form = document.getElementById("form") as HTMLFormElement;

$form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const $selectedValue = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;

    if($selectedValue) {
        console.log(`You selected ${$selectedValue.value}`);
    }
    renderTYPage($form, $selectedValue.value);
});
