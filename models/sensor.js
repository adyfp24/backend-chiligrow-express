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
      // define association here
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
  }, {
    sequelize,
    modelName: 'Sensor',
    tableName: 'Sensors'
  });
  return Sensor;
};