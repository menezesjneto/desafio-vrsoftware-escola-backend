const generateId = require("../utils/utils");

// ------------- GET Alunos -------------
async function getAlunos(cliente){
    try {
        const resultado = await cliente.query('select * from aluno')
        return {
            'statusCode': 200,
            'msgRetorno': 'Alunos retornados com sucesso!',
            'alunos': resultado.rows 
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

async function getAlunosById(cliente, codigoAluno){
    try {
        const resultado = await cliente.query(`SELECT * FROM aluno WHERE codigo=${codigoAluno}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Alunos retornados com sucesso!',
            'alunos': resultado.rows 
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT Aluno -------------
async function insAluno(cliente, nome){
    try {
        await cliente.query(`INSERT INTO aluno(codigo, nome) VALUES (${generateId.generate(5)}, ${nome})`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno cadastrado com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT Aluno -------------
async function updateAluno(cliente, nome, codigo){
    try {
        await cliente.query(`UPDATE aluno SET nome=${nome} WHERE codigo=${codigo}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno atualizado com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- DEL Aluno -------------
async function delAluno(cliente, codigo){
    try {
        await cliente.query(`DELETE FROM aluno WHERE codigo=${codigo}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Aluno removido com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

  
module.exports = { 
    getAlunos,
    getAlunosById,
    insAluno,
    updateAluno,
    delAluno,
};