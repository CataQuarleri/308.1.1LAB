const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5050;
const baseUrl = `http://localhost:${port}`;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const menu = [
	{ tag: 'Home', href: `${baseUrl}/`, body: 'Content here' },
	{ tag: 'About', href: `${baseUrl}/about`, body: 'Content here' },
	{ tag: 'Login', href: `${baseUrl}/login`, body: 'Content here' }
]

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('pages/index.ejs', { menu: menu, body: menu[0] });
});

app.get('/about', (req, res) => {
	res.render('pages/about.ejs', { menu: menu, body: menu[1] });
});

app
	.get('/login', (req, res) => {
		res.render('pages/login.ejs', { menu: menu, body: menu[2] });
	})
	.post('/login', (req, res) => {
		console.log('SUCCESS');
		if (req.body.username.length > 2 && req.body.password.length > 2) {
			console.log('You are logged in! Welcome ' + req.body.username);
            res.redirect('/')
		} else {
			res.send('Oh Uh, try again. Make sure username and password are more than 2 characters long');
		}
	});

app.get('/download', (req, res) => {
	res.download('./public/kitten.jpg');
});

app.listen(port, () => {
	console.log(`Server running on port: ${baseUrl}`);
});
