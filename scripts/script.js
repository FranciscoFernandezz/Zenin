const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})

const carrusel = [

];

const contenedor = document.querySelector(".carousel-images");

function dibujarCard(carruseles) {
  carruseles.forEach((carrusel) => {
    contenedor.innerHTML += `<img src="${carrusel.link}" alt="foto-carrusel">`;
  });
}

dibujarCard(carrusel);

let currentIndex = 0;

const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

showImage(currentIndex);

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

let interval = setInterval(nextImage, 5000);

document.querySelector(".next").addEventListener("click", () => {
  clearInterval(interval);
  nextImage();
  interval = setInterval(nextImage, 3000);
});

document.querySelector(".prev").addEventListener("click", () => {
  clearInterval(interval);
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
  interval = setInterval(nextImage, 3000);
});

$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});