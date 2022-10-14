let square = document.querySelector('.square');

square.style.left = 0;
square.style.top = 0;

const STEP = 10;

function BEMS(){
    square.innerHTML = `БЕМС`;
    setTimeout(() => square.innerHTML = ``, 2000);
}

const muvingRight = () => {
    let RightPos = square.offsetLeft + STEP;
    let bodyWidth = document.body.offsetWidth - square.clientWidth;

    if (RightPos >= bodyWidth) {
        square.style.left = `${parseInt(square.style.left) - (STEP * 2)}px`;
        BEMS();
    } else {
        square.style.left = `${parseInt(square.style.left) + STEP}px`;
    }
}

const muvingLeft = () => {
    let LeftPos = square.offsetLeft - STEP;

    if (LeftPos <= 0) {
        square.style.left = `${parseInt(square.style.left) + (STEP * 2)}px`;
        BEMS();
    } else {
        square.style.left = `${parseInt(square.style.left) - STEP}px`;
    }
}

const muvingUp = () => {
    let TopPos = square.offsetTop - STEP;
    console.log(TopPos);

    if (TopPos <= 0) {
        square.style.top = `${parseInt(square.style.top) + (STEP * 2)}px`;
        BEMS();
    } else {
        square.style.top = `${parseInt(square.style.top) - STEP}px`;
    }
    
}

const muvingDown = () => {
    let DownPos = square.offsetTop + STEP;
    let bodyHeight = document.body.offsetHeight - square.clientHeight;

        if (DownPos >= bodyHeight) {
            square.style.top = `${parseInt(square.style.top) - (STEP * 2)}px`;
            BEMS();
        } else {
            square.style.top = `${parseInt(square.style.top) + STEP}px`;
        }
}


const muvingSpace = () => {
    square.classList.add(`space`);
    setTimeout(() => square.classList.remove(`space`), 500);
}

const muvingCTRL = () => {
    square.classList.add(`ctrl`);
    setTimeout(() => square.classList.remove(`ctrl`), 700);
}

const ACTIONS = {
    17: muvingCTRL,
    32: muvingSpace,
    37: muvingLeft,
    38: muvingUp,
    39: muvingRight,
    40: muvingDown
}

document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());