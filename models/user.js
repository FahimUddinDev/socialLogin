const {Schema, model } = require("mongoose")
const jwt = require('jsonwebtoken')

const userSchema = Schema({
    name:{ type: String},
    email:{
        type:String,
        require:true,
        minlength:5,
        maxlength:155,
        unique:true
    },
    password: {
        type:String,
        minlength:4,
        maxlength:10
    }
}, {timestamps:true})

userSchema.methods.generateJWT = function (){
    const token = jwt.sign({
        _id:this.id,
        name:this.name,
        email:this.email,
    }, process.env.JWT_SECRET_KEY, {expiresIn:"24d"})
    return token
}

module.exports.User= model('User', userSchema)