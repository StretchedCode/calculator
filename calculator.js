

let displayNum = "";
let a = 0;
let b = 0;
let operatorType;
const display = document.querySelector(".display-text");
const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator-button");
const equal = document.querySelector("#equal");

numbers.forEach(number => {
    number.addEventListener('click', () => {updateDisplay(number.id)});
});

function updateDisplay(number){
    
    if (displayNum.length < 11){
        displayNum += number;
        display.textContent = displayNum;
    }
    
}

operators.forEach(operator => {
    operator.addEventListener('click', function setFirst(){
        a = parseInt(displayNum);
        operatorType = operator.id;
        displayNum = "";
        display.textContent = displayNum;
    })
});

equal.addEventListener('click', () =>{

    b = parseInt(displayNum);

})