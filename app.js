//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
    let amigos = [];

function adicionarNome() {
    let infoNome = document.getElementById("amigos");
    let amigosNome = infoNome.value.trim();

    if (!amigosNome) {
        alert("Adicione um nome!");
    }

    else {amigos.push(amigosNome);
    infoNome.value =  "";
    infoNome.focus();
    atualizacaoLista();
    }
}


function atualizacaoLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sorteioNome(){
    if (amigos.length < 3 ){
        alert("Por favor, adicione mais nomes.");
        return;
    } else{
        let nomeSorteado = amigos[Math.floor(Math.random()* amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.textContent = `O seu amigo secreto é ${nomeSorteado}!`;
}
}