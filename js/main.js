/*--- STATE ---*/

let sum;


/*--- CACHE ---*/

const addEl = document.getElementById("add");
const subEl = document.getElementById("subtract");
const inputEl = document.querySelector("input");
const sumEl = document.querySelector("h1");


/*--- LISTENERS ---*/

addEl.addEventListener("click", addNum);
subEl.addEventListener("click", subNum);


/*--- FUNCTIONS ---*/

function init() {
    sum = 0;
    render();
}

function addNum() {
    if (sum === NaN) return;
    temp = parseInt(inputEl.value);
    if (temp === NaN) sum = NaN;
    else sum += temp;
    render();
}

function subNum() {
    if (sum === NaN) return;
    temp = parseInt(inputEl.value);
    if (temp === NaN) sum = NaN;
    else sum -= temp;
    render();
}

function render() {
    sumEl.textContent = sum;
    if (sum < 0) sumEl.style.color = "red";
    else sumEl.style.color = "black";
}

init();