import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide mongodb uri in the .env file"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connection was successful")
    }catch{
        console.log("Failed to connect to Mongodb", error)
        process.exit(1)
    }
} 

export default connectDB