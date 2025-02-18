/***********************************************************************************************
 * Objeivo: Criar a comunicação com p banco d Dados para fazer o crud de filmes
 * data: 11/02/2025 
 * autor: pedro souza 
 * versao 1.0
 *************************************************************************************************/

 //import da biblioteca do prisma client para executar os scripts SQL
const {PrismaClient} = require('@prisma/client')

 //função para inserir um novo filme 
 const insertFilme = async function(filmes){
    //Instancia (criar um objeto a ser utilizado) a biblioteca do prisna/client
    const prisma = new PrismaClient()


    let sql = `insert into tbl_filme (nome,
                                        duracao,
                                        sinopse,
                                        data_lacamento,
                                        foto_capa,
                                        link_trailer,
                                        )
                                            values
                                            (
                                                ${filme.nome},
                                                ${filme.duracao},
                                                ${filme.sinopse},
                                                ${filme.data_lacamento},
                                                ${filme.foto_capa},
                                                ${filme.link_traler}
     
                                           )`
    
    
    //Executa o ScriptSQL no banco de dados e aguarda o retorno do Banco de Dados para 
    //saber se deu certo 
    let result = await prisma.$executeRawUnsafe(sql)
    //await é necessario por fazer o aguarde da função 
    if(result)
        return true
        else
            return falsem
 }

 //função para atualizar um filme existente
 const updateFilme = async function(){

 }

//função para excluir um filme existente 
 const deleteFilme = async function(){

 }

//função para retornar todos os filmes existentes
 const selectAllfilme = async function(){

 }

//função para buscar um filme pelo Id
 const selectByIdFilme = async function(){

 }


 module.exports = {
     insertFilme, 
     updateFilme,
     deleteFilme,
     selectAllfilme,
     selectByIdFilme
 }