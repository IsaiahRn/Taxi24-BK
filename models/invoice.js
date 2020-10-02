const invoice = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    'Invoice',
    {
      amount: {
        type: DataTypes.STRING,
      },
    },
    {},
  );
  Invoice.associate = (models) => {
    Invoice.belongsTo(models.Trip, {
      foreignKey: 'tripId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return Invoice;
};

export default invoice;
