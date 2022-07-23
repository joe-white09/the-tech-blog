const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'I totally agree! Absolutely love it!',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Great clarification! Thank you!',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;