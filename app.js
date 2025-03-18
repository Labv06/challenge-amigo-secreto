// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreJugador = document.getElementById('amigo').value;
    // console.log(nombreJugador);
    if(nombreJugador === "" ){
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreJugador);
        // console.log(amigos);
        limpiarCaja();
        asignarTextoElemento();
        
    }

};

function limpiarCaja (){
    document.querySelector('#amigo').value = '';
};

function asignarTextoElemento () {
    let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    // 
    for (elemento of amigos) {
        let li = document.createElement('li');
        li.textContent = elemento;
        lista.appendChild(li);
    }
};

function sortearAmigo () {
    if (amigos.length == 0){
        alert('No hay amigos para sortear');
    } else {
        // console.log(amigos.length)
        let indiceAleatorio = Math.floor(Math.random() * (amigos.length ));
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[indiceAleatorio] ;
        amigos = [];
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
    }
};