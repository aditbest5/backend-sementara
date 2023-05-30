module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      product_name: {
        type: DataTypes.STRING,
      },
      image_product: {
        type: DataTypes.STRING,
      },
      desc: {
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
  Product.associate = (models) => {
    Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
    Product.hasMany(models.Product_Type, { foreignKey: "ProductId" });
  };

  return Product;
};
