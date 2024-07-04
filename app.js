let numeroSecreto = 0;
let intentos = 0;
let rango = 10;
let numintentos = 5;
console.log(intentos);
function secreto() {
    rango = parseInt(document.getElementById('valorRango').value);
    numeroSecreto = Math.floor(Math.random()*rango)+1;
    mensaje('p',`Ingresa un numero entre el 1 al ${rango}`);
    console.log(numeroSecreto);

    

    return numeroSecreto;
}

function condicionesIniciales() {
    mensaje('p','Digita el rango a jugar');
    mensaje('h1','Juego adivina el número');
    intentos = 1;
    return;
}

function mensaje(elemento, texto) {
    let msj = document.querySelector(elemento);
    msj.innerHTML = texto;
    return;
}

function verificaIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numUsuario);
    if(intentos > numintentos){
        mensaje('h1','GAME OVER');
        mensaje('p',`Has alcanzado el numero maximo de intentos ${numintentos}`);
        document.getElementById('nuevo').removeAttribute('disabled');

    }else if (numUsuario === numeroSecreto){
        mensaje('p',`Acertaste!! Número correcto en ${intentos} ${intentos== 1 ?'intento':'intentos'}`);
        console.log('acertaste el numero es correcto');
        document.getElementById('nuevo').removeAttribute('disabled');

    }else if (numUsuario > numeroSecreto){
            mensaje('p',`Sigue intentando. El número es menor al ingresado! Te quedan ${numintentos-intentos} ${intentos == 1 ?'intentos':'intento'}`);
    }else{
            mensaje('p',`Sigue intentando. El número es mayor al ingresado! Te quedan ${numintentos-intentos} ${intentos == 1 ?'intentos':'intento'}`);
        }
        intentos++;
        document.querySelector('#valorUsuario').value = '';
    }
    


function limpiarCaja() {
    let limpio = document.querySelector('#valorUsuario').value = '';
    let vacio = document.getElementById('valorRango').value = '';
    return limpio, vacio;    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    let nuevo = document.querySelector('#nuevo').setAttribute('disabled','true');
    return nuevo;
}

condicionesIniciales();
