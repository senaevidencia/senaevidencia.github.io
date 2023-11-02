var swiper = new Swiper(".myswiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,

    },
    navigation : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
})
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
  
    navigation : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
})
var swiper = new Swiper(".mySwiper-3", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
  
    navigation : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
})

//CARRITO
const carrito = document.getElementById('carrito9');
const elemetos1 = document.getElementById('lista-1');
const elemetos2 = document.getElementById('lista-2');
const elemetos3 = document.getElementById('lista-3');
const lista = document.querySelector8('#lista-carrito tbody');

cargarEventListeners();

function cargarEventListeners () {
    elemetos1.addEventListener('click', comprarElemento);
    elemetos2.addEventListener('click', comprarElemento);
    elemetos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    
    vaciarCarritoBtn.addEventListener('', vaciarCarrito);


}