// document.write('Hola desde JavaScript');

/*Devuelve un arreglo de los elementos que tienen esa etiqueta */
// const title = document.getElementsByTagName('h1');
// /*Acceder a una etiqueta en especifico */
// title[0].innerHTML = 'Titulo modificado desde JS'
// console.log(title);
 
// /* Accede a un solo elemento con el ID*/
// const texto = document.getElementById('text');
// texto.innerHTML = 'Este texto esta escrito desde JS';
// /*el estilo se escribe en linea */
// texto.style.background = 'blue';
// texto.style.color = 'white';
// console.log(texto);

/*Optiene un elemento por id */
document.getElementById

/*Optiene todos los elementos que contiene una misma clase y los devuelve en un arreglo */
document.getElementsByClassName

/*Optiene todos los elementos que contiene el mismo nombre y los devuelve en un arreglo */
document.getElementsByName


/*Selecciona por clase e id */
const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde JS';

/*Crear elementos HTML */
const div = document.createElement('div');
const body = document.querySelector('body');
body.append(div);
