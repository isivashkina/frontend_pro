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
        return this.season 
            ? (this.price * this.seasonKoef).toFixed(2)
            : this.price.toFixed(2)
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

function makePrototype(arr,objectProto){
    let arrPrototype = arr.map(item => {
        let newArr = Object.create(objectProto);
        return Object.assign(newArr,item);
       
    })
    return arrPrototype;
}

function renderList(arr){
    document.write(`<ul>`);
    arr.forEach(item => {
        document.write(`<li>${item.getInfo()}</li>`)
    });
    document.write(`</ul>`);
}

renderList(makePrototype(vegetables, Vegetable));
renderList(makePrototype(fruits, Fruit));



