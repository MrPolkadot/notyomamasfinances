// depending on how we want the bills to associate with the other models
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bills extends Model {}

Bills.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        bill_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // depends how we want to do dates
        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        // might need to see how the money npm we plan on using works
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
            },
        
        },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        }
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bills'
    }
);



module.exports = Bills;
