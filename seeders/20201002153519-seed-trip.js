const tripSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Trips',
      [
        {
          startLocation: 'Batsinda',
          endLocation: 'kagugu',
          driverId: 1,
          riderId: 2,
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'kagugu',
          endLocation: 'Gakinjiro',
          driverId: 3,
          riderId: 1,
          completed: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startLocation: 'Kimironko',
          endLocation: 'Batsinda',
          driverId: 2,
          riderId: 3,
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
