
exports.up = function(knex) {
    return knex.schema.createTable('clinicas-hospitais', table => {
        table.increments('id').primary()
        table.string('cnpj').notNull().unique()
        table.string('razao_social').notNull()
        table.string('email').notNull().unique()
        table.string('senha').notNull()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('clinicas-hospitais')  
};
