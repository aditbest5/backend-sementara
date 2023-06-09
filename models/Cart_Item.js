module.exports = (sequelize, DataTypes) => {
  const Cart_Item = sequelize.define(
    "Cart_Item",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      CartId: {
        type: DataTypes.INTEGER,
      },
      StockId: {
        type: DataTypes.INTEGER,
      },
      total_qty: {
        type: DataTypes.INTEGER,
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

  return Cart_Item;
};
