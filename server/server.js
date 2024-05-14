const express=require('express');
const dotenv = require('dotenv');
dotenv.config({path: '../configuration.env'});
const {connectDB}=require('./config/db')
const cors=require('cors');
const userRouter = require('./routes/userRoutes');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const app=express()
connectDB()
const port =process.env.PORT || 7000
app.use(express.json());
app.use(express.urlencoded({extended:false}))// to access request body
app.use(cors())
app.use(express.static('./public'))
app.use('/api/v1/users',userRouter)
app.use(errorMiddleware)
app.listen(port,()=>{
    console.log(`listening to the server at port ${port}`)
})

//mongodb+srv://saratht199748:<password>@cluster0.8llhqtn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0