import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');

    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];
    const user = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    console.log("---------->",user);
    res.locals.user = user;
    if (user.role !== 'admin') {
      throw {
        code: HttpStatus.FORBIDDEN,
        message: 'Access forbidden. User does not have the required role.'
      };
    }    res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};
