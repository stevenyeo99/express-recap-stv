const users = require('../models/user');

function getUsers(req, res) {
    res.json(users);
}

function getUserById(req, res) {
    const userId = +req.params.userId;

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

function putUser(req, res) {
    const userId = req.params.userId;
    const { name } = req.body;
    if (userId < 0) {
        return res.status(405)
            .json({
                error: 'Please specified user id'
            });
    }

    if (!users[userId]) {
        return res.status(404)
            .json({
                error: 'User not found'
            });
    }

    users[userId].name = name;

    return res.status(200)
        .json({
            message: 'Update user successfully'
        });
}

function deleteUser(req, res) {
    const userId = Number(req.params.userId);

    if (!users[userId]) {
        return res.status(404)
            .json({
                error: 'User not found'
            });
    }

    users.splice(userId, 1);

    return res.status(200)
        .json({
            message: 'Delete user succesfully'
        });
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
};