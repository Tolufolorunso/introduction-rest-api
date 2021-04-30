const express = require('express')

const postsRoute = require('./api/postsRoute')

const app = express()

app.use(express.json({ limit: '10kb' }))

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      name: 'Tolulope Folorunso',
      task: 'Introduction to RESTFUL API Assignment',
    },
  })
})

const PORT = 5000
app.listen('5000', () => {
  console.log(`server started on port ${PORT}`)
})
