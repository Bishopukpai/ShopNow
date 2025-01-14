import UserModel from '../models/user.model.js'
import bcryptjs from "bcryptjs"

export async function registerUserController(request, response){
    try {
        const {name, email, password} = request.body

        if(!name || !email || !password){
            return response.status(400).json({
                message : "Provide the required fields",
                error : true,
                success : false
            })
        }

        const user = await UserModel.find({email})

        if(user){
            return response.status(300).json({
                message : "There is a user with this email address",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }

        const newUser = new UserModel(payload)
        
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}