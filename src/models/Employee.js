'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      gender:DataTypes.STRING,
      department: DataTypes.STRING,
      salary:DataTypes.INTEGER,
      start_date:DataTypes.DATE,
      notes:DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'employee'
    }
  );
  return employee;
};

