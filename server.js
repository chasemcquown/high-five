const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
const path = require('path');
const faker = require('faker');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + 'views')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port = 3330;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

// Landing page
app.get('/', (req, res) => {
	res.send('main');
});
