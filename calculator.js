

let displayNum = "";
let a = 0;
let b = 0;
let c = 0;
let operatorType;

const display = document.querySelector(".display-text");
const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator-button");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

clear.addEventListener('click', () =>{
    a = 0;
    b = 0;
    c = 0;
    displayNum = "";
    display.textContent = displayNum;
    console.log("cleared display");
})

numbers.forEach(number => {
    number.addEventListener('click', () => {updateDisplay(number.id)});
});

function updateDisplay(number){
    
    if (displayNum.length < 11){
        displayNum += number;
        display.textContent = displayNum;
        console.log("updated display");
    }
    
}

operators.forEach(operator => {
    operator.addEventListener('click', function setFirst(){
        a = parseFloat(displayNum);
        operatorType = operator.id;
        displayNum = "";
        display.textContent = displayNum;
        console.log(operatorType);
    })
});

equal.addEventListener('click', () =>{

    b = parseFloat(displayNum);

    if (operatorType === "plus"){
        c = a + b;
    }
    else if (operatorType === "subtract"){
        c = a - b;
    }
    else if (operatorType === "divide"){
        c = a / b;
    }
    else if (operatorType === "multiply"){
        c = a * b;
    }

    if (c < 99999999999){
    displayNum = Math.round(c * 100) / 100;
    display.textContent = displayNum;
    console.log("calculated");
    }
})
