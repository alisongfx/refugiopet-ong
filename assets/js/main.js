const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('nav');
const bg = document.querySelector('.bg');
window.sr = ScrollReveal({ reset: true });

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style = 'backdrop-filter: blur(5px);background-color: #2a2a2a8a;'      // Execute a ação desejada aqui  // Execute a ação desejada aqui
    } else {
        nav.style = ''
        nav.removeAttribute("style");
    }
});

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

sr.reveal('.cat-image', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    distance: '-30px',
});

sr.reveal('.text-content', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    distance: '-30px',
});

ScrollReveal({ distance: '70px' }).reveal('.redes-sociais', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
});

ScrollReveal({ distance: '70px' }).reveal('.pay', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'top'
});

ScrollReveal({ distance: '70px' }).reveal('.sobre-info', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'bottom'
});

ScrollReveal({ distance: '70px' }).reveal('.imgphoto > img', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'left'
});

ScrollReveal({ distance: '70px' }).reveal('.imgphotobanner > img', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'right'
});

ScrollReveal({ distance: '100px' }).reveal('.img-sobre', {
    duration: 2000,
    rotate: { x: 0, y: 0, z: 0 },
    origin: 'left'
});