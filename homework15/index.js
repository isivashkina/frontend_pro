let block = document.querySelector(`.block`);

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
    let colors = [];
    for (let i = 0; i <= 2; i++) {
        colors.push(getRandom(0, 255));
    }
    return `rgb(${colors.join(`,`)})`;
}

setInterval(() => block.style.backgroundColor = getRandomColor(), 500);

block.style.top = 0;
block.style.left = 0;

const blockMoving = setInterval(() => {

    let bodyWidth = document.body.offsetWidth - block.clientWidth;
    let bodyHeight = document.body.offsetHeight - block.clientHeight;

    block.style.left = `${getRandom(0, bodyWidth)}px`;
    block.style.top = `${getRandom(0, bodyHeight)}px`;

}, 1000);
