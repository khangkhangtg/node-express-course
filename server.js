const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// parse application/json
app.use(bodyParser.json());

const mockUserData = [
	{name: 'Khang'},
	{name: 'Quang'}
];

app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = 'admin';
	const mockPassword = '1234';

	if(username === mockUsername && password === mockPassword) {
		res.json({
			success: true,
			message: 'password and username match',
			token: 'encrypted token goes here'
		});
	}else {
		res.json({
			success: false,
			message: 'password and username do not match'
		});
	}
});

app.get('/users', (req, res) => {
	res.json({
		success: true,
		message: 'successfully got users, nice!',
		users: mockUserData
	})
});

app.get('/users/:id', (req, res) => {
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	});
});

app.listen(8080, () => {
	console.log("Server is running");
});
