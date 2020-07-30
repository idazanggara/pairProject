// sequelize model:generate --name User --attributes username:string,password:string,email:string,role:string

// sequelize model:generate --name Item --attributes name:string,price:integer,stock:integer,path:string

// sequelize model:generate --name Cart --attributes UserId:integer,ItemId:integer,amount:integer


const express = require('express')
const session = require('express-session')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure:false}
}))

app.use(routes)
app.listen(port, () => {
  console.log(`Connected on port http://localhost:${port}`)
})

