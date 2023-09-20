import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT;
export const jwtsecretuserkey = process.env.JWTSECRETUSERKEY;
export const jwtsecretadminkey = process.env.JWTSECRETADMINKEY;
export const jwtexpires = process.env.JWTEXPIRES;
//# sourceMappingURL=environment.js.map