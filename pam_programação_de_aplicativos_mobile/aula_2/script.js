// pegando elementos do html para criar as funções
const nome = document.getElementById('name');
const email = document.getElementById('email');
const telefone = document.getElementById('fone')
const container = document.getElementById("container")

const listaNome = [];
const listaEmail = [];
const listaTelefone = [];

const Pessoa = {
    nome: String,
    email: String,
    telefone: String
}

function salvar() {

    const pessoa = Object.create(Pessoa); // Criação padrao de Objetp

    pessoa.nome = nome.value
    pessoa.email = email.value
    pessoa.telefone = telefone.value

    listaPessoas.push(pessoa);


    listaNome.push(nome.value);
    listaEmail.push(email.value);
    listaTelefone.push(telefone.value);


}

function listar() {
    for (let index = 0; index < listaEmail.length; index++) {

        const criarNome = listaNome[index];
        const criarEmail = listaEmail[index];
        const criarTelefone = listaTelefone[index];

        const data = document.createElement("div");
        data.classList.add("card"); // adicionando a classe ao elemento criado

        data.innerHTML = `
        <h2>${criarNome}</h2>
        <h3>${criarEmail}</h3>
        <h4>${criarTelefone}</h4>
        `

        container.appendChild(data);

    }
}




