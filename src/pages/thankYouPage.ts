export default function renderTYPage(formElement: HTMLFormElement, rateValue: string): HTMLDivElement {
    formElement.remove();

    const $card = document.getElementById("card") as HTMLDivElement;
    $card.className = "thank-you-card card d-flex flex-direction-col justify-content-center align-items-center";

    const $iconStarContainer = document.querySelector(".icon-star-container") as HTMLDivElement;
    $iconStarContainer.className = "thank-you-img-container";

    const $iconStar = document.querySelector(".icon-star") as HTMLImageElement;
    $iconStar.src = "../src/images/illustration-thank-you.svg";
    $iconStar.className = "thank-you-img";

    const $cardBody = document.querySelector(".card-body") as HTMLDivElement;
    $cardBody.classList.add("align-items-center", "justify-content-center");

    const $cardTitle = document.querySelector(".card-title") as HTMLHeadingElement;
    $cardTitle.textContent = "Thank you!";

    const $cardText = document.querySelector(".card-text") as HTMLParagraphElement;
    $cardText.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    $cardText.classList.add("text-center");

    const $rateValue = selectedValueDisplay($card, rateValue);
    $card.insertBefore($rateValue, $cardBody);


    return $card;
}

function selectedValueDisplay(parentElement: HTMLDivElement, rateValue: string): HTMLDivElement {
    const $container = document.createElement("div") as HTMLDivElement;
    $container.className = "rate-value-container text-center";
    const $rateValueText = document.createElement("p") as HTMLParagraphElement;
    $rateValueText.className = "rate-value-text";
    $rateValueText.textContent = `You selected ${rateValue} out of 5`;

    parentElement.appendChild($container);
    $container.appendChild($rateValueText);

    return $container;
}
