const locationSeeder = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Batsinda',
          latitude: 1.9685,
          longitude: 30.0671,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'kagugu',
          latitude: 1.9062,
          longitude: 30.1737,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Gakinjiro',
          latitude: 1.977,
          longitude: 30.2224,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Biryogo',
          latitude: 2.6078,
          longitude: 29.7368,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Gisimenti',
          latitude: 2.2072,
          longitude: 30.1445,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Downtown',
          latitude: 2.5303,
          longitude: 29.1856,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Nyamata',
          latitude: 1.3782,
          longitude: 30.4358,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          name: 'Kimironko',
          latitude: 1.9912,
          longitude: 30.0463,
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
