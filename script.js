"use strict";

const submitBtn = document.querySelector(".face__submit");
const resultsPar = document.querySelector(".back__user-selected");
const faceCont = document.querySelector(".wrapper__inner_face");
const backCont = document.querySelector(".wrapper__inner_back");

submitBtn.onclick = showResults;

function showResults() {
    const checkedRadio = document.querySelector("input[name=face__radio]:checked");
    if (!!checkedRadio) {
        resultsPar.innerHTML = `You selected ${checkedRadio.id.slice(-1)} out of 5`;
        faceCont.style.display = "none";
        backCont.style.display = "flex";
    }
}