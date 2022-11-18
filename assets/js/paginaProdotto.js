var params = new URLSearchParams(document.location.search);
console.log(params);
let vario = params.get('nome');
let prezzo = params.get('prezzo');
let immagine = params.get('immagine');
document.getElementById('nomeScarpa').innerHTML += vario;
document.getElementById('prezzoScarpa').innerHTML += `${prezzo}&euro;`;
document.getElementById('immagineScarpa').innerHTML = `<img src="${immagine}" class=img-fluid>`;


//LA NAV BAR CAMBIA ALLO SCOLL DELLA PAGINA
var scrollnav = window.scrollY
const header = document.querySelector("nav");

const add_class_on_scroll = () => header.classList.add("nav-shop");
const remove_class_on_scroll = () => header.classList.remove("nav-shop");

window.addEventListener('scroll', function () {
  scrollnav = window.scrollY;

  if (scrollnav >= 100) {
    add_class_on_scroll();
    document.getElementById('logo').setAttribute('src', '../assets/img/logo_jordan_bianco.png');
    document.getElementById('login2').style.color = 'white';
    document.getElementById('login2').addEventListener("mouseover", () => {
      document.getElementById('login2').style.color = 'grey';
    });
    document.getElementById('login2').addEventListener("mouseout", () => {
      document.getElementById('login2').style.color = 'white';
    });

    document.getElementById('menu2').style.color = 'white';
    document.getElementById('menu2').addEventListener("mouseover", () => {
      document.getElementById('menu2').style.color = 'grey';
    });
    document.getElementById('menu2').addEventListener("mouseout", () => {
      document.getElementById('menu2').style.color = 'white';
    });

    document.getElementById('carrello2').style.color = 'white';
    document.getElementById('carrello2').addEventListener("mouseover", () => {
      document.getElementById('carrello2').style.color = 'grey';
    });
    document.getElementById('carrello2').addEventListener("mouseout", () => {
      document.getElementById('carrello2').style.color = 'white';
    });

    document.getElementById('shop2').style.color = 'white';
    document.getElementById('shop2').addEventListener("mouseover", () => {
      document.getElementById('shop2').style.color = 'grey';
    });
    document.getElementById('shop2').addEventListener("mouseout", () => {
      document.getElementById('shop2').style.color = 'white';
    });

    document.getElementById('cartCounter2').style.color = 'white';
  }
  else {
    remove_class_on_scroll();
    document.getElementById('logo').setAttribute('src', '../assets/img/logo_jordan.png');
    document.getElementById('login2').style.color = 'black';
    document.getElementById('login2').addEventListener("mouseover", () => {
      document.getElementById('login2').style.color = 'grey';
    });
    document.getElementById('login2').addEventListener("mouseout", () => {
      document.getElementById('login2').style.color = 'black';
    });

    document.getElementById('menu2').style.color = 'black';
    document.getElementById('menu2').addEventListener("mouseover", () => {
      document.getElementById('menu2').style.color = 'grey';
    });
    document.getElementById('menu2').addEventListener("mouseout", () => {
      document.getElementById('menu2').style.color = 'black';
    });

    document.getElementById('carrello2').style.color = 'black';
    document.getElementById('carrello2').addEventListener("mouseover", () => {
      document.getElementById('carrello2').style.color = 'grey';
    });
    document.getElementById('carrello2').addEventListener("mouseout", () => {
      document.getElementById('carrello2').style.color = 'black';
    });

    document.getElementById('shop2').style.color = 'black';
    document.getElementById('shop2').addEventListener("mouseover", () => {
      document.getElementById('shop2').style.color = 'grey';
    });
    document.getElementById('shop2').addEventListener("mouseout", () => {
      document.getElementById('shop2').style.color = 'black';
    });

    document.getElementById('cartCounter2').style.color = 'black';
  }
});

//BARRA DI AVANZAMENTO ALLO SCROLL
const updateBar = () => {
  const body = document.querySelector('body');
  const bar = document.querySelector('.bar');

  const scrollPos = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = scrollPos + "%";

  requestAnimationFrame(updateBar);

}

updateBar();