'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Store.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};