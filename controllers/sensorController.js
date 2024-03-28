const sensorService = require('../services/sensorService');

const sensorHandler = async (message) => {
    try {
        const nilai_kelembapan = parseFloat(message.utf8Data);
        const lastHumidity = await sensorService.readHumidity();
        const updatedHumitidy = await sensorService.updateHumidity(1, nilai_kelembapan);
        console.log('Sensor data saved/updated successfully', lastHumidity, updatedHumitidy);
    } catch (error) {
        console.error('Error saving/updating sensor data:', error);
    }
}

module.exports = {
    sensorHandler,
}
