const express = require('express')
const app = express()
const port = process.env.PORT || 3150;

const HomeController = require('./controllers/homeController.js')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : true }));

app.get('/', HomeController.getHome)

app.listen(port, () => {
  console.log(`Connected on port https://localhost:${port}`)
})

