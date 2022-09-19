class Bulka {
    constructor(name,size,ingredients){
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`];
    }

    setAdditionalIngredients(...ingredient){
        this.ingredients.push(...ingredient);
    } 
}

let Humburger = new Bulka(`Humburger`, `small`);
Humburger.setAdditionalIngredients(`egg`, `onion`);

class Cheeseburger extends Bulka{
    constructor(name,size,ingredients){
        super(name,size,ingredients);
        this.ingredients.push('cheese');
    }
}

let myCheeseburger = new Cheeseburger(`Cheeseburger`, `small`);
myCheeseburger.setAdditionalIngredients(`egg`, `onion`);

console.log(Humburger);
console.log(myCheeseburger);
