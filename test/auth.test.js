const request = require('supertest');
const app = require('../server');

describe('Test auth API Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/v1/register')
      .send({
        username: 'test04',
        email: 'testuser@example.com',
        password: 'password123',
        no_hp: '123456789',
        alamat: 'Test Address',
        role: 'petani',
      });
    console.log(res.body);
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toEqual('registrasi sukses');
    expect(res.body.data.username).toEqual('test04');
    
  });

  it('should login with registered user', async () => {
    const res = await request(app)
      .post('/api/v1/login')
      .send({
        username: 'test03',
        password: '123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toEqual('Login sukses');
    expect(res.body.token).toBeDefined();
  });
});
