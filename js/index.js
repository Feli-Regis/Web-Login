let validarNombreyApe = document.getElementById("input-name");
let validarEmail = document.getElementById("input-email");
let validarSexo = document.getElementById("select-gender");

let boton = document.getElementById("boton");


function enterData() {
    if (validateData()){

        let result = document.getElementById("result")
        result.innerText = "Registro exitoso. A la brevedad recibirá un correo con las instrucciones para acceder a nuestra plataforma.";

        let container = document.getElementById("success-container");
        container.style.display = "block";    

        let formContainer = document.getElementById("form-container");
        formContainer.style.display = "none";

    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function validateData() {
    if (validarNombreyApe.value.length < 3 || validarNombreyApe.value.length > 30) {
        let nombreyApe = document.getElementById("alert-nombre-apellido");
        nombreyApe.innerText = "Por favor, ingrese su nombre y apellido.";
        return false;
    }

    if (!validateEmail(validarEmail.value)) {
        let email = document.getElementById("alert-email")
        email.innerText = "Por favor, ingrese su email correctamente.";
        return false;
    }

    if (!validarSexo.value) {
        let sexo = document.getElementById("alert-sexo");
        sexo.innerText = "Por favor, ingrese una opcion.";
        return false;
    }
    return true;
}

boton.onclick = enterData;
