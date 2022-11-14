//form accesso
var formaccesso = document.getElementById("accesso");
var btnlogin = document.getElementById("login");
var linkiscrizione = document.getElementById("iscrizione");
var check = document.getElementById("check");

//form registrazione
var formregistrazione = document.getElementById("registrazione");
var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome");
var ritorno = document.getElementById("ritorno");
var frase = document.getElementById("frase");
var btnregistrazione = document.getElementById("creazioneprofilo");
var nomehelp = document.getElementById("nomeHelp");
var cognomehelp = document.getElementById("cognomeHelp");
var iscrizionehelp = document.getElementById("iscrizioneHelp");

//form input comuni
var email = document.getElementsByClassName("email");
var password = document.getElementsByClassName("password");
var emailHelp = document.getElementsByClassName("emailHelp");
var passwordHelp = document.getElementsByClassName("passwordHelp");
var help = document.getElementsByClassName("Help");

//contenitore
var datiutente = [];


window.addEventListener('DOMContentLoaded', init);

function init() {
  // elencoHTML = document.getElementById('elenco');
  // errore = document.getElementById('errore');
  utentisalvati();
  eventHandler();
}


function eventHandler() {
  btnlogin.addEventListener('click', function () {
    controllaaccesso();
  });

  btnregistrazione.addEventListener("click",function(){
    controllaaccesso();
  });
}


// linkiscrizione.addEventListener("click", function () {
  // formaccesso.innerHTML = "";
  // ritorno.style.visibility = "visible";
  // frase.style.visibility = "visible";
  // formregistrazione.innerHTML += `           
            // <h2>Iscrizione</h2>
            // <div class="mb-3">
                // <label for="nome" class="form-label">Nome</label>
                // <input type="nome" class="form-control " id="nome" placeholder="Inserisci il tuo nome"
                    // aria-describedby="nomeHelp">
                // <div id="nomeHelp" class="form-text"></div>
            // </div>
            // <div class="mb-3">
                // <label for="cognome" class="form-label">Cognome</label>
                // <input type="cognome" class="form-control " id="cognome" placeholder="Inserisci il tuo cognome"
                    // aria-describedby="cognomeHelp">
                // <div id="cognomeHelp" class="form-text"></div>
            // </div>
            // <div class="mb-3">
                // <label for="email" class="form-label">Email</label>
                // <input type="email" class="form-control " id="email" placeholder="Inserisci la tua Email"
                    // aria-describedby="emailHelp">
                // <div id="emailHelp" class="form-text"></div>
            // </div>
            // <div class="mb-3">
                // <label for="password" class="form-label">Password</label>
                // <input type="password" placeholder="Inserisci password" class="form-control " id="password">
                // <div id="passwordHelp" class="form-text"></div>
            // </div>
        
            // <div id="iscrizioneHelp" class="form-text p-2"></div>
        
            // <button type="button" class="btn btn-danger" id="creazioneprofilo">Registrati</button>`;

// });

// ritorno.addEventListener("click", function () {
  // formregistrazione.innerHTML = "";
  // ritorno.style.visibility = "hidden";
  // frase.style.visibility = "hidden";

  // formaccesso.innerHTML += `        
              // <h2>Accesso</h2>
        // <div class="mb-3">
            // <label for="email" class="form-label">Email</label>
            // <input type="email" class="form-control " id="email" placeholder="Inserisci la tua Email" aria-describedby="emailHelp">
            // <div id="emailHelp" class="form-text"></div>
        // </div>
        // <div class="mb-3">
            // <label for="password" class="form-label">Password</label>
            // <input type="password" placeholder="Inserisci password" class="form-control " id="password">
            // <div id="passwordHelp" class="form-text"></div>
        // </div>
        // <div class="mb-3 form-check">
            // <input type="checkbox" class="form-check-input" id="check">
            // <label class="form-check-label" for="checkbox">Rimani connesso</label>
        // </div>
        
        // <div id="Help" class="form-text p-2"></div>

        // <button type="button" class="btn btn-danger" id="login">Log in</button>

        // <h3 id="iscrizione">Non sei ancora registrato? <br> <a id = "registrazione">Iscriviti</a> </h3>`;

// });




function utentisalvati() {
  fetch('http://localhost:3000/utenti')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      datiutente = data;
    })
}



function controllaaccesso() {

  for (var i = 0; i < email.length; i++) {

    if (email[i].value != '' && password[i].value != '') {
    var data = {
      utente: email.value,
      password: password.value,
    };
    login(data);
  }



    else if (email[i].value == '' && password[i].value == '') {
    email[i].style.border = "2px solid red";
    password[i].style.border = "2px solid red";
      help[i].innerHTML = "Compila i campi!!";
      help[i].style.color = "red";
      help[i].style.fontWeight = "bold";
    setTimeout(() => {
      email[i].style.border = "1px solid #ced4da";
      password[i].style.border = "1px solid #ced4da";
      help[i].innerHTML = "";
      help[i].style.color = "revert";
    }, 2000)
    return;
  }

  else if (email[i].value == "") {
      emailHelp[i].innerHTML = "Email errata";
    email[i].style.border = "2px solid red";
    setTimeout(() => {
      emailHelp[i].innerHTML = "";
      email[i].style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }

    else if (password[i].value == "") {
      passwordHelp[i].innerHTML = "Password errata";
      password[i].style.border = "2px solid red";
    setTimeout(() => {
      passwordHelp[i].innerHTML = "";
      password[i].style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }
  }  

}




async function login(data) {
  let response = await fetch('http://localhost:3000/utenti', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  clearForm();
}


function clearForm() {
  email.value = '';
  password.value = '';
}








