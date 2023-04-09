"use strict";

const form = document.querySelector(".rating-form");
form.addEventListener("submit", showResults);

function showResults(e) {
    e.preventDefault();

    const checked = document.querySelector("input[name=rating]:checked");
    const parent = checked.parentElement;
    const value = parent.getElementsByTagName("label")[0].innerHTML;
    const toreplace = document.querySelector(".user-selected");
    const form = document.querySelector(".card");
    const resultBlock = document.querySelector(".other-side");

    toreplace.innerHTML = `You selected ${value} out of 5`;
    resultBlock.style.display = "flex";
    form.style.display = "none";
}