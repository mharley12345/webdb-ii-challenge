
exports.up = function(knex) {
    // create table with VIN, make,model,mileage columns
  return knex.schema.createTable('cars',function(tbl){
      tbl.increments()
      tbl.string('VIN',17).unique().notNullable();
      tbl.string('make',64).notNullable();
      tbl.string('model',64).notNullable();
      tbl.string('mileage',6).notNullable();
   
      tbl.enu('title_type',['clean','salvage','other']);
      tbl.enu('transmission_type', ['auto', 'manual'])
    ;

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
