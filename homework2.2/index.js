let hamburgerPrice = 10,
    cheeseburgerPrice = 15,
    doubleCheesePrice = 5,
    potatoSmallPrice = 10,
    potatoMiddlePrice = 15,
    potatoBigPrice = 20,
    ketchupPrice = 2,
    mayonnaisePrice = 3,
    totalPrice = 0,
    orderList = '',
    text = `<h2>Your order:</h2>
	<ul><order list></ul>
	<p>Price: $<Фінальна ціна> </p>`,

    bulka = prompt(`Would you like hamburger or cheeseburger?`);
    
if (bulka === `cheeseburger`){
   totalPrice = totalPrice + cheeseburgerPrice
    doubleCheese = prompt(`Would you like to add double cheese?`)
    if (doubleCheese !== null) {
        totalPrice = totalPrice + doubleCheesePrice
    } 
    orderList += '<li>Bulka 🍔: cheeseburger</li>'
}else {
    totalPrice = totalPrice + hamburgerPrice
    orderList += '<li>Bulka 🍔: hamburged</li>'
}
potato = prompt(`Would you like potato?`)
    if (potato !== null) {
        sizePotato = prompt(`Choose potato size: small/middle/big`)
        if (sizePotato === `middle`) {
            totalPrice = totalPrice + potatoMiddlePrice
            orderList += '<li>Potato 🍟: middle </li>'
        } else if (sizePotato === `big`) {
            totalPrice = totalPrice + potatoBigPrice
            orderList += '<li>Potato 🍟: big </li>'
        } else {
            totalPrice = totalPrice + potatoSmallPrice
            orderList += '<li>Potato 🍟: small </li>'
        }
    }
sause = prompt(`Would you like sauce?`)
    if (sause !== null){
        sauseChoise = prompt(`Choose sauce: ketchup/mayonnaise`)
        if (sauseChoise === 'mayonnaise'){
            totalPrice = totalPrice + mayonnaisePrice
            orderList += '<li>Sauce 🧂: mayonnaise </li>'
        } else {
            totalPrice = totalPrice + ketchupPrice
            orderList += '<li>Sauce 🧂: ketchup </li>'
        }
    }
console.log(totalPrice)

document.write(
    text.replace('<order list>', orderList)
        .replace('<Фінальна ціна>', totalPrice)
)
  

