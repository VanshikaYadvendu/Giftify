import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vanu2004goel:giftify123@cluster0.wddmrtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("DB Connected")
    })
}