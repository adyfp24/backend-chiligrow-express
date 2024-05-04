const request = require('supertest');
const app = require('../server');

describe('Test sensor API endpoint', () => {
    it('should get sensor data', async () => {
        const res = await request(app)
            .get('/api/v1/sensor-data')
          
        console.log(res.body);
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
    })
}) 