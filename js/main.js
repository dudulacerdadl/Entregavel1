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

var nav = document.querySelector('.top-nav');
var mask = document.querySelector('.mask');
var btnBurger = document.querySelector('.burger-button');

btnBurger.addEventListener('click', function() {
    nav.toggleAttribute('opened');
    mask.toggleAttribute('opened');
    clickOut();
});

function clickOut() {
    window.addEventListener('click', function(e) {
        if (!nav.contains(e.target.parentNode) && e.target != btnBurger) {
            nav.removeAttribute('opened');
            mask.removeAttribute('opened');
        }
    });
}

btn.addEventListener('click', function() {
    // Fonte do Regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const e = /[a-z0-9.]*@[a-z0-9]*\.[a-z\.]*/
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