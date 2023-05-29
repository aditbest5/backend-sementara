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
      notes: {
        type: DataTypes.STRING,
      },
      isApproved: {
        type: DataTypes.BOOLEAN,
        defaulValue: false,
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
