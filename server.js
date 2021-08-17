//path module
const path = require('path');
// dotenv file for sensitive configuration information
require('dotenv').config();
// Express.js server
const express = require('express');
// All routes as defined in the controllers folder
const routes = require('./controllers/');
const sequelize = require('./config/connection');

//requiring the the Express - Handlebars library
const exphbs = require('express-handlebars');

// requiringHandlebars templating engine for this app
const Handlebars = require('handlebars');

// configuring express-handlebars as our view engine
const hbs = exphbs.create({});

// Creating the express app
const app = express();

// Setting the process environment PORT
const PORT = process.env.PORT || 3001;

// creating and managing the express-session identifier
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Faker.js was used during the development phase to test data
const FakerHandlebarsHelper = require('handlebars-faker');
Handlebars.registerHelper('faker', FakerHandlebarsHelper);

//const helpers = require("./utils/helpers");

const sess = {
	secret: 'Super secret secret',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
app.use(session(sess));

// we pass this file to hbs in order to use the functionality within the helpers.js file
//Handlebars for templating engine middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Statics assets directory to images, css and front-end js
app.use(express.static(path.join(__dirname, 'public')));

// Router to api folder
app.use(require('./controllers/'));

//TODO: Uncomment section below once seeds and models are complete
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
});

//TODO: Remove port below once models and seeds are complete
///app.listen(PORT, () => console.log("Now listening"));
