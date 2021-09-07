const generateId = require("../utils/utils");

// ------------- GET Cursos -------------
async function getCursos(cliente){
    try {
        const resultado = await cliente.query('SELECT * FROM curso')
        return {
            'statusCode': 200,
            'msgRetorno': 'Cursos retornados com sucesso!',
            'cursos': resultado.rows 
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

async function getCursosById(cliente, codigoCurso){
    try {
        const resultado = await cliente.query(`SELECT * FROM curso WHERE codigo=${codigoCurso}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Cursos retornados com sucesso!',
            'cursos': resultado.rows 
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT Curso -------------
async function insCurso(cliente, descricao, ementa){
    try {
        await cliente.query(`INSERT INTO curso(codigo, descricao, ementa) VALUES (${generateId.generate(5)}, ${descricao}, ${ementa})`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Curso cadastrado com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- INSERT Curso -------------
async function updateCurso(cliente, descricao, ementa, codigo){
    try {
        await cliente.query(`UPDATE curso SET descricao=${descricao}, ementa=${ementa} WHERE codigo=${codigo}`)
        return {
            'statusCode': 200,
            'msgRetorno': 'Curso atualizado com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

// ------------- DEL Curso -------------
async function delCurso(){
    try {
        await cliente.query("DELETE FROM curso WHERE codigo  = 3")
        return {
            'statusCode': 200,
            'msgRetorno': 'Curso removido com sucesso!',
        }
    } catch (error) {
        return {
            'statusCode': 404,
            'msgRetorno': 'Operação não realizada, estamos com um problema no servidor :('
        }
    }
}

module.exports = { 
    getCursos,
    getCursosById,
    insCurso,
    updateCurso,
    delCurso,
};