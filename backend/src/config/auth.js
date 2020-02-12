import 'dotenv/config';

export default {
  secret: process.env.APP_SECRET,
  expiresIn: process.env.AUTH_EXPIRESIN,
};
