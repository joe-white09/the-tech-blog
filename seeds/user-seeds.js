const { User } = require('../models');

const userData = [
    {
        username: 'Joe1',
        password: 'pass123'
    },
    {
        username: 'Malcome1',
        password: 'pass123'
    },
    {
        username: 'Wesley1',
        password: 'pass123'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;