const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const nav = document.querySelector('nav');
const arrowToTop = document.querySelector('.button-to-top');
const bg = document.querySelector('.bg');
const boxCarrossel = document.getElementById('carroselImgs');
const imgFullscreen = document.querySelector('.img-fullscreen');
const imgs = document.querySelectorAll('.image-carrossel img');
const imgsEach = document.querySelector('.image-carrossel img');
const modalImg = document.getElementById('modal');
const modalToggle = document.getElementById('modaltoggle');

window.sr = ScrollReveal({ reset: true });

function init(){
    scrollEvents();
}

function closeModal() {
    const modalBtnClose = document.getElementById('closeModal');
    modalBtnClose.addEventListener('click', () => {
        modalImg.close();

        if(modalToggle.classList.contains('show')){
            modalToggle.classList.remove('show')
            modalToggle.classList.add('hidden')
        }

    })
}

imgs.forEach((imgsEach) => imgsEach.addEventListener('click', () => {
    const src = imgsEach.getAttribute('src')    
    document.querySelector('.img-fullscreen').setAttribute('src', src) 

    modalImg.showModal();
    if(modalToggle.classList.contains('hidden')){
        modalToggle.classList.remove('hidden')
        modalToggle.classList.add('show')
    }
    closeModal();

}))

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style = 'backdrop-filter: blur(5px);background-color: #2a2a2a8a;'      // Execute a ação desejada aqui  // Execute a ação desejada aqui
    } else {
        nav.style = ''
        nav.removeAttribute("style");
    }

    if (window.scrollY > 100) {
        arrowToTop.style.position = 'fixed'      // Execute a ação desejada aqui  // Execute a ação desejada aqui
    } else {
        arrowToTop.style = ''
        arrowToTop.removeAttribute("style");
    }
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: true,
});

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function scrollEvents(){
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
    
    ScrollReveal({ distance: '100px' }).reveal('.title-content', {
        duration: 2000,
        rotate: { x: 0, y: 0, z: 0 },
        origin: 'top'
    });
    
    ScrollReveal({ distance: '70px' }).reveal('.btn-instagram', {
        duration: 2000,
        rotate: { x: 0, y: 0, z: 0 },
        origin: 'bottom'
    });
    
    ScrollReveal({ distance: '70px' }).reveal('.btn-facebook', {
        duration: 3000,
        rotate: { x: 0, y: 0, z: 0 },
        origin: 'bottom'
    });
    
    ScrollReveal({ distance: '70px' }).reveal('.btn-whatsapp', {
        duration: 4000,
        rotate: { x: 0, y: 0, z: 0 },
        origin: 'bottom'
    });
}

init()