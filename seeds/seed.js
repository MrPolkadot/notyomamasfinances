const sequelize = require('../config/connection');
const { User, Bills, Expenses, Savings } = require('../models');

const userData = require('./userData.json');
const userBills = require('./userBills.json');
const userExpenses = require('./userExpenses.json');
const userSavings = require('./userSavings.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Bills.bulkCreate(userBills, {

  });
  await Expenses.bulkCreate(userExpenses, {
    
  });
  await Savings.bulkCreate(userSavings, {

  });

  

  process.exit(0);
};

seedDatabase();
