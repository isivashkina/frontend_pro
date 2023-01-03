const logo = document.querySelector(`#logo`);
const categoriesContainer = document.querySelector(`#categoriesContainer`);
const registrationForm = document.querySelector(`#registrationForm`);
const addName = document.querySelector(`#name`);
const addEmail = document.querySelector(`#email`);
const addPassword = document.querySelector(`#password`);
const createAccount = document.querySelector(`#Create-account`)

logo.addEventListener(`click`, () => {
    document.location.href = `index.html`
});

const API = `https://634e9f834af5fdff3a625f84.mockapi.io`;

const getList = path => fetch(API + path).then(data => data.json());

const addItem = (path, obj) => fetch(API + path, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

const renderProducts = async () => {
    let products = await getList(`/products`);
    categoriesContainer.innerHTML = products.map(item =>
        `<section class="category" data-name="${item.category}">
            <h2>${item.category}</h2>
            <div class="category__container">
                <div data-id="${item.id}" class="product">
                    <img
                        src="images/products/${item.img}.png"
                        class="product__img"
                        alt="${item.img}"
                        height="80"/>
                    <p>${item.title}</p>
                </div>
            </div>
        </section>`)
        .join(``);

}
// renderProducts();

registrationForm.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    let newUser = {
        name: addName.value,
        email: addEmail.value,
        password: addPassword.value,
    };
    console.log(newUser);
    let addUser = await addItem(`/users`, newUser)
    console.log(addUser);
})



