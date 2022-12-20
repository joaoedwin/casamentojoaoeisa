//Botão Menu Mobile
const botaoMobile = document.getElementById('cabecalho__menu___mobile');

function toggleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
    const cabecalho__menu = document.getElementById('cabecalho__menu');
    cabecalho__menu.classList.toggle('active');
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);



//Carrosel de Imagens
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

console.log(slider)