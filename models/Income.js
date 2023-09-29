// categories like: food, fun, entertainment, ect
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Income extends Model {}

Income.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    income_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'income',
  }
);

module.exports = Income;
