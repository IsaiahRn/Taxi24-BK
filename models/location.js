const location = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      name: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {},
  );
  Location.associate = (models) => {
    Location.hasMany(models.Driver, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Location;
};
export default location;
