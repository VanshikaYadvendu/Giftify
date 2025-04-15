import  express from "express"
import  cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

//app config

const app = express() //intialize the app using the express package
const port = 4000 //define port no. where our server will be running

//middleware
app.use(express.json()) // using this middleware whenever we wil get any request from frontend to backend it will be parsed using the json
app.use(cors())//using this we can access backend from any frontend

//DB Connection
connectDB();


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
}) //http request method to get the data from the server

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})//to run the express server

