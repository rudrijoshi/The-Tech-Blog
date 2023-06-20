const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const CommentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', CommentRoutes);

module.exports = router;