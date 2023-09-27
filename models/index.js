const Bills = require("./Bills");
const Expenses = require("./Expenses");
const Savings = require("./Savings");
const User = require("./User");

User.hasMany(Bills, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Expenses, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Savings, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Bills.belongsTo(User, {
    foreignKey: "user_id",
});

Expenses.belongsTo(User, {
    foreignKey: "user_id",
});

Savings.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Bills, Expenses, Savings };