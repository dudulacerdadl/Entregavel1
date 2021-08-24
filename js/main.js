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
    var email = $email.value.split('');
    var cont = 0;

    if ($email.value == '' || $name.value == '') {
        alert('Preencha os campos corretamente!');
    } else {
        var arr = false
        
        for (let i = 1; i < email.length; i++) {
            if (email[i] == '@') {
                arr = true
            }
        }

        if (arr) {
            var aux = '';

            for (let j = (email.length - 5); j < email.length; j++) {
                if (cont == 0) {
                    email[j] == '@' ? aux = 'ERRO' : aux = '';
                    cont ++;
                } else {
                    aux += email[j];
                }
                console.log(aux)
            }
            if (aux != '.com' && aux) {
                alert('Preencha o e-mail corretamente!');
            } else {
                alert('Cadastro realizado corretamente')
            }
            
        } else {
            alert('Preencha o e-mail corretamente!')
        }
    }
});