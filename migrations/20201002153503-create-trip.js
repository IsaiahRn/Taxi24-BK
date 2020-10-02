const tripMigration = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      startLocation: {
        type: Sequelize.STRING,
      },
      endLocation: {
        type: Sequelize.STRING,
      },
      driverId: {
        type: Sequelize.INTEGER,
      },
      riderId: {
        type: Sequelize.INTEGER,
      },
      completed: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Trips');
  },
};
export default tripMigration;
