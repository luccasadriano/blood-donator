
exports.up = function(knex) {
    return knex.schema.createTable('telefone', table => {
        table.increments('id').primary()
        table.string('numero').notNull()
        table.integer('id_doadores').references('id').inTable('doadores').notNull()
        table.integer('id_agendamento').references('id').inTable('agendamentos').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefone')
  
};
