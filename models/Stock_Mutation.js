module.exports = (sequelize, DataTypes) => {
  const Stock_Mutation = sequelize.define(
    "Stock_Mutation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
      },
      StockId: {
        type: DataTypes.INTEGER,
      },
      WarehouseId: {
        type: DataTypes.INTEGER,
      },
      notes: {
        type: DataTypes.STRING,
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        defaulValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {}
  );

  return Stock_Mutation;
};
