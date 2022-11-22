const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./config/db')
const userRoute = require('./route/users')

app.use(express.json())//untuk passing application/json
app.use(express.urlencoded({ extended: true })) //untuk passing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userRoute)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})