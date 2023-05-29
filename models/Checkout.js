module.exports = (sequelize, DataTypes) => {
  const Checkout_Item = sequelize.define(
    "Checkout_Item",
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

  return Checkout_Item;
};
