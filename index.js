function max(inputArr) {
    let max = inputArr[0];
    console.log(inputArr);
    for (let index = 1; index < inputArr.length; index++) {
        console.log(inputArr[index], max)
    
        if (inputArr[index] > max) {
            max = inputArr[index];
        }
        console.log('current max - '+max)
    // }

    let index = 1;
    while (index < inputArr.length) {
        console.log(inputArr[index], max)

        if (inputArr[index] > max) {
            max = inputArr[index];
        }
        console.log('current max - '+max)
        index++
    }

    return max
}
}



let array = [2, 4, 36, 20, 3];

console.log('Max = '+ max(array))


let i = 0;
while (i < array.length) {
    console.log(array[i])

    i++;
}
console.log('');
i = 0;
do {
    console.log(array[i])

    i++;
} while (i < array.length)

console.log('');

console.log('');

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log('');
let input;
do {
} while (!(input = prompt('Enter something')));

console.log(input);


console.log('');

let inputFor = '';
for (;!(inputFor = prompt('Enter something'));) {

}

console.log(inputFor)

let dollar = 39;
for (let i = 10; i<=100; i+=10){
    console.log(i);
    console.log(i*dollar);
}

