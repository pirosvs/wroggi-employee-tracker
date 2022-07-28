// Requiring sequelize and specifically its Model and DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Setting up our table using Model
class Employee extends Model {}

Employee.init(
  // Inputting all of our columns and info for them
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    }
  },
  // Giving information for our table/ other model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Employee;
