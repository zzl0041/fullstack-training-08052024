const express = require('express')
const companyRouter = require('./routers/company')
const employeeRouter = require('./routers/employee')
const authRouter = require('./routers/auth')
const app = express()
const port = 3000

const connectDB = require('./db/db')

connectDB();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/auth', authRouter)
app.use('/api', companyRouter)
app.use('/api', employeeRouter)


app.listen(port,()=>{
    console.log('listening on port')
})