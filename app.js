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
    //Função para adicionar o nome na lista
    else {
        amigos.push(nome);
        limparListas();
        aparecerNomeAmigo();
        limparCampo('nomeAdicionado');
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
}