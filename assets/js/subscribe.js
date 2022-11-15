var formregistrazione = document.getElementById("registrazione");
var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome");
var ritorno = document.getElementById("ritorno");
var frase = document.getElementById("frase");
var btnregistrazione = document.getElementById("creazioneprofilo");
var nomeHelp = document.getElementById("nomeHelp");
var cognomeHelp = document.getElementById("cognomeHelp");
var checkPassword = document.getElementById("checkPassword");
var checkPasswordHelp = document.getElementById("checkPasswordHelp");


//form input comuni
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailHelp = document.getElementById("emailHelp");
var passwordHelp = document.getElementById("passwordHelp");
var help = document.getElementById("Help");

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
  btnregistrazione.addEventListener('click', function () {
    controllaregistrazione();
  });

}


function utentisalvati() {
  fetch('http://localhost:3000/utenti')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      datiutente = data;
    })
}



function controllaregistrazione() {


  if (email.value != '' && password.value != '' && password.value == checkPassword.value && nome.value != "" && cognome.value != "") {
    var data = {
      nome: nome.value,
      cognome: cognome.value,
      email: email.value,
      password: password.value,
    };
    
    registra(data);

        // help.innerHTML = `<h4 class="text-success">Registrazione avvenuta con successo,
// effettua il tuo primo accesso.</h4>`;



    // setTimeout(() => {
      // help.innerHTML = "";
    // }, 5000);

  // }

  }

  else if (email.value == '' && password.value == '' && nome.value == "" && cognome.value == "") {
    nome.style.border = "2px solid red";
    cognome.style.border = "2px solid red";
    email.style.border = "2px solid red";
    password.style.border = "2px solid red";
    help.innerHTML = "Compila i campi!!";
    help.style.color = "red";
    help.style.fontWeight = "bold";
    setTimeout(() => {
      nome.style.border = "1px solid #ced4da";
      cognome.style.border = "1px solid #ced4da";
      email.style.border = "1px solid #ced4da";
      password.style.border = "1px solid #ced4da";
      help.innerHTML = "";
      help.style.color = "revert";
    }, 2000)
    return;
  }

  else if (nome.value == "") {
    nomeHelp.innerHTML = "Nome errato";
    nome.style.border = "2px solid red";
    setTimeout(() => {
      nomeHelp.innerHTML = "";
      nome.style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }
  else if (cognome.value == "") {
    cognomeHelp.innerHTML = "Cognome errato";
    cognome.style.border = "2px solid red";
    setTimeout(() => {
      cognomeHelp.innerHTML = "";
      cognome.style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }


  else if (email.value == "") {
    emailHelp.innerHTML = "Email errata";
    email.style.border = "2px solid red";
    setTimeout(() => {
      emailHelp.innerHTML = "";
      email.style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }

  else if (password.value == "") {
    passwordHelp.innerHTML = "Password errata";
    password.style.border = "2px solid red";
    setTimeout(() => {
      passwordHelp.innerHTML = "";
      password.style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }

  else if (checkPassword.value != password.value) {
    checkPasswordHelp.innerHTML = "Le tue password non coincidono, prova a ricontrollare";
    checkPassword.style.border = "2px solid red";
    password.value = "";
    checkPassword.value = "";
    setTimeout(() => {
      checkPasswordHelp.innerHTML = "";
      checkPassword.style.border = "1px solid #ced4da";
    }, 2000)
    return;
  }

}




async function registra(data) {
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
  nome.value = "";
  cognome.value = "";
  email.value = '';
  password.value = '';
}

