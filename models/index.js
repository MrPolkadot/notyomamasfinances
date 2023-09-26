const Bills = require("./Bills");
const Expenses = require("./Expenses");
const Savings = require("./Savings");
const User = require("./User");

User.hasMany(Bills, {
    foreignKey: 'bills_id',
    onDelete: 'CASCADE',
});

User.hasMany(Expenses, {
    foreignKey: 'expenses_id',
    onDelete: 'CASCADE',
});

User.hasMany(Savings, {
    foreignKey: 'savings_id',
    onDelete: 'CASCADE',
});

Bills.belongsTo(User, {
    foreignKey: "bills_id",
});

Expenses.belongsTo(User, {
    foreignKey: "expenses_id",
});

Savings.belongsTo(User, {
    foreignKey: "savings_id",
});

module.exports = { Bills, Expenses, Savings};