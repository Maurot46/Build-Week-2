window.addEventListener("DOMContentLoaded", init);

function init() {
    scarpesalvate();
    utentisalvati();
}


//pubblica le scarpe salvate sulla lista json
function scarpesalvate() {
    fetch("http://localhost:3000/scarpa")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            cart = data;
        }
        );
}

let count = 1;
var cart = [];
var cartCounter1 = document.getElementById('cartCounter1');
var cartCounter2 = document.getElementById('cartCounter2');
var bottoneaggiungi = document.querySelectorAll(".cartBottone");
let listaOggetti = [];
// contenitore di dati inviati al json
let data;

addToCart = (idhtml) => {
    cartCounter1.innerHTML = count++;

    if (cart.find((element) => element.id == idhtml)) {
        //prende l array della scarpa
        let oggetto = cart.find((element) => element.id == idhtml);
        listaOggetti.push(oggetto);
        console.log(listaOggetti);
        let data = {
            carrello: listaOggetti
        }
    }
}

addToCart = (idhtml) => {
    cartCounter2.innerHTML = count++;

    if (cart.find((element) => element.id == idhtml)) {
        //prende l array della scarpa
        let oggetto = cart.find((element) => element.id == idhtml);
        listaOggetti.push(oggetto);
        console.log(listaOggetti);
        let data = {
            carrello: listaOggetti
        }
    }
}

var carrelloIndex = document.getElementById('carrello');
var carrelloOthers = document.getElementById('carrello2');

if (carrelloIndex == null) {
    carrelloOthers.addEventListener('click', confermaCarrello);
} else {
    carrelloIndex.addEventListener('click', confermaCarrello);
}
// Aggiunge lista items al corrispondente user nel json
var listaFinita = [];
// NON TOCCARE O TI VENGO A TROVARE A CASA DI NOTTE.
function confermaCarrello() {
    listaFinita.push(listaOggetti);
    let data = {
        carrello: listaOggetti
    }
    if (users.find((element) => element.carrello != undefined || element.carrello != null || element.carrello != '')) {
        aggiungiScarpa(data);
    }
    location.href = "carrello.html";

    async function aggiungiScarpa(merce) {
        //sessiom storage carrello user coincide con json
        function update(value) {
            let prevData = JSON.parse(sessionStorage.getItem('login'));
            Object.keys(value).forEach(function (val, key) {
                prevData[val] = value[val];
            })
            sessionStorage.setItem('login', JSON.stringify(prevData));
        }
        update({ carrello: merce })


        let response = await fetch(`http://localhost:3000/utenti/${sessione.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(merce),
        });
    }
}

//metti in display gli items


printData2();
function printData2() {
    let cartHistory = document.getElementById('acquisti');
    let sessione = JSON.parse(sessionStorage.getItem("login"));
    let utenti = [];

    fetch("http://localhost:3000/utenti").then((response) => {
        return response.json();
    }).then((data) => {
        utenti = data[sessione.id - 1];
        let carrello = utenti.carrello;

        if (carrello.length > 0) {
            carrello.map(function (element) {
                cartHistory.innerHTML += `
                    <div class="card mx-4 cardShop" style="width: 13rem; height: 20rem;">
                        <div class="container-img">
                            <img src="${element.img}" class="figure-img img-fluid" style="width: 200px">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title card-title-carrello">${element.nome}</h5>
                            <p class="card-text">&euro;${element.prezzo}</p>
                        </div>
                    </div>`;
            })
        }
    })
}

//totale carrello

var totaleCarrello = document.getElementById('totaleCarrello');

function tot() {

    let sessione = JSON.parse(sessionStorage.getItem("login"));

    fetch("http://localhost:3000/utenti").then((response) => {
        return response.json();
    }).then((data) => {
        utenti = data[sessione.id - 1];
        let carrello = utenti.carrello;


        const arraytot = carrello.map(x => x.prezzo);


        let sum = arraytot.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);


        totaleCarrello.innerHTML += `<p id="totale" class="text-center">Totale: &euro; ${sum.toFixed(2)}</p>`

    })
}
tot();

var checkoutbtn = document.getElementById("checkout");
checkoutbtn.addEventListener("click", () => {
    window.location.href = "index.html";

    async function cancellaScarpa() {

        alert("Grazie per l'acquisto! Il tuo ordine verrà spedito a breve");


        let eliminaval = [];
        function update(value) {
            let prevData = JSON.parse(sessionStorage.getItem('login'));
            Object.keys(value).forEach(function (val, key) {
                prevData[val] = value[val];
            });
            sessionStorage.setItem('login', JSON.stringify(prevData));
        }
        update({ carrello: eliminaval });


        let testparse = sessione;

        console.log(testparse);
        let response = await fetch(`http://localhost:3000/utenti/${sessione.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(testparse),
        });


    }
    cancellaScarpa();

});

