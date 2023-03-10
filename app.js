//Important requires of node modules
const express = require('express');
const app = express();
require('dotenv').config();
const path  = require('path');
const methodOverride = require("method-override")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const MongoStore = require("connect-mongo")
// const Users = require('./models/Users.js')
const { Users } = require('./models')

//CONFIG
const PORT = 4000


// view engine setup
app.use(express.urlencoded({ extended: false }))
app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static("Public"))
app.use(methodOverride('_method'))
app.use(express.json())


const seedEmployees = require('./models/seeddata.js')

app.get('/', (req,res)=> {
  res.redirect('/listAll')
})

app.get('/listAll', async (req,res,next)=> {
  try {
    const allEmps = await Users.find({})
    res.render('index.ejs',{employees: allEmps})
    
  } catch(err) {
    console.log(err)
    next()
  }
})

app.get('/seed', async (req,res,next)=> {
  try {
    console.log("Hitting route")
    const swag = await Users.insertMany(seedEmployees)
    console.log(swag)

    res.redirect('/')
  } catch(err){
    console.log(err)
    next()
  }
})

app.get('/newEmployee', async (req,res,next)=> {
  try {
    res.render('createNew.ejs')
  } catch(err) {
    console.log(err)
    next()
  }
})

app.post('/createNew', async (req,res,next)=> {
  try {

        const employeeInfo = req.body

        let salt = await bcrypt.genSalt(12)

        const hash = await bcrypt.hash(employeeInfo.password, salt);
        employeeInfo.password = hash

        console.log(employeeInfo)

        const newEmp = await Users.create(employeeInfo)
        // seedEmployees.push(employeeInfo)
        console.log("Successful new user creation!")
        res.redirect('/')
  } catch(err) {
    console.log(err)
    next()
  }
})

app.get('/signIn', async (req,res,next)=> {
  try {
    res.render('signIn.ejs')
  } catch(err) {
    console.log(err)
    next()
  }
})

app.post('/login', async (req,res,next)=> {
  try {
    console.log(req.body)
    res.redirect('/')
  } catch(err) {
    console.log(err)
    next()
  }
})



app.listen(PORT, (req,res)=> {
  console.log(process.env.MONGO_DB_URI)

  console.log(`Listening on port ${PORT}!`)
})

// app.get('/listAll' async (req,res,next)=> {
//   try {

//   } catch(err) {
//     console.log(err)
//     next()
//   }
// })

