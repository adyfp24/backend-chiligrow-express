const request = require('supertest');
const app = require('../server');

describe('Test profile API endpoint', () => {
    it('should get profile user with valid authorization token', async () => {      
        const authRes = await request(app)
            .post('/api/v1/login')
            .send({
                username: 'test05',
                password: '123'
            });
            
        const authToken = authRes.header('Authorization').split(' ')[1];

        const res = await request(app)
            .get('/api/v1/profile')
            .set('Authorization', `Bearer ${authToken}`);
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
        expect(res.body.data.username).toEqual('test05');
    });

    it('should return 401 unauthorized without authorization token', async () => {
        const res = await request(app)
            .get('/api/v1/profile');
    
        expect(res.statusCode).toEqual(401);
    });
});
