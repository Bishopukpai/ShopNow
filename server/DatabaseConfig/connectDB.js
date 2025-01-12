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

    }catch{
        console.log("Failed to connect to Mongodb")
    }
} 