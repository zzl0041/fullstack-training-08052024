/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/home.html', (req, res) => {
  const { title, content } = req.query

  let dataString = ''
  if (title || content) {
    dataString = `
          <h2>Submitted Data</h2>
          <p>Title: ${title || ''}</p>
          <p>Content: ${content || ''}</p>
        `
  }

  fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Error loading home.html')
    } else {
      res.send(html + dataString)
    }
  })
})

app.get('/', (req, res) => {
  res.send('this is the home page')
})

app.get('/about', (req, res) => {
  res.send('this is the about page')
})

app.post('/create-post', (req, res) => {
  const { title, content } = req.body
  const query = `?title=${encodeURIComponent(
    title
  )}&content=${encodeURIComponent(content)}`

  res.redirect(`/home.html${query}`)
})

app.use((req, res) => {
  res.status(404).send('This is the 404 page')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
