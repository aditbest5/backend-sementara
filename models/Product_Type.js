module.exports = (sequelize, DataTypes) => {
  const Product_Type = sequelize.define(
    "Product_Type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      storage: {
        type: DataTypes.INTEGER,
      },
      color: {
        type: DataTypes.STRING,
      },
      price: {
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

  return Product_Type;
};
