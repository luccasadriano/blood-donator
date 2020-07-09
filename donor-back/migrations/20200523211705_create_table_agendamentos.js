
exports.up = function(knex) {
    return knex.schema.createTable('agendamentos', table => {
        table.increments('id').primary()
        table.decimal('peso').notNull()
        //table.string('documento', 1000)
        table.string('tipo_sanguineo').notNull()
        table.string('sexo').notNull()
        table.boolean('bebidas_alcoolicas').notNull().defaultTo(false)
        table.boolean('usuario_tabaco').notNull().defaultTo(false)
        table.boolean('drogas_ilicitas').notNull().defaultTo(false)
        table.boolean('doenca_infecciosas').notNull().defaultTo(false)
        table.string('nome_doenca')
        table.date('data_agendamento').notNull()
        table.string('horas_doacao')
        table.integer('id_doadores').references('id').inTable('doadores').notNull()

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('agendamentos')
  
};
