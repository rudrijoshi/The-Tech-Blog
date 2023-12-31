const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.update(
            req.body,
            {
                where: {
                    id: req.params.id, localhost
                }
            }
        );

        res.status(200).json(newBlog);
    } catch (err) {
        console.log(err.message);
        res.status(400).json(err.message);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(blogData);
        console.log(blogData);
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // Serialize data so the template can read it

        res.status(200).json(blogData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
