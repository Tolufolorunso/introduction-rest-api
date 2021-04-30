const express = require('express')
const router = express.Router()

const {
  getPosts,
  getASinglePost,
  addPost,
  updatePost,
} = require('./postsController')

router.route('/').get(getPosts).post(addPost)
router.route('/:id').get(getASinglePost).put(updatePost)

module.exports = router
