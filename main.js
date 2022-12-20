//Botão Menu Mobile
const botaoMobile = document.getElementById('cabecalho__menu___mobile');

function toggleMenu (event) {
    if (event.type === 'touchstart') event.preventDefault();
    const cabecalho__menu = document.getElementById('cabecalho__menu');
    cabecalho__menu.classList.toggle('active');
}

botaoMobile.addEventListener('click', toggleMenu);
botaoMobile.addEventListener('touchstart', toggleMenu);