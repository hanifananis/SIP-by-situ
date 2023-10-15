import mongoose from "mongoose"
import bcrypt from "bcrypt"

const user = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        index: { unique: true }
    },
    password:{
        type:String,
        required: true
    },
})

user.set('timestamps', true)

user.pre("save", function(next) {
    const user = this

    // Check if the password field is modified or if it's a new user
    if (!user.isModified("password")) return next()

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err)

            // Replace the plain password with the hashed password
            user.password = hash
            next()
        })
    })
})

export default mongoose.model('Users', user)