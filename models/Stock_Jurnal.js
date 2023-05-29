module.exports = (sequelize, DataTypes) => {
  const Stock_Jurnal = sequelize.define(
    "Stock_Jurnal",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      remarks: {
        type: DataTypes.STRING,
      },
      qty: {
        type: DataTypes.INTEGER,
      },
      stock_before: {
        type: DataTypes.INTEGER,
      },
      stock_after: {
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

  return Stock_Jurnal;
};
