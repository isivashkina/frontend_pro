let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,  
    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7,

    orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3,

    kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10,

    aplleTotal = ((applePrice*appleCount)-((applePrice*appleCount))*appleSalePercent/100),
    orangeTotal = ((orangePrice*orangeCount)-((orangePrice*orangeCount))*orangeSalePercent/100),
    kiwiTotal = ((kiwiPrice*kiwiCount)+((kiwiPrice*kiwiCount))*kiwiCountryPercent/100),

    cureentDate = new Date();

captionString = captionString.replace("≠","-")
                             .replace("<ВИВІД ПОТОЧНОГО ДНЯ>",cureentDate.getDate())
                             .replace("<ВИВІД ПОТОЧНОГО МІСЯЦЯ>",cureentDate.getMonth()+1)
                             .replace("<ВИВІД ПОТОЧНОГО РОКУ>",cureentDate.getFullYear());

console.log(captionString);
console.log("Final price for "+appleCount+" "+apple+" = "+aplleTotal.toFixed()+" UAH");
console.log("Final price for "+orangeCount+" "+orange+" = "+orangeTotal.toFixed()+" UAH");
console.log("Final price for "+kiwiCount+" "+kiwi+" = "+kiwiTotal.toFixed()+" UAH");
console.log("Final price for all products = "+(aplleTotal+orangeTotal+kiwiTotal).toFixed(2)+" UAH");