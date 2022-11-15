//form accesso
var formaccesso = document.getElementById("accesso");
var btnlogin = document.getElementById("login");
var check = document.getElementById("check");

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
  btnlogin.addEventListener('click', function () {
    controllaccesso();
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



function controllaccesso() {


  if (email.value != '' && password.value != '') {
    var data = {
      utente: email.value,
      password: password.value,
    };
    login(data);
  }



  else if (email.value == '' && password.value == '') {
    email.style.border = "2px solid red";
    password.style.border = "2px solid red";
    help.innerHTML = "Compila i campi!!";
    help.style.color = "red";
    help.style.fontWeight = "bold";
    setTimeout(() => {
      email.style.border = "1px solid #ced4da";
      password.style.border = "1px solid #ced4da";
      help.innerHTML = "";
      help.style.color = "revert";
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

}




async function login(data) {
  let response = await fetch('http://localhost:3000/utenti', {
    method: 'GET',
  });

  
  clearForm();
}


function clearForm() {
  email.value = '';
  password.value = '';
}








