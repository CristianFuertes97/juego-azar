let numeroSecreto = 0;
let intentos = 1;

function secreto() {
    let rango = parseInt(document.getElementById('valorRango').value);
    numeroSecreto = Math.floor(Math.random()*rango)+1;
    console.log(numeroSecreto);
    return numeroSecreto;
}

function mensaje(elemento, texto) {
    let msj = document.querySelector(elemento);
    msj.innerHTML = texto;
    return;
}

function verificaIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numUsuario);

    if (numUsuario === numeroSecreto){
        mensaje('p',`Acertaste!! Número correcto en ${intentos} ${intentos== 1 ?'intento':'intentos'}`);
        console.log('acertaste el numero es correcto');
    }else{
        if (numUsuario > numeroSecreto){
            mensaje('p','Sigue intentando. El número es menor al ingresado!');
        }else{
            mensaje('p','Sigue intentando. El número es mayor al ingresado');
        }
        intentos++;
        console.log(intentos);
    }
}