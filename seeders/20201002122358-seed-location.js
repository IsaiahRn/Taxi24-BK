const locationSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Batsinda',
          latitude: 1.9006,
          longitude: 30.0759,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'kagugu',
          latitude: 1.9053,
          longitude: 30.0810,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Gakinjiro',
          latitude: 1.9190,
          longitude: 30.0694,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Gisimenti',
          latitude: 1.9581,
          longitude: 30.1109,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Nyamata',
          latitude: 2.2072,
          longitude: 30.1445,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Kimironko',
          latitude: 1.9362,
          longitude: 30.1301,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {},
    );
  },

  down: () => {

  },
};

export default locationSeeder;
