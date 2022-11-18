var baseUrl = 'http://localhost:3000/scarpa';
var erroreHTML = document.getElementById('errore');
var elenco = [];
var elencoHTML = document.getElementById('elenco');
var paginaSel = [];
var tagliaHTML = document.getElementById('taglia');
errore = document.getElementById('errore');


window.addEventListener('DOMContentLoaded', init);

function init() {
    printData();
}

function printData() {
    fetch(baseUrl).then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if (elenco.length > 0) {
            erroreHTML.innerHTML = '';
            elencoHTML.innerHTML = '';
            elenco.map(function (element) {
                elencoHTML.innerHTML += `<div class="card mx-4" style="width: 22rem;" id="cardShop">
                <div class="container-img"><img src="${element.img}" class="figure-img img-fluid"></div>
                <div class="card-body">
                  <h5 class="card-title">${element.nome}</h5>
                  <p class="card-text">&euro;${element.prezzo}</p>
                  <a class="btn text-white mt-2 rounded-5" id="visualizza" href='paginaProdotto.html?nome=${element.nome}&prezzo=${element.prezzo}&immagine=${element.img}'>Visualizza</a>
                  <button class="btn rounded-5 text-white mt-2" id="aggiungi" onclick='addToCart(${element.id})' data-id="${element.id}" data-price="${element.prezzo}" data-title="${element.nome}">Aggiungi</button>
                </div>
              </div>`;
            })
        }else {
            taglia.innerHTML = 'Nessun elemento presente in elenco';
        }
    })
}

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