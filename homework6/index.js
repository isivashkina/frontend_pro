const hero = ['Ivan'],
    native = ['York','Of'],
    destination = ['Poltava','In'];

let rainbow = [...hero, ...native, ...destination].reverse();
    rainbow.pop();
    rainbow.splice(4, 0, `Gave`, `Battle`);
    rainbow = rainbow.concat(rainbow.shift());
    rainbow.shift();
    rainbow.unshift(`Richard`);
    rainbow.push(`Vain`);

for(let i = 0; i < rainbow.length; i++) {
    let colors;
    switch (rainbow[i]) {
        case `Richard`:
            colors = `red`;
            break;
        case `Of`:
            colors = `orange`;
            break;
        case `York`:
            colors = `yellow`;
            break;
        case `Gave`:
            colors = `green`;
            break;
        case `Battle`:
            colors = `blue`;
            break;
        case `In`:
            colors = `indigo`;
            break;
        case `Vain`:
            colors = `purple`;
            break;
    }
    document.write(`<div style="font-family: 'Quicksand', sans-serif; display: inline-block; text-align: center;padding: 10px;">
                <div style= "margin-bottom: 20px; border-radius: 50%; width: 50px; height: 50px; background-color: ${colors};"></div>
                <span>${rainbow[i]}</span>
    </div>`)
}
