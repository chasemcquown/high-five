const router = require('express').Router();
//import necessary models
const { Post } = require('../../models');

router.get('/', (req, res) => {
	Post.findAll()
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/', (req, res) => {
	// expects {title: 'Here goes the title of the post', content: 'here goes the content of the post', user_id: 1}
	Post.create({
		title: req.body.title,
		content: req.body.content,
		user_id: req.body.user_id,
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
module.exports = router;
