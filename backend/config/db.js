import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vanu2004goel:giftify123@cluster0.wddmrtg.mongodb.net/giftify').then(()=>{
        console.log("DB Connected")
    })
}