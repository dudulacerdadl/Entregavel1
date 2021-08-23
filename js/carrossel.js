class Carousel {
    constructor(config) {
        this.container = document.querySelector(config.container);
        this.itens = this.container.querySelectorAll(config.itens);
        this.next = this.container.querySelector(config.btnNext);
        this.prev = this.container.querySelector(config.btnPrev);

        var _this = this;
        var _conterSlide = 0;

        init();

        function init() {
            var _show = _this.container.querySelectorAll('.show');

            Array.prototype.forEach.call(_show, (sh) => sh.classList.remove('show'));
            _this.itens[0].classList.add('show');
            _this.next.removeAttribute('style');
            _this.prev.removeAttribute('style');

            addListeners();
        }

        function addListeners() {
            _this.next.addEventListener('click', () => {
                _conterSlide++;
                showSlide();
            });
            _this.prev.addEventListener('click', () => {
                _conterSlide--;
                showSlide();
            });
        }

        function showSlide() {
            var qtd = _this.itens.length;
            var slide = _conterSlide % qtd;
            slide = Math.abs(slide);

            _this.container.querySelector('.show').classList.remove('show');
            _this.itens[slide].classList.add('show');
        }
    }
}