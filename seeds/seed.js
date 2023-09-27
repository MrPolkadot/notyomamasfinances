const sequelize = require('../config/connection');
const { User, Bills, Expenses, Savings } = require('../models');

const userData = require('./userData.json');
const userBills = require('./userBills.json');
const userExpenses = require('./userExpenses.json');
const userSavings = require('./userSavings.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //for (const project of projectData) {
   // await Project.create({
      //...project,
     // user_id: users[Math.floor(Math.random() * users.length)].id,
    //});
//  }

  process.exit(0);
};

seedDatabase();
