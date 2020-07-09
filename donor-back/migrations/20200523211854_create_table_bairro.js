
exports.up = function(knex) {
    return knex.schema.createTable('bairro', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.integer('id_endereco').references('id').inTable('endereco').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('bairro')
};
