'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JenisBibit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisBibit.hasMany(models.HasilSimulasi, {
        foreignKey: 'jenis_bibit_id',
        as: 'hasil_simulasi'
      });
    }
  }
  JenisBibit.init({
    id_jenis_bibit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    jenis_bibit: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'JenisBibit',
    tableName: 'Jenis_Bibits'
  });
  return JenisBibit;
};