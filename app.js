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