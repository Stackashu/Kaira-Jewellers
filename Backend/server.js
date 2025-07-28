const express = require("express")
const http = require('http')
const app = express()
const baseRoutes = require('./Routes/routes')

const dotenv = require("dotenv")
const connectDB = require("./db/database")

dotenv.config();
connectDB();

app.use(express.json())
app.use('/api',baseRoutes)

const server = http.createServer(app)
let port = process.env.PORT || 5000
server.listen(port,()=>{
    console.log(`Server running on ${process.env.PORT} port`)
})