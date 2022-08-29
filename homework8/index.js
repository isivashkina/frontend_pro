const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

function getInfo(array, title) {
    let animalsList = ``;
    title += ' info'

    for (let i = 0; i < array.length; i++) {
        animalsList += `<tr>`

        for (let j = 0; j < array[i].length; j++)
            animalsList += `<td>${array[i][j]}</td>`

        animalsList += `</tr>`
    }
    return `<table>
        <caption>${title}</caption>
        <tbody>${animalsList}</tbody>
    </table>`;
}

document.write(getInfo(animals, `Animals`));
document.write(getInfo(food, `Food`));




