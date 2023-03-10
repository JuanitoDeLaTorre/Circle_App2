require('dotenv').config();
const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString);

//mongoDB successful connection message
mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected... 🙌 🙌 🙌 `)
})

//mongoDB connection on error
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ⛔️ ⛔️ ⛔️ ', error)
})

//disconnect from mongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected ⚡️ 🔌 ⚡️')
})