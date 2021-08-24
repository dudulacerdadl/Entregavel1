var body = document.querySelector('body');
var btn = document.querySelector('.btn');
var nome = document.querySelector('#name');
var email = document.querySelector('#email');
body.classList.remove('no-js');
body.classList.add('js');

var carousel = new Carousel({
    container: '.slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
});

btn.addEventListener('click', function () {
    // Fonte do Regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = e.test(email.value);

    if (!isValid) {
        email.setCustomValidity('');
            
        if (email.validity.valueMissing) {
            email.setCustomValidity('Digite seu e-mail aqui');
        } else {
            email.setCustomValidity('Email inválido. Digite um e-mail como o exemplo: 12345@exemplo.com');
        }
    } else {
        email.setCustomValidity('');
    }
});
