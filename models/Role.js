// Requiring sequelize and specifically its Model and DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Setting up our table using Model
class Role extends Model {}

Role.init(
  // Inputting all of our columns and info for them
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    salary: {
      type: DataTypes.INTEGER
    }
  },
  // Giving information for our table/ other model options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);

module.exports = Role;