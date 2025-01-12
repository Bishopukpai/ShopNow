import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from "helmet"
import connectDB from "./DatabaseConfig/connectDB.js"
dotenv.config()

const app = express()

app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({ 
    crossOriginResourcePolicy : false
}))
 
const PORT = 8080 || process.env.PORT

app.get("/", (request, response)=>{
    ///send data from the server to the client side.
    response.json({
        message : "Server is running"
    })
})

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`)
    })
})