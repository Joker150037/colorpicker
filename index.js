let btn = document.querySelector('.btn');

let container = document.querySelector('.container');
let choiceMethod = document.querySelectorAll('.nav-item');
let simple = true;
let hex = false;
let simpleText = document.querySelector('.simple');
let hexText = document.querySelector('.hex');
let stringHex = "1234567890abcdefABCDEF";
let stringSimple = ['red', 'blue', 'green', 'tomato', 'grey',]
let variety = ['hex', 'normal', 'rgba'];
let value = document.querySelector('.value');



choiceMethod.forEach(item => item.addEventListener('click', function (event) {
    if (event.target.classList.contains('hex')) {
        simple = false;
        hex = true
        hexText.style.color = '#49A6E9';
        simpleText.style.color = 'black';
    } else if (event.target.classList.contains('simple')) {
        simple = true;
        hex = false
        hexText.style.color = 'black';
        simpleText.style.color = '#49A6E9';
    }
}))
btn.addEventListener('click', function () {
    if (hex == true) {
        hexFunction();
    } else if (simple == true) {
        let indexForVariety = Math.floor(Math.random() * 3);
        console.log(variety[indexForVariety])
        if (variety[indexForVariety] == 'hex') {
            hexFunction();
        } else if (variety[indexForVariety] == 'normal') {
            normalFunction();
        } else if (variety[indexForVariety] == 'rgba') {
            rgbaFunction();
        }
    }
})
function hexFunction() {
    let randomHex = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 22);
        randomHex += stringHex[index];
    }
    value.textContent = randomHex;
    btn.style.backgroundColor = randomHex;
    container.style.backgroundColor = randomHex;
}
function normalFunction() {
    let index = Math.floor(Math.random() * stringSimple.length);
    randomNormal = stringSimple[index];
    value.textContent = randomNormal;
    btn.style.backgroundColor = randomNormal;
    container.style.backgroundColor = randomNormal;
}
function rgbaFunction() {

    let randomRgba = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.random().toFixed(1)})`;
    value.textContent = randomRgba;
    btn.style.backgroundColor = randomRgba;
    container.style.backgroundColor = randomRgba;
}