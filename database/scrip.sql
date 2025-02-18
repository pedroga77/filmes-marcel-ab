#cria um novo database
create database db_controle_filmes_ab;

#utiliza o database
use db_controle_filmes_ab;


#criação da tabela de filme 
create table tbl_filme(
	id     			int not null primary key	auto_increment,
    nome 			varchar(80) not null,
    duracao 		time not null,
    sinopse 		text not null,
    data_lacamento	date not null,
    foto_capa 		varchar(200),
    link_trailer 	varchar(200)
);
