import { Json } from 'sequelize/lib/utils';
import sequelize, { DataTypes } from '../config/database';
import dotenv from 'dotenv';
dotenv.config();
const User = require('../models/user')(sequelize, DataTypes);
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export const getAllUsers = async () => {
  const data = await User.findAll();

  return data;
};
export const newUser = async (body) => {
  const users = await User.findAll();

  const existingUser = users.find(user => user.dataValues.email === body.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};

export const deleteUser = async (id) => {
  await User.destroy({ where: { id: id } });
  return '';
};

export const getUser = async (id) => {
  const users = await User.findAll();
  id = parseInt(id);
  const existingUser = users.find(user => user.dataValues.id === id);
  console.log(existingUser);
  if (existingUser) {
    const data = await User.findByPk(id);
    return data;
  }
  else {
    throw new Error('User is not present');
  }
};

export const loginuser = async (body) => {
  const users = await User.findAll();
  const existingUser = users.find(user => user.dataValues.email === body.email && user.dataValues.password === body.password);
  if (existingUser) {
    const token = jwt.sign({ email: existingUser.email, role: existingUser.role }, process.env.SECRET_KEY);

    console.log('Login successful');
    return token;
  }
  else {
    throw new Error('User is not present');
  }
}
