const express = require('express')

const bodyParser = require('body-parser')

const companyRoutes = require('./routes/companyRoutes.js')
const employeeRoutes = require('./routes/employeeRoutes.js')
const loginRoutes = require('./routes/loginRoutes.js')

require('dotenv').config()

const connectDB = require('./config.js')

const PORT = 5000

connectDB()

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('cookie-parser')())

app.use('/api/company', companyRoutes)
app.use('/api/employee', employeeRoutes)
app.use('/api/login', loginRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
