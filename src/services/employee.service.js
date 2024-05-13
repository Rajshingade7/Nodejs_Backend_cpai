import sequelize, { DataTypes } from '../config/database';
import dotenv from 'dotenv';
dotenv.config();
const Employee = require('../models/Employee')(sequelize, DataTypes);

export const createEmployee = async (body) => {
    const data = await Employee.create(body);
    return data;
};

export const getallEmployee = async () => {
    const data = await Employee.findAll();

    return data;
};

export const deletedEmployee = async (id) => {
    await Employee.destroy({ where: { id: id } });
    return '';
  };
  