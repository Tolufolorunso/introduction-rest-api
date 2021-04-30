const fs = require('fs')

const allPosts = require('../posts.json')

// Get all posts
const getPosts = async (req, res) => {
  const posts = allPosts
  if (!posts) {
    return res.status(404).json({
      status: 'fail',
      message: 'No Posts not found',
    })
  }
  res.status(200).json({
    status: 'success',
    data: posts,
  })
}

// Get a single post
const getASinglePost = (req, res) => {
  const post = allPosts.find((post) => {
    return post.id === parseInt(req.params.id)
  })
  if (!post) {
    return res.status(404).json({
      status: 'fail',
      message: 'Post not found',
    })
  }
  res.status(200).json({
    status: 'success',
    data: post,
  })
}

const addPost = (req, res) => {
  let post = {
    userId: req.body.userId,
    id: allPosts[allPosts.length - 1].id + 1,
    title: req.body.title,
    body: req.body.body,
  }
  allPosts.push(post)

  const contentToSave = JSON.stringify(allPosts)

  fs.writeFile('./posts.json', contentToSave, (error) => {
    if (error) {
      return res.status(400).json({
        status: 'fail',
        message: 'Failed to add post',
      })
    }
    res.status(201).json({
      status: 'success',
      message: 'Post added successfully',
      data: post,
    })
  })
}

const updatePost = (req, res) => {
  const id = req.params.id
  const post = allPosts.find((post) => {
    return post.id === parseInt(id)
  })
  if (!post) {
    return res.status(404).json({
      status: 'fail',
      message: 'Post not found',
    })
  }
  const newPosts = allPosts.map((post) => {
    if (post.id === parseInt(id)) {
      post = {
        ...post,
        ...req.body,
      }
    }
    return post
  })
  fs.writeFile('./posts.json', JSON.stringify(newPosts), (error) => {
    if (error) {
      return res.status(400).json({
        status: 'fail',
        message: 'Failed to updated post',
      })
    }
    res.status(201).json({
      status: 'success',
      message: 'Post updated successfully',
    })
  })
}

module.exports = {
  getPosts,
  getASinglePost,
  addPost,
  updatePost,
}
