const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];

const Product = {
    getPrice() {
        if (this.season){
            return (this.price * this.seasonKoef).toFixed(2);
        } else {
            return this.price.toFixed(2);
        }
    },
    getInfo() {
        return `Product:${this.icon} ${this.name}.Type:${this.type}. Price:$${this.getPrice()}`;
    }
}

const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;


const Fruit = Object.create(Product);
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;

console.log(Vegetable);

function makePrototype(arr,objectProto){
    let arrPrototype = arr.map(item => {
        let newArr = Object.create(objectProto);
        return Object.assign(newArr,item);
       
    })
    return arrPrototype;
    
   
}


function renderList(arr){
    return arr.forEach(item => {
        console.log(item);
        document.write(`<ul><li>${item.getInfo()}</li></ul>`)
    });
}

renderList(makePrototype(vegetables, Vegetable));
renderList(makePrototype(fruits, Fruit));



