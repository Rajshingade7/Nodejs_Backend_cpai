import { Json } from 'sequelize/lib/utils';
import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);

//get all users
export const getAllUsers = async () => {
  const data = await User.findAll();
  
  return data;
};
//create new user
export const newUser = async (body) => {
  const users = await User.findAll();
  // console.log(users+'done1');
  // console.log(body+'done2');
  const existingUser = users.find(user => user.dataValues.firstName === body.firstName);
  // console.log(existingUser);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const data = await User.create(body);
  return data;
};
//update single user
export const updateUser = async (id, body) => {
  await User.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single user
export const deleteUser = async (id) => {
  await User.destroy({ where: { id: id } });
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findByPk(id);
  return data;
};
