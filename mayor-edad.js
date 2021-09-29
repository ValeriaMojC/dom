
const texto = document.querySelector('#sms');
// const input = document.querySelector('#input');

const writeText = () => {
    // const inputValue = input.value;
    const age = parseInt(document.querySelector('#age').value);
    if (age >= 18) {
        texto.textContent = 'Eres mayor de edad';
        texto.style.background = 'purple';
        texto.style.color = 'white';
        texto.style.padding = "20px";
    } else {
        texto.textContent = 'Aun eres menor de edad';
        texto.style.background = 'red';
        texto.style.color = 'white';
        texto.style.padding = "20px";
    }
}


