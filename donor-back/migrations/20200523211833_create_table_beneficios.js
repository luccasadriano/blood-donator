
exports.up = function(knex) {
    return knex.schema.createTable('beneficios', table => {
        table.increments('id').primary()
        table.string('nome_beneficio').notNull()
        table.integer('quantidade_agendamento').notNull()
        table.integer('pontos').notNull()
        table.string('nome_produto').notNull()
        table.decimal('valor_produto').notNull()
        table.integer('id_doadores').references('id').inTable('doadores').notNull()
        table.integer('id_agendamento').references('id').inTable('agendamentos').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('beneficios')
};
