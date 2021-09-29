/*Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista.
 */

// const nameTitle = document.querySelector('#name');
// const input = document.querySelector('#input');
// const $musica = document.querySelector('#musica')

// const writeSong = () => {
//     const inputValue = input.value;
 
// }

const $btn = document.querySelector("#btn");
const $list = document.querySelector('#list');

$btn.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    $list.appendChild(listItem);
});