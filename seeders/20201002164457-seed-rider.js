const riderSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Riders', [{
      names: 'Sean',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Frank',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      names: 'Micheal',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }], {});
  },

  down: () => {

  },
};
export default riderSeeder;
