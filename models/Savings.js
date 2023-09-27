// categories like: food, fun, entertainment, ect
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Savings extends Model {}

Savings.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    savings_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    savings_amount: {
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
    modelName: 'savings',
  }
);

module.exports = Savings;
