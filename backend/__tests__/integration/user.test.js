import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../src/app';
import truncate from '../utils/truncate';
import factory from '../utils/factories';

jest.mock('../../src/app/middlewares/auth', () => {
  return jest.fn((req, res, next) => {
    return next()
  });
});

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  // it('should encrypt user password when new user created', async() => {
  //   const user = await factory.create('User', {
  //     password: '123456'
  //   });

  //   const compareHash = await bcrypt.compare('123456', user.password_hash);

  //   expect(compareHash).toBe(true);
  // })

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/users')
      .send(user);

    expect(response.body).toHaveProperty('id');
  });
});
