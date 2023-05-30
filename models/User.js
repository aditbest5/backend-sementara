module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
      reset_token: {
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

  User.associate = (models) => {
    User.hasOne(models.Profile, { foreignKey: "UserId" });
    User.hasOne(models.Warehouse, { foreignKey: "UserId" });
    User.belongsToMany(models.Stock, {
      through: models.Stock_Mutation,
      foreignKey: "UserId",
    });
  };

  return User;
};
