'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JenisPupuk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisPupuk.hasMany(models.HasilSimulasi, {
        foreignKey: 'jenis_pupuk_id',
        as: 'hasil_simulasi'
      });
    }
  }
  JenisPupuk.init({
    id_jenis_pupuk: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    jenis_pupuk: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'JenisPupuk',
    tableName: 'Jenis_Pupuks'
  });
  return JenisPupuk;
};