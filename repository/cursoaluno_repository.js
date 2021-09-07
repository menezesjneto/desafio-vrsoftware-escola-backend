const generateId = require("../utils/utils");

// ------------- GET CursosAlunos -------------
async function getCursosAlunos(cliente, codigo_curso){
    try {
        var resultado = null;
        codigo_curso = parseInt(codigo_curso);
        if(isNaN(codigo_curso)) resultado = await cliente.query('SELECT * FROM curso_aluno')
        else resultado = await cliente.query(`SELECT * FROM curso_aluno WHERE codigo_curso = ${codigo_curso}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Cursos com alunos retornados com sucesso!',
            'cursos': resultado.rows 
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT CursoAluno -------------
async function insCursoAluno(cliente, codigo_aluno, codigo_curso){
    try {
        await cliente.query(`INSERT INTO curso_aluno(codigo, codigo_aluno, codigo_curso) VALUES (${generateId.generate(5)}, ${codigo_aluno}, ${codigo_curso})`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno associado ao curso com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT CursoAluno -------------
async function updateCursoAluno(cliente){
    try {
        await cliente.query("UPDATE curso_aluno SET codigo_aluno = 3 WHERE codigo = 2")
        const resultado = await cliente.query('SELECT * FROM curso_aluno')
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno associado ao curso atualizado com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- DEL CursoAluno -------------
async function delCursoAluno(cliente){
    try {
        await cliente.query("DELETE FROM curso_aluno WHERE codigo  = 3")
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno associado ao curso removido com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

module.exports = { 
    getCursosAlunos,
    insCursoAluno,
    updateCursoAluno,
    delCursoAluno,
};