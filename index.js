const number1 = parseInt ( prompt('Enter the first number'));
const operator = prompt('Enter operator (+, -, *, /)');
const number2 = parseInt ( prompt('Enter the second number'));

let result = 0;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;
} else if (operator == '/') {
    result = number1 / number2;
}
alert (number1 + operator + number2 + ' = ' + result);

let x = confirm('Do you want to enter another?');
if (x == true) {
const number1 = parseInt ( prompt('Enter the first number'));
const operator = prompt('Enter operator (+, -, *, /)');
const number2 = parseInt ( prompt('Enter the second number'));

let result = 0;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;
} else if (operator == '/') {
    result = number1 / number2;
}
alert (number1 + operator + number2 + ' = ' + result);
}