
exports.up = function(knex) {
    return knex.schema.createTable('doadores', table => {
        table.increments('id').primary()
        table.string('cpf').notNull().unique()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.date('data_nascimento').notNull()
        table.string('senha').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('doadores')  
};
