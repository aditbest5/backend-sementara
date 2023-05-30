module.exports = (sequelize, DataTypes) => {
  const Checkout = sequelize.define(
    "Checkout",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
      },
      struk_image: {
        type: DataTypes.STRING,
      },
      shipping_price: {
        type: DataTypes.INTEGER,
      },
      total_qty: {
        type: DataTypes.INTEGER,
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
      total_price: {
        type: DataTypes.INTEGER,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      expiredTime: {
        type: DataTypes.DATE,
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
  Checkout.associate = (models) => {
    Checkout.belongsTo(models.Checkout_Item, { foreignKey: "CheckoutItemId" });
  };

  return Checkout;
};
