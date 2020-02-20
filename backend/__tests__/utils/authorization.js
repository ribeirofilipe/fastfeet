import request from 'supertest';
import app from '../../src/app';

async function getAuthorizationToken() {
  const response = await request(app)
    .post('/session')
    .send({
      email: 'admin@fastfeed.com',
      password: '123456',
    });

  return response.body.token;
}

export default getAuthorizationToken;
