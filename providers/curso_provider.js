const cursoRepository = require("../repository/curso_repository");

function runApiCurso(server, cliente){
    // ------------- REST API GET -------------
    server.get('/api/cursos', (req, res) => {
        cursoRepository.getCursos(cliente).then((result) => {
            return res.json(result)
        });
    })

    server.get('/api/cursosById', (req, res) => {
        var codigoCurso= req.query['codigoCurso']
        cursoRepository.getCursosById(cliente, codigoCurso).then((result) => {
            return res.json(result)
        });
    })

    // ------------- REST API POST -------------
    server.post('/api/cursos', (req, res) => {
        var ementa = req.query['ementa'].replace('"', "'").replace('"', "'")
        var descricao = req.query['descricao'].replace('"', "'").replace('"', "'")
        cursoRepository.insCurso(cliente, descricao,  ementa).then((result) => {
            return res.json(result)
        });
    })
    server.post('/api/cursosUpdate', (req, res) => {
        var ementa = req.query['ementa'].replace('"', "'").replace('"', "'")
        var descricao = req.query['descricao'].replace('"', "'").replace('"', "'")
        var codigo = req.query['codigo']
        cursoRepository.updateCurso(cliente, descricao,  ementa, codigo).then((result) => {
            return res.json(result)
        });
    })
}

module.exports = { 
    runApiCurso,
};