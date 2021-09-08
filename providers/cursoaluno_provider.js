const cursoAlunoRepository = require("../repository/cursoaluno_repository");

function runApiCursoAluno(server, cliente){
    // ------------- REST API GET -------------
    server.get('/api/cursosalunos', (req, res) => {
        cursoAlunoRepository.getCursosAlunos(cliente).then((result) => {
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

    server.post('/api/cursoalunobyidcurso', (req, res) => {
        var codigo_curso = Number(req.query['codigoCurso'].replace('"', "'").replace('"', "'"))
        cursoAlunoRepository.getCursosAlunosByidCurso(cliente, codigo_curso).then((result) => {
            return res.json(result)
        });
    })

    server.post('/api/cursoalunobyidaluno', (req, res) => {
        var codigo_aluno = Number(req.query['codigoAluno'].replace('"', "'").replace('"', "'"))
        cursoAlunoRepository.getCursosAlunosByidAluno(cliente, codigo_aluno).then((result) => {
            return res.json(result)
        });
    })
}

module.exports = { 
    runApiCursoAluno,
};