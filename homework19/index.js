const userData = {
    USD: 1000,
    EUR: 900,
    UAH: 15000,
    BIF: 20000,
    AOA: 100
};

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

let getMany = new Promise((resolve, reject) => {
    let balans = confirm(`Подивитися баланс карті?`)
    balans ? resolve() : reject();
    
})

    .then(
        (resolve) => {
            
            let currency;
            do {

                currency = prompt(`Введіть валюту`);
                if (currency) {
                    currency = currency.replaceAll(' ', '').toUpperCase();

                    if (Object.keys(userData).indexOf(currency) > -1) {

                        console.log(`Баланс становить: ${userData[currency]} ${currency}`);
                    }
                }

                
            } while (!(Object.keys(userData).indexOf(currency) > -1));

        }
     
)
    .catch(
        (reject) => {
            let getCurrency;
            let getSum;
            let currencyTrue = false;
            do {

                getCurrency = prompt(`Введіть валюту яку хочете зняти`);
                if (getCurrency) {
                    getCurrency = getCurrency.replaceAll(' ', '').toUpperCase();

                    currencyTrue = (Object.keys(userData).indexOf(getCurrency) > -1
                        && Object.keys(bankData).indexOf(getCurrency) > -1
                        && bankData[getCurrency].max !== 0)

                    if (currencyTrue) {

                        do {
                            getSum = prompt(`Введіть суму для зняття готівки`);
                            if (getSum) {
                                getSum = getSum.replaceAll(' ', '');
                                if (!isNaN(getSum)) {
                                    if (getSum > userData[getCurrency] || getSum > bankData[getCurrency].max) {
                                        let admissibleSum = Math.min(userData[getCurrency], bankData[getCurrency].max)
                                        console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${admissibleSum} ${getCurrency} `)
                                    } else if (getSum < bankData[getCurrency].min) {
                                        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${bankData[getCurrency].min} ${getCurrency}`)
                                    } else console.log(`Ваші гроші ${getSum} ${getCurrency} ${bankData[getCurrency].img}`)
                                }
                            }
                       
                        } while (!(getSum && getSum !== `` && !isNaN(getSum) && getSum > 0));

                   
                    }
                }
            } while (!currencyTrue);
        }
    )

    .finally(
        () => console.log(`Дякую, гарного дня 😊`)
    )
