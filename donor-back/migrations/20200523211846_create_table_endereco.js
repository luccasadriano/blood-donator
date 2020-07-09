
exports.up = function(knex) {
    return knex.schema.createTable('endereco', table => {
        table.increments('id').primary()
        table.string('cep').notNull()
        table.string('logradouro').notNull()
        table.integer('numero').notNull()
        table.string('complemento').notNull()
        table.integer('id_doadores').references('id').inTable('doadores').notNull()
        table.integer('id_agendamento').references('id').inTable('agendamentos').notNull()
        //adicionar o relacionamento com a tabela clinicas-hospitais
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('endereco')
  
};
