//  DESAFIO VR SOFTWARE
//  Teste Prático - Programador Mobile 
//  Candidato: José Maria S.M. Neto (Desenvolvedor Flutter)
//  menezesneto13@hotmail.com
//  Viva a Tecnologia! Viva o Flutter! <3


// ------------- Init SERVER -------------
const cursoProvider = require("./providers/curso_provider");
const alunoProvider = require("./providers/aluno_provider");
const cursoAlunoProvider = require("./providers/cursoaluno_provider");

const express = require('express')
const server = express()
server.listen(3000, () =>{
    try {
        cliente.connect()
        console.log("conexao com o banco e servidor funcionando")
    } catch (error) {
        cliente.end()
        console.log("conexao com o banco encerrado")
    }
})


// ------------- Init DB -------------
const Client = require('pg').Client
const cliente = new Client({
    user: 'postgres',
    password: '123456',
    host: '127.0.0.1',
    port: 5432,
    database: 'escola'
})

// ------------- Run APIS -------------
cursoProvider.runApiCurso(server, cliente)
alunoProvider.runApiAluno(server, cliente)
cursoAlunoProvider.runApiCursoAluno(server, cliente)

