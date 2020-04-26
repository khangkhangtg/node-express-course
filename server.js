const express = require('express');
const app = express();

const mockUserData = [
	{name: 'Khang'},
	{name: 'Quang'}
];

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
