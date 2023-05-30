module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      WarehouseId: {
        type: DataTypes.INTEGER,
      },
      ProductTypeId: {
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
  Stock.associate = (models) => {
    Stock.hasMany(models.Checkout_Item, { foreignKey: "StockId" });
    Stock.belongsToMany(models.Cart, {
      through: models.Cart_Item,
      foreignKey: "StockId",
    });
  };
  return Stock;
};
