const selected = document.querySelector('select');
const qty = document.querySelector('input');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const list = document.querySelector('table');
const cart = [];

add.addEventListener('click', (event) => {
    event.preventDefault;

    addProduct();
})

function addProduct() {

    selected.value.split(" ");
    list.innerHTML += '<tr>' + '<td>' + selected.value.split(/\d+/) + '</td>' + '<td>' + selected.value.split(" ", ) +'<td>' + '</td>' + qty.value + '</td>' + '<td>' + + '</td>' + '</tr>';
    cart.push(list.value);
}