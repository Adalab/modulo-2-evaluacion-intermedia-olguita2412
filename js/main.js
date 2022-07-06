'use strict';

const inputNumber = document.querySelector('.js_input');
const btn = document.querySelector('.js_button');
const clue = document.querySelector('.js_clue');
const attempts = document.querySelector('.js_attempts');
let attemptsValue = 0;
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

console.log(randomNumber);

function writeTip(message) {
    clue.innerHTML = message;
};

function isNumber () {
    const inputValue = parseInt(inputNumber.value);
    if (isNaN(inputValue) || inputValue === ''){
        writeTip("Introduce un número");
    } else {
        compareNumber();
    }
}

const compareNumber = () => {
    const inputValue = parseInt(inputNumber.value);
    if(inputValue > 100 || inputValue < 1){
       writeTip("El número debe estar entre 1 y 100.");
    }
    else if(inputValue > randomNumber){
        writeTip("Demasiado alto.");
    } else if(inputValue < randomNumber){
        writeTip("Demasiado bajo.");
    } else {
        writeTip("¡¡¡Has ganado campeona!!!");
    }
};

function attemptsCount() {
    attemptsValue = ++attemptsValue;
    attempts.innerHTML = attemptsValue;
}

function handleClick(e) {
    e.preventDefault();
    isNumber();
    attemptsCount();
};

function handleEnter (event) {
    if(event.code === 'Enter'){
        handleClick();
    }
}

btn.addEventListener('click', handleClick);
btn.addEventListener('keyup', handleEnter);
