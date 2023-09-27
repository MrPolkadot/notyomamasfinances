// const Bills = require("./models/Bills");
// const Expenses = require("./models/Expenses");
// const Savings = require("./models/Savings");
// const User = require("./models/User");
// // models
const express = require('express');
const session = require('express-session');
const routes = require('./controllers'); //Create routes
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ defaultLayout: 'main' }); //This will use main.handlebars as our main layout page.

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// May need to change this
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

//app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//app.set('views', path.join(__dirname, './views/layouts'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')))

app.use(routes);

app.get('/', (req, res) => {
  
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

