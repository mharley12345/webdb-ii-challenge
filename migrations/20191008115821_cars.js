
exports.up = function(knex) {
    // create table with VIN, make,model,mileage columns
  return knex.schema.createTable('cars',function(tbl){
      tbl.increments('VIN');
      tbl.string('make',64).notNullable();
      tbl.string('model',64).notNullable();
      tbl.integer('milage',6).notNullable();
   
      tbl.enu('title_type',['clean','salvage','other']);
      tbl.enu('transmission_type', ['auto', 'manual'])
    ;

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
