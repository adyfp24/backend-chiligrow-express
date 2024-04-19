const request = require('supertest');
const app = require('../server');

describe('Test API Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
        no_hp: '123456789',
        alamat: 'Test Address',
        role: 'user'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toEqual('registrasi sukses');
    expect(res.body.data.username).toEqual('testuser');
  });

  it('should login with registered user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toEqual('login sukses');
    expect(res.body.token).toBeDefined();
  });

  it('should logout with authenticated user', async () => {
    // Assuming you have a valid token obtained after login
    const token = 'valid_access_token_here';
    const res = await request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.message).toEqual('logout sukses');
  });
});
