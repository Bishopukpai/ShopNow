import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
    address_line : {
        type: String,
        default : ""
    },
    city : {
        type : String,
        default : ""
    },
    state : {
        type : String,
        default : ""
    },
    postalcode : {
        type : String,
        default : ""
    },
    country : {
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    } 
},
 {
    timestamps : true
 })