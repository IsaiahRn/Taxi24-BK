const trip = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    'Trip',
    {
      startLocation: DataTypes.STRING,
      endLocation: DataTypes.STRING,
      driverId: DataTypes.INTEGER,
      riderId: DataTypes.INTEGER,
      completed: {
        type: DataTypes.BOOLEAN,
        AllowNull: false,
        defaultValue: false,
      },
    },
    {},
  );
  Trip.associate = (models) => {
    Trip.hasMany(models.Trip, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Trip;
};

export default trip;
