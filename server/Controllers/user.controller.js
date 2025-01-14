import UserModel from '../models/user.model.js'

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
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}