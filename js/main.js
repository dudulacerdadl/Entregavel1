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

$btn.addEventListener('click', () => {
    if ($email.value == '' && $name.value == '') {
        alert('Preencha os campos corretamente')
    } else if ($email.value == '') {
        alert('Preencha o campo de e-mail corretamente!');
    } else if ($name.value == '') {
        alert('Preencha o campo do nome corretamente!');
    } else {
        alert('Cadastro realizado corretamente')
    }
});