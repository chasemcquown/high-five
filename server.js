//path module
const path = require('path');
// dotenv file for sensitive configuration information
require('dotenv').config();
// Express.js server
const express = require('express');
// All routes as defined in the controllers folder
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//const helpers = require("./utils/helpers");

/*
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
*/
// we pass this file to hbs in order to use the functionality within the helpers.js file

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));
//TODO: Uncomment section below once seeds and models are complete
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'));
});

//TODO: Remove port below once models and seeds are complete
//app.listen(PORT, () => console.log("Now listening"));
