// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import middleware
const auth = require('../middleware/auth');

// Import validators
const {
  commentValidator,
  validate,
} = require('../validators/commentValidator');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private
router.post(
  '/',
  auth,
  commentValidator(),
  validate,
  commentsController.createComment
);

// @route   GET api/comments
// @desc    Get all comments
// @access  Private
router.get('/', auth, commentsController.getAllComments);

// @route   GET api/comments/:id
// @desc    Get comment by id
// @access  Private
router.get('/:id', auth, commentsController.getCommentById);

// @route   PUT api/comments/:id
// @desc    Update a comment
// @access  Private
router.put(
  '/:id',
  auth,
  commentValidator(),
  validate,
  commentsController.updateComment
);

// @route   DELETE api/comments/:id
// @desc    Delete a comment
// @access  Private
router.delete('/:id', auth, commentsController.deleteComment);

// @route   PUT api/comments/like/:id
// @desc    Like a comment
// @access  Private
router.put('/like/:id', auth, commentsController.likeComment);

// @route   PUT api/comments/unlike/:id
// @desc    Unlike a comment
// @access  Private
router.put('/unlike/:id', auth, commentsController.unlikeComment);

module.exports = router;