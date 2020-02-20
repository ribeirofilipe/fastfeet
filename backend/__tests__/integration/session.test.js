import request from 'supertest';
import app from '../../src/app';

import User from '../../src/app/models/User';

import getAuthorizationToken from '../utils/authorization';

describe('Session', () => {
  it('Admin must be able to authenticate', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'admin@fastfeed.com',
        password: '123456',
      });

    expect(response.body).toHaveProperty('token');
  });

  // it('Admin login fields are required', async () => {
  //   const response = await request(app)
  //     .post('/session')
  //     .send({
  //       email: 'admin@fastfeed.com',
  //     });

  //   expect(response.status).toBe(400);
  // });

  // it('Admin user must exist', async () => {
  //   const response = await request(app)
  //     .post('/session')
  //     .send({
  //       email: 'admin2@gympoint.com',
  //       password: '123456',
  //     });

  //   expect(response.status).toBe(400);
  // });

  // it('Admin user password must fail', async () => {
  //   const response = await request(app)
  //     .post('/session')
  //     .send({
  //       email: 'admin@fastfeed.com',
  //       password: '1234567',
  //     });

  //   expect(response.status).toBe(400);
  // });

  // it('json web token is required for all admin requests', async () => {
  //   const response = await request(app).get('/user');

  //   expect(response.status).toBe(401);
  //   expect(response.body).toHaveProperty('error');
  // });

  // it('json web token should be valid', async () => {
  //   const token = await getAuthorizationToken();
  //   const response = await request(app)
  //     .get('/user')
  //     .set('Authorization', `Bearer ${token}fdsa`);

  //   expect(response.status).toBe(401);
  //   expect(response.body).toHaveProperty('error');
  // });
});
