export default function renderTYPage(formElement, rateValue) {
    formElement.remove();
    const $card = document.getElementById("card");
    $card.className = "thank-you-card card";
    const $iconStarContainer = document.querySelector(".icon-star-container");
    $iconStarContainer.className = "thank-you-img-container";
    const $iconStar = document.querySelector(".icon-star");
    $iconStar.src = "../src/images/illustration-thank-you.svg";
    $iconStar.className = "thank-you-img";
    const $cardBody = document.querySelector(".card-body");
    $cardBody.classList.add("ai-center", "jc-center");
    const $cardTitle = document.querySelector(".card-title");
    $cardTitle.textContent = "Thank you!";
    const $cardText = document.querySelector(".card-text");
    $cardText.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    $cardText.classList.add("text-center");
    const $rateValue = selectedValueDisplay($card, rateValue);
    $card.insertBefore($rateValue, $cardBody);
    return $card;
}
function selectedValueDisplay(parentElement, rateValue) {
    const $container = document.createElement("div");
    const $rateValueText = document.createElement("p");
    $rateValueText.className = "rate-value-text";
    $rateValueText.textContent = `You selected ${rateValue} out of 5`;
    parentElement.appendChild($container);
    $container.appendChild($rateValueText);
    return $container;
}
