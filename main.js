
// Завдання 1

const fn1 = () => { console.log("Hello World") };

// Завдання 2

const result1 = document.querySelector("#guessResult")

const guessNumberField = document.querySelector("#guessField");

function checkGuess(num) {
    let guessedNum = 0;
    guessedNum = Math.floor(Math.random() * 100) + 1;
    if (num === guessedNum) {
        guessNumberField.textContent = "";
        result1.textContent = "Ви вгадали число"
    } else {
        guessNumberField.textContent = "";
        result1.textContent = "Ви не вгадали число"
    }
}

// Завдання 3

const body = document.body;

let clicksOnSite = 0;

body.addEventListener("click", () => { clicksOnSite += 1 })

function checkClicks() {
    console.log(`Всього ви зробили ${clicksOnSite} кліків`);
}

// Завдання 4

function applyCallbackOnEachElement(array, callback) {
    return callback(array);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const callbackFn = (array) => {
    let modifiedNumbers = [];

    for (const num of array) {
        modifiedNumbers.push(num * 5);
    }

    return modifiedNumbers
}

const result2 = applyCallbackOnEachElement(numbers, callbackFn);

console.log("modified numbers :>>>", result2);

// Завдання 5

const price = 192;

const discount = 20;

function getDiscountedPrice(price, discount) {
    return (discount / 100) * price;
}

const discountHandler = (discountedPrice) => {
    console.log(`Вартість товару: ${price} гривень. Вартість товару зі знижкою: ${parseInt(price - discountedPrice)} гривень.`)
}

discountHandler(getDiscountedPrice(price, discount))
