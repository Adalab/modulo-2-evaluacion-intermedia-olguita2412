'use strict';

const inputNumber = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');
const clue = document.querySelector('.js_clue');
const attempts = document.querySelector('.js_attempts');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

const compareNumber = () => {
    const randomNumber = getRandomNumber(100);
    const inputValue = inputNumber.value;
    if(inputValue > 100 || inputValue < 1){
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if(inputValue > randomNumber){
        clue.innerHTML = "Demasiado alto.";
    } else if(inputValue < randomNumber){
        clue.innerHTML = "Demasiado bajo.";
    } else {
        clue.innerHTML = "Has ganado campeona!!!";
    }
    console.log(randomNumber);
}


function handleClick(e) {
    e.preventDefault();
    compareNumber();
}


btn.addEventListener('click', handleClick);