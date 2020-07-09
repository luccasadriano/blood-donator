
exports.up = function(knex) {
    return knex.schema.createTable('estado', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.integer('id_cidade').references('id').inTable('cidade').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('estado')
  
};
