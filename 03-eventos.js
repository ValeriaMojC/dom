/*$ hace referencia a un elemento del HTML*/
const $btn = document.querySelector('#btn');

/*REcibe varios parametro como: Evento que se esta disparando, funcion anonima que se ejecutara,*/
$btn.addEventListener('mouseover', () => {
    console.log('ME PRECIONASTE!');
    // $btn.style.background = 'purple';
    // $btn.style.color = 'white';
    // $btn.style.border = 'solid black 2px'

});

const $inpText = document.querySelector('#text');

$inpText.addEventListener('keydown', (e) => {
    // console.log('ESCRIBISTE ALGO!');

    //Asi sabremos que escribe el usuario
    console.log(e.target.value);
});