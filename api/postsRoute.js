const express = require('express')
const { getPosts, getPost, addPost, updatePost } = require('./postsController')
const router = express.Router()

router.route('/').get(getPosts).post(addPost)
router.route('/:id').get(getPost).put(updatePost)

module.exports = router
