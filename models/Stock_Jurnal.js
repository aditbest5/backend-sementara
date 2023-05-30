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
      WarehouseId: {
        type: DataTypes.INTEGER,
      },
      StockId: {
        type: DataTypes.INTEGER,
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
  Stock_Jurnal.associate = (models) => {
    Stock_Jurnal.belongsTo(models.Tipe_Jurnal, { foreignKey: "TipeJurnalId" });
  };
  return Stock_Jurnal;
};
