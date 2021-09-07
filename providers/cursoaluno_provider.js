const cursoAlunoRepository = require("../repository/cursoaluno_repository");

function runApiCursoAluno(server, cliente){
    // ------------- REST API GET -------------
    server.get('/api/cursosalunos', (req, res) => {
        console.log(req.query['codigocurso'])
        var codigo_curso = req.query['codigocurso']
        cursoAlunoRepository.getCursosAlunos(cliente, codigo_curso).then((result) => {
            return res.json(result)
        });
    })

    // ------------- REST API POST -------------
    server.post('/api/cursoaluno', (req, res) => {
        var codigo_aluno = parseInt(req.query['codigoAluno'])
        var codigo_curso = parseInt(req.query['codigoCurso'])
        cursoAlunoRepository.insCursoAluno(cliente, codigo_aluno,  codigo_curso).then((result) => {
            return res.json(result)
        });
    })
}

module.exports = { 
    runApiCursoAluno,
};