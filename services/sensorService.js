const { Sensor } = require('../models').Sensor;

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
        const sensorData = Sensor.update(
            { nilai_kelembapan: nilai_kelembapan },
            { where: { id_sensor: id } }
          );
        return sensorData;
      } catch (error) {
        throw new Error('Failed to update sensor data');
      }
}

module.exports = {
    readHumidity,
    updateHumidity
}
