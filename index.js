const palos = ["corazon", "diamante", "pica", "trebol"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let superior = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let inferior = document.querySelector("#simboloAbajo");


function eleccionCarta(arr1, arr2){
    let carta =[]
    carta.push(arr1[Math.floor(Math.random()*arr1.length)]);
    carta.push(arr2[Math.floor(Math.random()*arr2.length)]);
    return carta
}
function asignarColor(arr){
    if(arr[0] === "corazon" || arr[0] === "diamante"){
        superior.style.color = "red";
        numero.style.color = "red";
        inferior.style.color = "red";
    }
    else{
        superior.style.color = "black";
        numero.style.color = "black";
        inferior.style.color = "black";
    }
}
function asignarPalo(arr){
    if(arr[0] === "corazon"){
        superior.innerHTML = "♥"
        inferior.innerHTML = "♥"
    }
    else if(arr[0] === "diamante"){
        superior.innerHTML = "♦"
        inferior.innerHTML = "♦"
    }
    else if(arr[0] === "trebol"){
        superior.innerHTML = "♣"
        inferior.innerHTML = "♣"
    }
    else{
        superior.innerHTML = "♠"
        inferior.innerHTML = "♠"
    }
}
function asignarValor(arr){
    numero.innerHTML = arr[1];
}
function generacionCarta(){
    let carta = eleccionCarta(palos, valores);
    asignarColor(carta);
    asignarPalo(carta);
    asignarValor(carta);
}

window.onload = function(){generacionCarta()}
document.querySelector