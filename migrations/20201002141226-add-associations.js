const associations = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Drivers',
      'LocationId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        underscore: true
      },
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn(
      'Drivers',
      'LocationId',
    );
  },
};
export default associations;
