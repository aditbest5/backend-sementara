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
        defaultValue: false,
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

  //   User.associate = (models) => {
  //     User.hasOne(models.Profile, { foreignKey: "userId" });
  //     User.hasMany(models.Post, { foreignKey: "userId" });
  //     User.hasMany(models.Comment, { foreignKey: "userId" });
  //     User.hasMany(models.Post_Like, { foreignKey: "userId" });
  //     User.hasMany(models.Comment_Like, { foreignKey: "userId" });
  //     User.hasMany(models.Token, { foreignKey: "userId" });
  //   };

  return User;
};
