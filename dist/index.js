import renderTYPage from "./pages/thankYouPage.js";
const $form = document.getElementById("form");
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $selectedValue = document.querySelector('input[type="radio"]:checked');
    if ($selectedValue) {
        console.log(`You selected ${$selectedValue.value}`);
    }
    renderTYPage($form, $selectedValue.value);
});
