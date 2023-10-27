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
    no_telp:{
        type:String,
        required: true
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
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

user.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) return cb(err)
      cb(null, isMatch)
    })
  }
user.virtual('id').get(function () {
    return this._id.toHexString()
})

user.set('toObject', {
    virtuals: true
})

export default mongoose.model('Users', user)