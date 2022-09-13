const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

function convert(object) {
    let newObj = {};

    for (let key in object) {
        (typeof object[key] === 'object')
            ? newObj = Object.assign(newObj, convert(object[key]))
            : newObj[key] = object[key];
    }

    return newObj;
}

console.log(convert(obj))