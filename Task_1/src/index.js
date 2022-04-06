'use strict';

const { DummyText } = require("./components/DummyText");
const { RadioButtons } = require("./components/RadioButtons");

const myFonts = document.getElementById('nav-btn__my-fonts');
const buyFonts = document.getElementById('nav-btn__buy-fonts');
const mainContainer = document.querySelector('.main-container');

const isButtonActive = "navigation__button_is--active";
const isButtonInactive = "navigation__button_is--inactive";

const dummyText = `<h1>Lorem ipsum</h1>`;
const radioBtns = `<h2>RADIO BUTTONS</h2>`;

const toggleActiveClass = () => {
  const isMyFontsActive = Array.from(myFonts.classList).includes(isButtonActive);



  if (isMyFontsActive) {
    buyFonts.classList.add(isButtonActive);
    myFonts.classList.remove(isButtonActive);

    mainContainer.innerHTML = DummyText;
    return;
  } else {

    myFonts.classList.add(isButtonActive);
    buyFonts.classList.remove(isButtonActive);
    mainContainer.innerHTML = RadioButtons;
  }


}

window.onload = () => {

  console.log('RUNNING!');
  console.log("dummy: ", DummyText);

  myFonts.addEventListener("click", e => {
    const isAlreadySelected = Array.from(e.target.classList).includes(isButtonActive);

    if (isAlreadySelected) return;
    toggleActiveClass();
  })

  buyFonts.addEventListener("click", e => {
    const isAlreadySelected = Array.from(e.target.classList).includes(isButtonActive);

    if (isAlreadySelected) return;

    toggleActiveClass();
  })

}