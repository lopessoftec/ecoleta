//quando a gente quer se referir ao tipo da variavel, então definimos com a primeira letra maiuscula
import Knex from 'knex';

// knex: Knex - knex do tipo Knex
export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('point');
}