const buttons = document.querySelectorAll(".BB");
const display = document.getElementById("display");
const B2 = document.querySelectorAll(".B2");
const equalButton = document.querySelector(".B_Eq");

// Нажатие на цифры
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

// Нажатие на знаки (+, -, *, /, .)
B2.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

// Нажатие на знак равно =
equalButton.addEventListener('click', () => {
    caliculator();
});

// Функция вычисления
function caliculator() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
    }
}

// Очистка экрана
function clearDisplay() {
    display.value = "";
}