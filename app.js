let numeroSecreto =0;
let intentos = 0;
let listaNumeroSorteado=[]
let numeroMaximo = 10 

function asiganrTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    
    if (numeroDeUsuario === numeroSecreto){
        asiganrTextoElemento ('p', `Acertaste el numero ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el ususario no acerto 
        if (numeroDeUsuario > numeroSecreto){
            asiganrTextoElemento ('p', 'El numerosecreto es menor');
        } else {
            asiganrTextoElemento('p', 'El numero secreto es mayor');
        } 
        intentos ++;
        limpiarCaja()
    }
        return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario'). value = '';
   
 }


 function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumeroSorteado);
    //si ya sorteamos todos los numero 
    if (listaNumeroSorteado.length == numeroMaximo) {
        asiganrTextoElemento('p', 'ya se sortearon todos los numero posibles');
    } else {

        //si el numero generado esta uncluido en la lista 
         if(listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function consicionesIniciales() {
    asiganrTextoElemento('h1','Jego del numero secreto!'); 
    asiganrTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}
function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicacion de mensaje de numero
    //generar el numro alatorio
    //Iniciarlizar el contadore 
    consicionesIniciales();
    //deshabilitar el boton de juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

consicionesIniciales();