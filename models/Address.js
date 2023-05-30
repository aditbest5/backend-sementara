module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      address_name: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      province: {
        type: DataTypes.STRING,
      },
      geolocation: {
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
  Address.associate = (models) => {
    Address.hasMany(models.Profile, { foreignKey: "AddressId" });
    Address.hasOne(models.Warehouse, { foreignKey: "AddressId" });
  };
  return Address;
};
