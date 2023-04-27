"use strict";

const sbmt = document.querySelector(".wrapper-face__form-submit");
const resultTo = document.querySelector(".wrapper-back__selected");
const faceCard = document.querySelector(".wrapper-face");
const backCard = document.querySelector(".wrapper-back");
const inputs = document.querySelectorAll(".wrapper-face__form-input");

inputs.forEach((e) => {
    e.addEventListener("change", () => {
        sbmt.removeAttribute("disabled");
    }, { once: true });
})

sbmt.onclick = showBackCard;

function showBackCard() {
    let rating = faceCard.querySelector(".wrapper-face__form-input:checked").previousSibling.nodeValue.trim();

    resultTo.textContent = resultTo.textContent.replace("*", rating);
    
    faceCard.onanimationend = () => {
        faceCard.style.display = "none";
        backCard.style.display = "flex";
        backCard.classList.add("wrapper-back--activated");
    }

    faceCard.classList.add("wrapper-face--deactivated");
}