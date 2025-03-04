    //Exercício/Projeto: Amigo Secreto
    //Aluna: Ana Carolian Pucca Faria Romualdo
let amigos = [];
    //Função para armazenar nomes
function validarNome() {
    let nome = document.querySelector('#nomeAdicionado').value;
    if (amigos.includes(nome)) {
        alert(`O nome ${nome} já foi adicionado!`);
    }
    else if(nome == ''){
        alert(`Digite um nome para adicionar!`);
    }
    else {
        amigos.push(nome);
        limparListas();
        aparecerNomeAmigo();
        limparCampo('nomeAdicionado');
    }
}
    //Função para remover nome
function removerNome() {
    let nomeAmigo = document.querySelector('#nomeRemovido').value;
    if (nomeAmigo == '') {
        alert('Nenhum nome selecionado');
        limparCampo('nomeRemovido');
        return; // Adicione um retorno aqui para evitar continuar a execução
    }
    if (amigos.includes(nomeAmigo)) {
        amigos = amigos.filter((amigo) => amigo !== nomeAmigo);
        alert(`O nome ${nomeAmigo} foi excluído!`);
        limparCampo('nomeRemovido');
        limparListas();
        aparecerNomeAmigo();
    } else {
        alert(`O nome ${nomeAmigo} não foi adicionado!`);
    }
}
    //Função aparecer nome do amigo
function aparecerNomeAmigo() {
    let listaAmigos = document.querySelector('#listaAmigos');
    let listaResultado = document.querySelector('#listaResultado');
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
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
        if (amigos.length > 0) {
            let index = parseInt( Math.random() * amigos.length);
            let amigoSorteado = amigos[index];
            let listaResultado = document.querySelector('#listaResultado');
            listaResultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
            
        } 
        else {
            validarNome();
        } 
    //Função para novo sorteio
function novoSorteio() {
        aparecerNomeAmigo();
        sortearAmigo();
        limparListas();
        amigos = [];
    }
}
 
