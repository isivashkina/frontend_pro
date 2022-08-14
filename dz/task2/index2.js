const number1 = prompt('введите первое число');
const number2 = prompt('введите второе число');
const operator = prompt('введите оператор(+ , - , / , *)');
const calculatorHandler = (operatorValue) => {
    
    if(operator === '+') {
        return +number1 + +number2;
    } else if (operator === '-') {
        return +number1 - +number2;
    } else if (operator === '/') {
        return +number1 / +number2;
    } else if (operator === '*') {
        return +number1 * +number2;
    } else {
        return;
    }
}
console.log(number1);
console.log(number2);
console.log(operator);
console.log(calculatorHandler(operator));
alert(`${number1} ${operator} ${number2} = ${calculatorHandler(operator)}`);


