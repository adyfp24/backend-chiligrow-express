const penyiramanService = require('../services/penyiramanService');

const sensorHandler = async (message) => {
    try {
        const nilai_kelembapan = parseFloat(message.utf8Data);
        const lastHumidity = await penyiramanService.readHumidity();
        if (!lastHumidity) {
            await SensorService.updateHumidity(nilai_kelembapan);
        };   
        console.log('Sensor data saved/updated successfully');
    } catch (error) {
        console.error('Error saving/updating sensor data:', error);
    }
}

module.exports = {
    sensorHandler,
}