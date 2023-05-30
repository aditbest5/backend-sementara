module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define(
    "Warehouse",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      warehouse_name: {
        type: DataTypes.STRING,
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
  Warehouse.associate = (models) => {
    Warehouse.belongsToMany(models.User, {
      through: models.Stock_Mutation,
      foreignKey: "WarehouseId",
    });
    Warehouse.belongsToMany(models.Product_Type, {
      through: models.Stock,
      foreignKey: "WarehouseId",
    });
    Warehouse.belongsToMany(models.Stock, {
      through: models.Stock_Jurnal,
      foreignKey: "WarehouseId",
    });
  };

  return Warehouse;
};
