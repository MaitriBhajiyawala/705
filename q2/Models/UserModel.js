const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    username:String,
    passwrod:String
})

const user=mongoose.model("user",UserSchema)

module.exports=user;