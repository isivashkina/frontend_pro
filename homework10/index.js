const products = [
    ['apple', 10],
    ['banana', 8],
    ['mango', 20],
    ['grape', 18]
]

console.log(
    getPrice(products),
    getPrice(products, summerValue),
    getPrice(products, winterValue)
);

function getPrice(products, seasonFunc) {
    let sumProduct = 0;
    for (let i = 0; i < products.length; i++) {
        sumProduct += typeof seasonFunc === `function` ? seasonFunc(products[i][1]) : products[i][1];
    }
    return sumProduct;
}

function summerValue(value) {
    return value * 0.8;
}
function winterValue(value) {
    return value * 2;
}


