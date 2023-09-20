import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

import { jwtsecretuserkey, jwtsecretadminkey, jwtexpires } from '../config/environment.js';

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtsecretuserkey,
    },
    async (payload, done) => {
      try {
        const userId = payload.userId;
        return done(null, userId !== null ? userId : false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.use(
  'jwtadmin',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtsecretadminkey,
    },
    async (payload, done) => {
      try {
        const { userId, admin } = payload;
        if (userId !== null && admin) {
          return done(null, userId);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;

export const generateJwtToken = (userId: string) => {
  const payload = {
    userId,
    admin: false,
  };
  const options: jwt.SignOptions = {
    expiresIn: jwtexpires,
  };
  return jwt.sign(payload, jwtsecretuserkey, options);
};

export const generateAdminJwtToken = (userId: string) => {
  const payload = {
    userId,
    admin: true,
  };
  const options: jwt.SignOptions = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, jwtsecretadminkey, options);
};
