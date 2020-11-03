
exports.up = function(knex) {
  return knex.schema.createTable("car-dealer", tbl => {
      //create a prinary key that auto increments
      tbl.increments("id");
      //add a string column, max 17 chars, will not allow dupes, is required
      tbl.string("VIN", 17)
      .unique()
      .notNullable();
      tbl.string("Make", 50)
      .notNullable();
      tbl.string("Model", 50)
      .notNullable();
      tbl.integer("Mileage")
      .notNullable();
      tbl.string("Transmission_type", 30)
      tbl.string("Car_status", 128)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car-dealer")
};
