const userName = 'Иван';
const number1 = prompt(`${userName},введите первое число`);
console.log(number1, typeof number1)
const number2 = prompt(`${userName},введите второе число`);
console.log(number2, typeof number2)
const number3 = prompt(`${userName},введите третье число`);
console.log(number3, typeof number3)
const average = (+number1 + +number2 + +number3) / 3;
console.log(average)
alert(`среднее арифметичиское введенных вами чисел = ${average}`);