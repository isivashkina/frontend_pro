const originalNumber = `10369`;
let number = originalNumber
console.log(number[4]);
console.log(number[3]);
console.log(number[2]);
console.log(number[1]);
console.log(number[0]);
// number = number.replace(`10369`, `1 0 3 6 9`);
console.log(number);
const num1 = number%10;
console.log(num1);
const num2 = (number = ((number - num1)/10))%10;
console.log(num2);
const num3 = (number = ((number - num2)/10))%10;
console.log(num3);
const num4 = (number = ((number - num3)/10))%10;
console.log(num4);
const num5 = (number = ((number - num4)/10))%10;

// show with spaces
console.log(num5);
number = `${num5} ${num4} ${num3} ${num2} ${num1}`
console.log(number);
const number1 = `${originalNumber[0]} ${originalNumber[1]} ${originalNumber[2]} ${originalNumber[3]} ${originalNumber[4]}`;
console.log(number1);

// const num1 = number%10;
// console.log(num1);
// const num2 = (((number - num1)/10))%10;
// console.log(num2);
// const num3 = (((number - num1)/10-num2)/10)%10;
// console.log(num3);
// const num4 = (((((number - num1)/10)-num2)/10-num3)/10)%10;
// console.log(num4);
// const num5 = ((((((number - num1)/10)-num2)/10-num3)/10-num4)/10)%10;
// console.log(num5);