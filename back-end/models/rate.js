'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate(models) {
      Rate.belongsTo(models.User, { foreignKey: 'user_id' })
      Rate.belongsTo(models.Store, { foreignKey: 'store_id' })
    }
  }
  Rate.init({
    amount: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};