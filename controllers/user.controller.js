const users = require('../models/user');

function getUsers(req, res) {
    res.json(users);
}

function getUserById(req, res) {
    const userId = req.params.userId;

    const user = users[userId];

    if (!user) {
        return res.status(404)
            .json({
                error: 'User not found.'
            });
    }

    res.json(user);
}

function postUser(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400)
            .json({
                error: 'Please input name.'
            });
    }

    const user = {
        id: users.length,
        name: name
    };

    users.push(user);

    res.status(201)
        .json({
            message: 'User succesfully created.'
        });
}

module.exports = {
    getUsers,
    getUserById,
    postUser
};