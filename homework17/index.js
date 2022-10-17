const renderElement = document.querySelector(`#renderElement`);
const figure = document.querySelector(`#figure`);
const color = document.querySelector(`#color`);
const element = document.querySelector(`#element`);

let render = {
    figure: ``,
    figureLast: ``,
    color: ``
}

renderElement.addEventListener(`submit`, e => {
    e.preventDefault();
    render.figureLast = render.figure;
    render.figure = figure.value;
    render.color = color.value;
    renderForm(render);
})

function renderForm(render) {
    if (render.figureLast.length) {
        element.classList.remove(render.figureLast);
    }
    element.style.background = render.color;
    element.classList.add(render.figure);
    
}
