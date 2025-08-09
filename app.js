let amigos = [];
function adicionarAmigo() {
    const input = document.getElementById("nome-amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    input.value = "";

    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";


    for (let i = 0; i < amigos.length; i++) {
     
        const item = document.createElement("li");
        item.textContent = amigos[i]; 

  
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

  
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    
    const nomeSorteado = amigos[indiceSorteado];


    const resultado = document.getElementById("resultado-sorteio");
    resultado.innerHTML = `🎉 Amigo(a) sorteado(a): <strong>${nomeSorteado}</strong>`;
}

