const sequelize = require('../config/connection');
const { User, Bills, Expenses, Income } = require('../models');

const userData = require('./userData.json');
const userBills = require('./userBills.json');
const userExpenses = require('./userExpenses.json');
const userIncome = require('./userIncome.json');

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
  await Income.bulkCreate(userIncome, {

  });

  

  process.exit(0);
};

seedDatabase();
