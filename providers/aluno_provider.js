const alunoRepository = require("../repository/aluno_repository");

function runApiAluno(server, cliente){
    // ------------- REST API GET -------------
    server.get('/api/alunos', (req, res) => {
        alunoRepository.getAlunos(cliente).then((result) => {
            return res.json(result)
        });
    })

    server.get('/api/alunosById', (req, res) => {
        var codigoAluno = req.query['codigoAluno']
        alunoRepository.getAlunosById(cliente, codigoAluno).then((result) => {
            return res.json(result)
        });
    })

    // ------------- REST API POST -------------
    server.post('/api/alunos', (req, res) => {
        var nome = req.query['nome']
        alunoRepository.insAluno(cliente, nome).then((result) => {
            return res.json(result)
        });
    })
}

module.exports = { 
    runApiAluno,
};