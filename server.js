// path module
const path = require("path");
// dotenv file for sensitive configuration information
require("dotenv").config();
// Express.js server
const express = require("express");
// All routes as defined in the controllers folder
const routes = require("./controllers/");
// Sequelize connection to the database
const sequelize = require("./config/connection");
// Handlebars template engine for front-end
const exphbs = require("express-handlebars");

// Initialize handlebars for the html templates
const hbs = exphbs.create({});

// Initialize the server
const app = express();
// Define the port for the server
const PORT = process.env.PORT || 3001;
//to use express-session and sequelize store
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//create session object
const sess = {
  secret: "canyouguessmysecret",
  //cookie to start empty
  cookie: {},
  resave: false,
  saveUninitialize: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
// Give the server a path to the public directory for static files
app.use(express.static(path.join(__dirname, "public")));

// Set handlebars as the template engine for the server
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Give the server the path to the routes
app.use(routes);

// Turn on connection to db and then to the server
// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data - aka normal operation
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
