/***********************************************************************************************
 * Objeivo: Controller responsavel pelo regra de negocio referente ao CRUD de fio
 * data: 11/02/2025 
 * autor: pedro souza 
 * versao 1.0
 *************************************************************************************************/

 //Função para tratar a atualizção de um novo filme no DAO
 const inserirFlime = async function(filme){
    let response = {}

    if( filme.nome = ''                 || filme.nome == undefined            || filme.nome == null            || filme.nome.lenght > 80            || 
        filme.duracao == ''             || filme.duracao == undefined         || filme.duracao == null         || filme.nome.lenght > 5             ||
        filme.sinopse == ''             || filme.sinopse == undefined         || filme.sinopse == null         || 
        filme.data_lancamentO == ''     || filme.data_lancamentO == undefined || filme.data_lancamentO == null || filme.data_lancamentO.lenght > 10 || 
        filme.foto_capa == undefined    || filme.foto_capa.lenght > 200       ||
        filme.link_trailer == undefined || filme.link_trailer.lenght > 200    
    
    )
    {
        response.status_code = 
        response.message = 'Os Atributos Fornecidos não estão de acordo. EX: Campos Obrigatórios'
    }
 }

 //Função para tratar a atualizção de um filme no DAO
 const atualizarFilme = async function(){

}

//Função para tratar a exclusão do DAO
const excluirFlime = async function(){

}

//Função para tratar o retorno de uma lista de filmes do DAO 
const ListarFlime = async function(){

}

//Função para tratar o retorno de um filme filtrando pelo ID do DAO 
const buscarFlime = async function(){

}
