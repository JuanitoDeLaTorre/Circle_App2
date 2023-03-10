//Important requires of node modules
var express = require('express');
var app = express();
var path = require('path');
const methodOverride = require("method-override")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const MongoStore = require("connect-mongo")

//CONFIG
const PORT = 4000



// view engine setup
app.use(express.urlencoded({ extended: false }))
app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static("Public"))
app.use(methodOverride('_method'))
app.use(express.json())

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req,res)=> {
  res.render('index.ejs')
})


app.listen(PORT, (req,res)=> {
  console.log(`Listening on port ${PORT}!`)
})
