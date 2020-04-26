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
})

app.listen(8000, () => {
	console.log("Server is running");
});