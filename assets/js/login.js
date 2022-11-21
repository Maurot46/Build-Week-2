//Generale
var users = [];

//registrazione
var regBtn = document.getElementById("regBtn");
var regNome = document.getElementById("regNome");
var regCognome = document.getElementById("regCognome");
var regEmail = document.getElementById("regEmail");
var regPass = document.getElementById("regPass");
var regConferma = document.getElementById("regPass2");
var regPrivacy = document.getElementById("regPrivacy");
var mailFlag = false; // false = errore/già registrato, true = mail corretto.

//Loging In
var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var logShowPass = document.getElementById('logShowPass');
var logBtn = document.getElementById('logBtn');
//-session storage pt2-//
var logBtnIndex = document.querySelector('#login');
var logBtnOthers = document.querySelector('#login2');
var sessione = JSON.parse(sessionStorage.getItem("login"));

if (sessione != null) {
    if (logBtnOthers == null) {
        logBtnIndex.innerHTML = `${sessione.nome}`;
        logBtnIndex.innerHTML += `<a onclick='logout()'> <i class="bi bi-box-arrow-right ps-2 text-center" id="log-outIcon"></i></a>`;
    }
    if (logBtnIndex == null) {
        logBtnOthers.innerHTML = `${sessione.nome}`;
        logBtnOthers.innerHTML += `<a onclick='logout()'> <i class="bi bi-box-arrow-right ps-2 text-center" id="log-outIcon"></i></a>`;
    }
}

logout = () => {
    setTimeout(() => {
        logForm.classList.remove("active");
    }, 2);
    sessionStorage.removeItem("login");
    location.reload();
}
//--------------------//

window.addEventListener("DOMContentLoaded", init);

function init() {
    utentisalvati();
    eventHandler();
}

function eventHandler() {
    regBtn.addEventListener("click", function() {
        controllaRegistrazione();
    });
    logBtn.addEventListener('click', function() {
        controlloLogin();
    });
}

//funzioni--------------------------------------------------------------
erroreCampoVuoto = (valore, input) => {
    if (valore == "") {
        input.style.border = "2px solid red";
        setTimeout(() => {
            input.style.border = "1px solid #ced4da";
        }, 2000);
        return;
    }
};

borderDefault = (valore, sec) => {
    setTimeout(() => {
        valore.style.border = "1px solid #ced4da";
    }, sec);
};
//messaggio gia registrato
function giaRegistrato() {
    if (users.find((element) => element.email == regEmail.value)) {
        let erroreMail = document.getElementById("erroreMail");

        erroreMail.innerHTML = "Sei già registrato";
        setTimeout(() => {erroreMail.innerHTML = ""}, 1500);
        mailFlag = false;
    }
}

//pubblica all'array la lista json
function utentisalvati() {
    fetch("http://localhost:3000/utenti")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            users = data;
        }
    );
}

//------------------------Registrazione------------------------//
//controllo registrazione
function controllaRegistrazione() {
    let email = regEmail;
    let password = regPass;
    let checkPassword = regConferma;
    let nome = regNome;
    let cognome = regCognome;
    let regPrivacy = document.getElementById("regPrivacy");

    giaRegistrato();
    //verifica che il campo non sia vuoto/sbagliato
    if ( email.value != "" && password.value != "" && password.value == checkPassword.value && nome.value != "" && cognome.value != "" && regPrivacy.checked == true && mailFlag == true ) {
        let data = {
            nome: nome.value,
            cognome: cognome.value,
            email: email.value,
            password: password.value,
            carrello: []
        };
        registra(data);
    } else {
        //indica il campo non compilato
        erroreCampoVuoto(regEmail.value, regEmail);
        erroreCampoVuoto(regPass.value, regPass);
        erroreCampoVuoto(regNome.value, regNome);
        erroreCampoVuoto(regCognome.value, regCognome);
        erroreCampoVuoto(checkPassword.value, checkPassword);
        if (checkPassword.value != password.value) {
            checkPassword.style.border = "2px solid red";
            password.style.border = "2px solid red";
            setTimeout(() => {
                checkPassword.style.border = "1px solid #ced4da";
                password.style.border = "1px solid #ced4da";
            }, 2000);
            return;
        }
    }
    //checkbox privacy
    if (regPrivacy.checked == false) {
        regPrivacy.style.border = "2px solid red";
        borderDefault(regPrivacy, 2000);
    }
}
//verifica email (regex)
const controlloRegex = (mail) => {
    return mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

const controlloOrtografia = () => {
    let email = document.getElementById("regEmail");
    let emailValue = email.value;

    if (controlloRegex(emailValue)) {
        email.style.border = "2px solid green";
        setTimeout(() => {
            email.style.border = "1px solid #ced4da";
        }, 3000);
        mailFlag = true;
        // false = errore/già registrato, true = mail corretto.
    } else {
        email.style.border = "2px solid red";
        mailFlag = false;
    }
};

regEmail.addEventListener("input", controlloOrtografia);
//registrazione avvenuta
async function registra(data) {
    let response = await fetch("http://localhost:3000/utenti", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    });
    clearForm();
}
//clear inputfield
function clearForm() {
    regNome.value = "";
    regCognome.value = "";
    regEmail.value = "";
    regPass.value = "";
}

//------------------------Login------------------------//
var nomeLogin = 'non ho un nome';
function controlloLogin() {
    let logError = document.getElementById('loginError');
    let email = logEmail;
    let password = logPass;

    controlloEsistenza();

    function controlloEsistenza() {
        if (users.find((element) => element.email == logEmail.value)) {
            controlloPassword();
        } else {
            logError.innerHTML = 'L\'account non esiste, vai a registrarti.';
            clearLogError();
        }
    }

    var logFlag = false;

    function controlloPassword() {
        if (users.find((element) => element.email == logEmail.value && element.password == logPass.value)) {
            nomeLogin = users.find((element) => element.email == logEmail.value && element.password == logPass.value);
            //sessiom storage
            sessionStorage.setItem("login", JSON.stringify(nomeLogin));

            logFlag = true;
            if(logFlag == true) {
                logFlag = false;
                loggato();
                location.href = 'index.html';
            } 

        } else {
            logError.innerHTML = 'Password Errata, Riprova';
        }
    }

    function loggato() {
        setTimeout(() => {
            logEmail.value = '';
            logPass.value = '';
        }, 10);
        let logBtnIndex = document.querySelector('#login');
        let logBtn = document.querySelector('#login2');
        if (logBtn == null) {
            logBtnIndex.innerHTML = `${nomeLogin.nome}`;
            logBtnIndex.innerHTML += `<a onclick='logout()'> <i class="bi bi-box-arrow-right ps-2 text-center" id="log-outIcon"></i></a>`;
        }
        if (logBtnIndex == null) {
            logBtn.innerHTML = `${nomeLogin.nome}`;
            logBtn.innerHTML += `<a onclick='logout()'> <i class="bi bi-box-arrow-right ps-2 text-center" id="log-outIcon"></i></a>`;
        }
    }

    function clearLogError() {
        setTimeout(() => {
            logError.innerHTML = '&nbsp;';
        }, 2000);
    }

    logVuoto = (element) => {
        if (element.value == '') {
            erroreCampoVuoto(element.value, element);
        }
    }

    if (email.value == '' || password.value == '') {
        logError.innerHTML = 'Si prega di compilare i seguenti dati';
        clearLogError();
    }
    //errore bordo se inputfield vuoto
    logVuoto(email);
    logVuoto(password);
}


//login & sign up
var logForm = document.getElementById("logForm");
var regForm = document.getElementById("regForm");

loginForm = () => {
    logForm.classList.toggle("active");
    regForm.classList.remove("active");
};

registrati = () => {
    logForm.classList.remove("active");
    regForm.classList.toggle("active");
};

// show password login
logShowPass.addEventListener('click', () => {
    if (logShowPass.checked == true){
        logPass.type = "text";
    } else {
        logPass.type = "password";
    }
})