const $body = document.querySelector('body');
const $selectColor = document.querySelector('#colors')

$selectColor.addEventListener('change', (e) => {
    if (e.target.value === 'pink') {
        $body.className = '';
        $body.classList.add('pink');
    } else if (e.target.value === 'purple') {
        $body.className = '';
        $body.classList.add('purple');
    } else if (e.target.value === 'black') {
        $body.className = '';
        $body.classList.add('black');
    }
});