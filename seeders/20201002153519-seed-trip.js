const tripSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Trips',
      [
        {
          startLocation: 'Batsinda',
          endLocation: 'kagugu',
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'kagugu',
          endLocation: 'Gakinjiro',
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'Kimironko',
          endLocation: 'Batsinda',
          completed: true,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {},
    );
  },

  down: () => {},
};
export default tripSeeder;
