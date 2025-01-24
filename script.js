// Música de fundo
const music = new Audio('musica_fundo.mp3');
music.loop = true;
music.volume = 0.3;
window.onload = () => {
    music.play();
};

// Partículas com Particles.js - Corações com transparência
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100
        },
        "shape": {
            "type": "image",
            "image": [{
                "src": "imagens/coração.png",  // Altere se necessário
                "width": 30,
                "height": 30
            }]
        },
        "size": {
            "value": 15
        },
        "move": {
            "direction": "none",
            "speed": 2,
            "random": true,
            "straight": false
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.1
        },
        "opacity": {
            "value": 0.2 // Leve transparência para as partículas
        }
    }
});

// Slider de Fotos
let currentIndex = 0;
const images = $('.slider-img');
const totalImages = images.length;

function startPhotoSlider() {
    showNextImage();
    setInterval(showNextImage, 5000);
}

function showNextImage() {
    gsap.to(images.eq(currentIndex), { opacity: 0, scale: 0.9, duration: 1, ease: "power2.inOut" });

    currentIndex = (currentIndex + 1) % totalImages;

    gsap.to(images.eq(currentIndex), { opacity: 1, scale: 1.1, duration: 1, ease: "power2.out" });
}

// Notificação de Nova Mensagem
setTimeout(() => {
    const notification = $('#notification');
    notification.removeClass('hidden');
    gsap.from(notification, { opacity: 0, y: -30, duration: 0.5, ease: "bounce.out" });

    notification.click(function () {
        showMessage();
        notification.addClass('hidden');
    });
}, totalImages * 5000);

function showMessage() {
    const messageContent = `
    <p>Olá meu bem, venho dessa mesma forma expressar, parte do amor que eu sinto por você,<br><br>
    Quero primeiramente agradecer a Deus por ter te colocado em minha vida...</p>
    <p>Eu te amo, meu bem, muito muito.<br><br>Com muito amor, Pablo.</p>`;
    
    const messageDiv = $('<div></div>');
    messageDiv.html(messageContent);
    messageDiv.css({ marginTop: '30px', opacity: 0 });
    $('body').append(messageDiv);
    gsap.to(messageDiv, { opacity: 1, y: 0, duration: 1, ease: "bounce.out" });
}

// Iniciar o slider imediatamente
startPhotoSlider();
