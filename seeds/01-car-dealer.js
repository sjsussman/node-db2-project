
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {VIN: '1HGBH41JXMN109186'},
        {Make: 'Toyota'},
        {Model: 'Prius'},
        {Mileage: 20000},
        {Transmission_type: 'Automatic'},
        {Car_status: 'Clean'},
      ]);
    });
};
