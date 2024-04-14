'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sensor.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  Sensor.init({
    id_sensor: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nilai_kelembapan: { 
      type: DataTypes.FLOAT, 
      allowNull: false 
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references:{
        model:'Users',
        key: 'id_user'
      }
    },
  }, {
    sequelize,
    modelName: 'Sensor',
    tableName: 'Sensors'
  });
  return Sensor;
};