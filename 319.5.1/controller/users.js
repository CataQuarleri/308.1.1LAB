import Users from '../models/users.js';

async function getAllUsers(req, res) {
	try {
		let result = await Users.find().limit(10).exec();
		res.send(result);
	} catch (error) {
		res.send('Invalid ID').status(400);
	}
}

async function getOneUser(req, res) {
	try {
		let result = await Users.findById(req.params.id);
		res.send(result);
	} catch (error) {
		res.send('Invalid ID').status(400);
	}
}

async function createOneUser(req, res) {
	try {
		const result = await Users.create({
			name: req.query['name'],
			email: req.query['email'],
			password: req.query['password']
		});
		res.send(result);
	} catch (e) {
		console.log(e);
		res.send('Could not create user').status(400);
	}
}

async function updateOneUser(req, res) {
	try {
		const result = await Users.updateOne({ name: req.params.name }, { email: req.query['email'] });
	} catch (e) {
		console.log(e);
		res.send('Could not update').status(400);
	}
}

async function deleteUser(req, res) {
	try {
		const result = await Users.deleteOne({ name: req.params.name });
		res.send(result);
	} catch (e) {
		console.log(e);
		res.send('Could not delete').status(400);
	}
}

export { getAllUsers, getOneUser, createOneUser, updateOneUser, deleteUser };
