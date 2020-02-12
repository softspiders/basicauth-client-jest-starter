const { getRequest } = require('./client');

const testUrl = 'http://localhost:3000/api';

const unauthorized = 'Unauthorized';
const correctResponse = 'GET';

const emptyUser = {username: "", password: ""};
const correctUser = {username: "username", password: "password"};
const userWithWrongUsername = {username: "wrongUsername", password: "password"};
const userWithWrongPassword = {username: "username", password: "wrongPassword"};

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, emptyUser);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, userWithWrongUsername);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, userWithWrongPassword);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl +' ... ', async () => {
	const data = await getRequest(testUrl, correctUser);
	expect(data.method).toBe(correctResponse);
});