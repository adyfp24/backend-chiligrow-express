const { Sensor } = require('../models');

const readHumidity = async (id) => {
    try {
        const lastSensorData = await Sensor.findOne({
            where: {id_sensor : id},
            order: [['createdAt', 'DESC']]
        });
        return lastSensorData;
    } catch (error) {
        throw new Error('Failed to find last sensor data');
    }
}

const updateHumidity = async (id, nilai_kelembapan) => {
    try {
        const sensorData = await Sensor.findByPk(id);
        if (!sensorData) {
          throw new Error('Sensor data not found');
        }
        await sensorData.update({ nilai_kelembapan });
        return sensorData;
      } catch (error) {
        throw new Error('Failed to update sensor data');
      }
}

module.exports = {
    readHumidity,
    updateHumidity
}
