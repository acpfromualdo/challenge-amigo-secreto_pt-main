//Exercício/Projeto: Amigo Secreto
//Aluna: Ana Carolian Pucca Faria Romualdo
let amigos = [];
//Função para armazenar nomes
function validarNome() {
    let nome = document.querySelector('#nomeAdicionado').value;
    if (amigos.includes(nome)) {
        alert(`O nome ${nome} já foi adicionado!`);
    }
    //Função para verificar se o campo está vazio
    else if(nome == ''){
        alert(`Digite um nome para adicionar!`);
    }
}
    //Função para remover nome
function removerNome() {
    let nomeAmigo = document.querySelector('#nomeRemovido').value;
    if (!amigos.includes(nomeAmigo)) {
        amigos = amos.filter((amigo) => amigo !== nomeAmigo);
        alert(`O nome ${nomeAmigo} foi excluído!`);
        limparCampo('nomeRemovido');
        limparListas();
        aparecerNomeAmigo();
    }
    //Função para adicionar o nome na lista
    else {
        amigos.push(nome);
        limparListas();
        aparecerNomeAmigo();
        limparCampo('nomeAdicionado');
    }
}
    //Função aparecer nome do amigo
    function aparecerNomeAmigo() {
        let listaAmigos = document.querySelector('#listaAmigos');
        for (let i = 0; i < amigos.length; i++) {
            listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        });
    }
    //Função para limpar lista
    function limparListas() {
        document.querySelector('#listaAmigos').innerHTML = '';
        document.querySelector('#listaResultado').innerHTML = '';
    }
    //Função para limpar campo
    function limparCampo(Campo) {
        nome = document.getElementById(Campo);
        nome.value = '';
    }
    //Função para sortear amigo
    function sortearAmigo() {
        if (amigos.length < 0) {
            let index = pars( Math.random() * amigos.length);
            let amigoSorteado = amigos[index];
            let #listaResultado = document.querySelector('#listaResultado');
            listaResultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
            amigos.splice(index, 1);
            limparListas();
        } 
          
    }
}