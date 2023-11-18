import express from 'express'
import dotenv from 'dotenv'
import { Register } from './Controllers/Auth.controller.js'
import router from './Routes/index.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
dotenv.config()


app.get('/',function(req , res){
    res.send('homepage')
})

app.get('/register',Register)

app.use('/api/v1/',router)

mongoose.connect(process.env.MONGOURL).then(console.log("database connected"))


app.listen(process.env.PORT,()=>console.log(`server started at port ${process.env.PORT}`))