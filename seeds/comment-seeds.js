const { Comment } = require('../models');

const commentdata = [
	{
		comment_text: 'text from textid1',
		user_id: 1,
		post_id: 1,
	},
	{
		comment_text: 'here goes comment text',
		user_id: 2,
		post_id: 4,
	},
	{
		comment_text: 'textfrom textikk',
		user_id: 3,
		post_id: 1,
	},
	{
		comment_text:
			'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Quisque  diam. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
		user_id: 5,
		post_id: 2,
	},
	{
		comment_text:
			'In hac habitasse platea dictumst. Vivamus vestibulum sagittis sapien.  In hac  In hac habitasse platea dictumst. Vivamus vestibulum sagittis sapien.',
		user_id: 3,
		post_id: 5,
	},
	{
		comment_text:
			'Vivamus vestibulum sagittis sapien.  Vivamus vestibulum sagittis sapien.  Vivamus vestibulum sagittis sapien.',
		user_id: 7,
		post_id: 3,
	},
	{
		comment_text:
			'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.  Morbi odio odio, elementum ',
		user_id: 6,
		post_id: 3,
	},
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
