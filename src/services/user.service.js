import { Json } from 'sequelize/lib/utils';
import sequelize, { DataTypes } from '../config/database';
import dotenv from 'dotenv';
dotenv.config();
const User = require('../models/user')(sequelize, DataTypes);
const jwt = require('jsonwebtoken');

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
  const users = await User.findAll();
  // console.log(users);
  // console.log(id);
  id=parseInt(id); // Here parse int is necessory so dut to this
  const existingUser = users.find(user => user.dataValues.id === id);
  console.log(existingUser);
  if(existingUser){
    const data = await User.findByPk(id);
    return data;
  }
  else{
    throw new Error('User is not present');
  }
};

export const loginuser=async(body)=>{
  console.log(body);
  const users = await User.findAll();
  const existingUser = users.find(user => user.dataValues.email === body.email && user.dataValues.password===body.password);
  if(existingUser){
    // console.log(existingUser.dataValues.id);
    const token=jwt.sign({email:existingUser.email,role:existingUser.role},process.env.SECRET_KEY);
    
    console.log('Login successful');
    return token;
  }
  else{
    throw new Error('User is not present');
  }
}
