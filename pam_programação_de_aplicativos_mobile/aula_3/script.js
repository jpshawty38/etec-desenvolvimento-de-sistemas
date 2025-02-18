// pegando elementos do html para criar as funções
const nome = document.getElementById('name');
const email = document.getElementById('email');
const telefone = document.getElementById('fone')
const container = document.getElementById("container")

const listaPessoas = [];
const Pessoa = {
    nome: String,
    email: String,
    telefone: String
}

function salvar() {

    const pessoa = Object.create(Pessoa); // Criação padrao de Objetp

    pessoa.nome = nome.value;
    pessoa.email = email.value;
    pessoa.telefone = telefone.value;

    listaPessoas.push(pessoa);



}

function listar() {
    container.innerHTML = ""
    for (let index = 0; index < listaPessoas.length; index++) {
        const cliente = listaPessoas[index];


        const data = document.createElement("div");
        data.classList.add("card"); // adicionando a classe ao elemento criado

        data.innerHTML = `
        <h2>${cliente.nome}</h2>
        <h3>${cliente.email}</h3>
        <h4>${cliente.telefone}</h4>
        `

        container.appendChild(data);

    }
}




