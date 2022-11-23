const API = "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json";

const imgTesla = $(`<img>`).appendTo(`#imgTesla`);
const title = $(`<p>`).appendTo(`#imgTesla`);
const colorBtn = $(`#colorBtn`);

const renderTesla = (path) => {
    $.ajax({
        method: "GET",
        url: path,
        async: false,
        dataType: "JSON",
        success: data => {
            renderCars(data);
        },
        error: (error) => console.log(error),
    });
};

const renderCars = data => {
    $(imgTesla)
        .attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${data[0].img}.jpg`)
        .attr(`alt`, `tesla ${data[0].img}`)
        .attr(`class`, `tesla`);

    $(title)
        .attr(`class`, `text`)
        .css('color', `${data[0].color}`)
        .html(data[0].title);

    $.each(data, (index, item) => {
        $(`<button>`).appendTo(colorBtn)
            .attr('class', `btn ${item.img}`)
            .css(`background-color`, item.color)
            .on(`click`, () => {
                $(imgTesla)
                    .attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`)
                    .attr(`alt`, `tesla ${item.img}`);
                $(title)
                    .css('color', `${item.color}`)
                    .html(`${item.title}`)
            })
    })
}
renderTesla(API);