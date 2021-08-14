const express = require("express");
const app = express();
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
app.use(require("./controllers/"));
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
//const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
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
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//TODO: Uncomment section below once seeds and models are complete
//sequelize.sync({ force: false }).then(() => {
// app.listen(PORT, () => console.log("Now listening"));
//});

//TODO: Remove port below once models and seeds are complete
app.listen(PORT, () => console.log("Now listening"));

app.get("/", (req, res) => {
  res.send("hello");
});
