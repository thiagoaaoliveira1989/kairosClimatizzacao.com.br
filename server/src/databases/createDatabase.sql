/* CREATE DATABASE nomedodb; criar um db */

/* DROP TABLE nomododb; excluir um db */    

/* \l  lista todos os bancos de dado */

/* \c nomedodb  Seleciona o db; */

/* \dt consegue ver todas as tabelas do db; */

/* SELECT * FROM "nome_da_tabela"; */

/* INSERT INTO nomedatabela (col1, col2, col3) VALUES (val1, val2, val3); */



CREATE TABLE appointments (
  "id" SERIAL PRIMARY KEY,
  "name"  VARCHAR(255) NOT NULL,
  "telefone" VARCHAR(255) NOT NULL,
  "date" (255) NOT NULL,
  "time" VARCHAR(255) NOT NULL,
  "logradouro" VARCHAR(255) NOT NULL,
  "numero" VARCHAR(255) NOT NULL,
  "bairro" VARCHAR(255) NOT NULL,
  "cidade" VARCHAR(255) NOT NULL,
  "referencia" VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "updatedAt" TIMESTAMP NOT NULL
);
