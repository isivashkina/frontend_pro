// // function max(inputArr) {
// //     let max = inputArr[0];
// //     console.log(inputArr);
// //     for (let index = 1; index < inputArr.length; index++) {
// //         console.log(inputArr[index], max)

// //         if (inputArr[index] > max) {
// //             max = inputArr[index];
// //         }
// //         console.log('current max - '+max)
// //     // }

// //     let index = 1;
// //     while (index < inputArr.length) {
// //         console.log(inputArr[index], max)

// //         if (inputArr[index] > max) {
// //             max = inputArr[index];
// //         }
// //         console.log('current max - '+max)
// //         index++
// //     }

// //     return max
// // }
// // }



// // let array = [2, 4, 36, 20, 3];

// // console.log('Max = '+ max(array))


// // let i = 0;
// // while (i < array.length) {
// //     console.log(array[i])

// //     i++;
// // }
// // console.log('');
// // i = 0;
// // do {
// //     console.log(array[i])

// //     i++;
// // } while (i < array.length)

// // console.log('');

// // console.log('');

// // for (let i = 0; i < array.length; i++) {
// //     console.log(array[i])
// // }

// // console.log('');
// // let input;
// // do {
// // } while (!(input = prompt('Enter something')));

// // console.log(input);


// // console.log('');

// // let inputFor = '';
// // for (;!(inputFor = prompt('Enter something'));) {

// // }

// // console.log(inputFor)

// // let dollar = 39;
// // for (let i = 10; i<=100; i+=10){
// //     console.log(i);
// //     console.log(i*dollar);
// // }



// const block = document.querySelector(`.block`);
// console.dir(block);


// console.log(block.creatElement);

// block.dataset.cat = 124;

// console.log(block.dataset.cat);

// let btn = document.createElement(`button`); //создает тег
// btn.innerHTML = `Click me`;

// console.dir(btn);

// block.append(btn); //добавляет тег 

// btn.remove();  //удаляется єлемент

// // block.onclick = function (event) {
// //     console.log(event);
// //     event.target.style.background = `green`;
// //     block.style.background = `blue`;
// // }
// const circle = document.querySelector(`.circle`);    
// // function blockClick(event) {
// //     event.target.style.background = `green`;
// // }

// // block.onclick = blockClick;
// // circle.onclick = blockClick;

// // function Click(event, colol) {
// //     event.target.style.background = colol;
// // }

// // block.onclick = function (e) {
// //     Click(e, `green`);
// // }

// // circle.onclick = e => Click(e, `blue`);

// block.addEventListener(`click`, event => event.target.style.background = `green`);

const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

let currency;

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}

console.log(Object.keys(bankData));