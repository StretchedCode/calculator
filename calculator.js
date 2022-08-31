

let displayNum = "";
const display = document.querySelector(".display-text");
const numbers = document.querySelectorAll(".number-button");

numbers.forEach(number => {
    number.addEventListener('click', () => {updateDisplay(number.id)});
});

function updateDisplay(number){
    
    if (displayNum.length < 11){
        displayNum += number;
        display.textContent = displayNum;
    }
    
}