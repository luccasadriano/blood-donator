
exports.up = function(knex) {
    return knex.schema.createTable('cidade', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.integer('id_bairro').references('id').inTable('bairro').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('cidade')
  
};
