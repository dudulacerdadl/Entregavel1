var $body = document.querySelector('body');
var $btn = document.querySelector('.btn');
var $name = document.querySelector('#name');
var $email = document.querySelector('#email');
$body.classList.remove('no-js');
$body.classList.add('js');

var carousel = new Carousel({
    container: '.slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
});

$body.addEventListener('click', () => {
    if ($email.value != '' && $name.value != '') {
        alert('Registo efetuado com sucesso!');
    } else {
        alert('Digite o e-mail e nome corretamente!')
    }
});