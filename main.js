'use strict';

const inputNumber = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');
const clue = document.querySelector('.js_clue');
const attempts = document.querySelector('.js_attempts');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const compareNumber = () => {
    const inputValue = inputNumber.value;
    if(inputValue > 100 || inputValue < 1 || isNaN(inputValue)){
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    }
    else if(inputValue > randomNumber){
        clue.innerHTML = "Demasiado alto.";
    } else if(inputValue < randomNumber){
        clue.innerHTML = "Demasiado bajo.";
    } else {
        clue.innerHTML = "¡¡¡Has ganado campeona!!!";
    }
};

let attemptsValue = 0;

function attemptsCount() {
    const totalAttempts = ++attemptsValue;
    attempts.innerHTML = totalAttempts;
}

function handleClick(e) {
    e.preventDefault();
    compareNumber();
    attemptsCount();
};


btn.addEventListener('click', handleClick);
