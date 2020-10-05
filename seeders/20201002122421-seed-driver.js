const DriverSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Drivers', [{
      names: 'Peter',
      available: true,
      LocationId: 2,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Clever',
      available: false,
      LocationId: 1,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Kwizera',
      available: true,
      LocationId: 5,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Patrick',
      available: true,
      LocationId: 3,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});
  },

  down: () => {

  },
};
export default DriverSeeder;
