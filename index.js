//https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
//Link acima talvez ajude

function submitEvent(rateResult) {
    const $submitBtn = document.getElementById("submit-btn");
    const $card = document.querySelector(".card");

    $submitBtn.addEventListener("click", (e) => {
        console.log(`Your final rate is: ${rateResult}`);
        removeAndAddElements($submitBtn, rateResult, $card);
        updateImg($card);
        updateCardContentAndChangeItsClassName();
    });  
}

function removeAndAddElements(btn, rate, parentElement) {
    // let callFunction = true;
    // if(callFunction === true) {
        const $fieldset = document.getElementById("fieldset");
        if($fieldset && btn){
            $fieldset.remove();
            btn.remove();
        } else {
            console.log("Clearing all instances of this function.")
        }
    
        let $rateResultDiv;
        if($rateResultDiv === undefined){
            parentElement.className = `${parentElement.classList} ai-center`;
        
            $rateResultDiv = document.createElement("DIV");
            $rateResultDiv.className = "result d-flex jc-center";
            const $rateResultDivContent = document.createElement("P");
            $rateResultDiv.appendChild($rateResultDivContent);
            $rateResultDivContent.className = "result-text";
            $rateResultDivContent.textContent = `You selected ${rate} out of 5`
        
            const $cardBody = document.querySelector(".card-body");
            parentElement.insertBefore($rateResultDiv, $cardBody); 
        } else if($rateResultDiv !== undefined){
            console.log("Job done, uncalling create methods.");
        } else {
            console.log("Unexpected error.");
        }
    //     callFunction = false;
    //     return callFunction;
    // } else {
    //     console.log("This statment was added because this function is called everytime you click on a number which return some errors in the console since fieldset and submit-btn are both already removed.")
    // }
}

function updateCardContentAndChangeItsClassName() {
    const newTitle = "Thank you!";
    const newParagraph = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    const $cardTitle = document.querySelector(".card-title");
    const $cardText = document.querySelector(".card-text");
    
    $cardTitle.textContent = newTitle;
    $cardText.textContent = newParagraph;
}

function updateImg() {
    const $iconStarContainer = document.querySelector(".icon-star-container");
    const $iconStar = document.querySelector(".icon-star");
    
    const $illustrationThankYou = document.createElement("IMG");
    
    $illustrationThankYou.setAttribute("src", "./images/illustration-thank-you.svg");
    $illustrationThankYou.className = "thank-you-img";
    $illustrationThankYou.setAttribute("aria-hidden", "true");

    $iconStar.replaceWith($illustrationThankYou);
    $iconStarContainer.appendChild($illustrationThankYou);
}

function selectRate() {
    const $allRateNumbers = document.querySelectorAll(".radio");
    for(const $radio of $allRateNumbers) {
        $radio.addEventListener("click", (e) => {
            const $radioText = $radio.firstElementChild.textContent; 
            console.log($radioText);
            let selectedRadio = [];
            if(selectedRadio[0] === undefined) {
                selectedRadio.push($radioText);
                console.log(selectedRadio);
                const rate = selectedRadio[0];
                submitEvent(rate);
            
            // } else if(selectedRadio === '1' || '2' || '3' || '4' || '5') {
            //     selectedRadio.splice(0, 1, $radioText);
            //     console.log(selectedRadio);
            //     const rate = selectedRadio[0];
            //     submitEvent(rate);
            } else {
                console.log("Unexpected error.")
            }
        })
    }
}

const results = selectRate();
