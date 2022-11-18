//LA NAV BAR CAMBIA ALLO SCOLL DELLA PAGINA
let scrollnav = window.scrollY
const header = document.querySelector("nav");

const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");

window.addEventListener('scroll', function () {
  scrollnav = window.scrollY;

  if (scrollnav >= 150) {
    add_class_on_scroll();
    document.getElementById('logo').setAttribute('src', '../assets/img/logo_jordan.png');
    document.getElementById('login').style.color = 'black';
    document.getElementById('login').addEventListener("mouseover", () => {
      document.getElementById('login').style.color = 'grey';
    });
    document.getElementById('login').addEventListener("mouseout", () => {
      document.getElementById('login').style.color = 'black';
    });

    document.getElementById('menu').style.color = 'black';
    document.getElementById('menu').addEventListener("mouseover", () => {
      document.getElementById('menu').style.color = 'grey';
    });
    document.getElementById('menu').addEventListener("mouseout", () => {
      document.getElementById('menu').style.color = 'black';
    });

    document.getElementById('carrello').style.color = 'black';
    document.getElementById('carrello').addEventListener("mouseover", () => {
      document.getElementById('carrello').style.color = 'grey'; 
    });
    document.getElementById('carrello').addEventListener("mouseout", () => {
      document.getElementById('carrello').style.color = 'black';
    });

    document.getElementById('shop').style.color = 'black';
    document.getElementById('shop').addEventListener("mouseover", () => {
      document.getElementById('shop').style.color = 'grey';
    });
    document.getElementById('shop').addEventListener("mouseout", () => {
      document.getElementById('shop').style.color = 'black';
    });

    document.getElementById('cartCounter1').style.color = 'black';
  }
  else {
    remove_class_on_scroll();
    document.getElementById('logo').setAttribute('src', '../assets/img/logo_jordan_bianco.png');
    document.getElementById('login').style.color = 'white';
    document.getElementById('login').addEventListener("mouseover", () => {
      document.getElementById('login').style.color = 'grey';
    });
    document.getElementById('login').addEventListener("mouseout", () => {
      document.getElementById('login').style.color = 'white';
    });

    document.getElementById('menu').style.color = 'white';
    document.getElementById('menu').addEventListener("mouseover", () => {
      document.getElementById('menu').style.color = 'grey';
    });
    document.getElementById('menu').addEventListener("mouseout", () => {
      document.getElementById('menu').style.color = 'white';
    });

    document.getElementById('carrello').style.color = 'white';
    document.getElementById('carrello').addEventListener("mouseover", () => {
      document.getElementById('carrello').style.color = 'grey';
    });
    document.getElementById('carrello').addEventListener("mouseout", () => {
      document.getElementById('carrello').style.color = 'white';
    });

    document.getElementById('shop').style.color = 'white';
    document.getElementById('shop').addEventListener("mouseover", () => {
      document.getElementById('shop').style.color = 'grey';
    });
    document.getElementById('shop').addEventListener("mouseout", () => {
      document.getElementById('shop').style.color = 'white';
    });

    document.getElementById('cartCounter1').style.color = 'white';
  }
});

// BARRA DI AVANZAMENTO ALLO SCROLL
const updateBar = () => {
  const body = document.querySelector('body');
  const bar = document.querySelector('.bar');

  const scrollPos = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = scrollPos + "%";

  requestAnimationFrame(updateBar);

}

updateBar();

