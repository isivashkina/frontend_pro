let hamburgerPrice = 10,
    cheeseburgerPrice = 15,
    doubleCheesePrice = 5,
    potatoSmallPrice = 10,
    potatoMiddlePrice = 15,
    potatoBigPrice = 20,
    ketchupPrice = 2,
    mayonnaisePrice = 3,
    totalPrice = 0,
    isDoubleCheese = false,
    isPotato = false,
    isSause = false,

    bulka = prompt(`Would you like hamburger or cheeseburger?`);

if (bulka === `cheeseburger`) {
   totalPrice = totalPrice + cheeseburgerPrice
    doubleCheese = prompt(`Would you like to add double cheese?`)
    if (doubleCheese !== null) {
        totalPrice = totalPrice + doubleCheesePrice;
        isDoubleCheese = true;
    }
} else {
    totalPrice = totalPrice + hamburgerPrice;
    bulka = 'hamburger';
}

potato = prompt(`Would you like potato?`)
    if (potato !== null) {
        sizePotato = prompt(`Choose potato size: small/middle/big`)
        if (sizePotato === `middle`) {
            totalPrice = totalPrice + potatoMiddlePrice
        } else if (sizePotato === `big`) {
            totalPrice = totalPrice + potatoBigPrice
        } else {
            totalPrice = totalPrice + potatoSmallPrice
            sizePotato = 'small'
        }
        isPotato = true;
    }

sause = prompt(`Would you like sauce?`)
    if (sause !== null) {
        sauseChoise = prompt(`Choose sauce: ketchup/mayonnaise`)
        if (sauseChoise === 'mayonnaise') {
            totalPrice = totalPrice + mayonnaisePrice
        } else {
            totalPrice = totalPrice + ketchupPrice
            sauseChoise = 'ketchup'
        }
        isSause = true;
    }

console.log(totalPrice);

document.write(`<h2>Your order:</h2>`);
document.write(`<li>Bulka 🍔: ${bulka} </li>`);
if (isDoubleCheese) {
    document.write(`<li>Double cheese</li>`);
}
if (isPotato) {
    document.write(`<li>Potato 🍟: ${sizePotato} </li>`);
}
if(isSause) {
    document.write(`<li>Sauce 🧂: ${sauseChoise} </li>`);
}
document.write(`<p>Price: ${totalPrice}$ </p>`);


