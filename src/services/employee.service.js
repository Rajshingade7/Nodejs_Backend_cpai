import sequelize, { DataTypes } from '../config/database';
import dotenv from 'dotenv';
dotenv.config();
const Employee = require('../models/Employee')(sequelize, DataTypes);

export const createEmployee = async (body) => {
    // const employee = await Employee.findAll();
    // console.log(employee);
    // // console.log(body+'done2');
    // const existingUser = employee.find(user => user.dataValues.firstName === body.firstName);
    // // console.log(existingUser);
    // if (existingUser) {
    //   throw new Error('User already exists');
    // }

    const data = await Employee.create(body);
    return data;
};

export const getallEmployee = async () => {
    const data = await Employee.findAll();
  
    return data;
  };