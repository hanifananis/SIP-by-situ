import mongoose from "mongoose";
import argon2 from "argon2";

const user = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
  email:{
    type:String,
    required: true,
    index: { unique: true },
  },
  password:{
    type:String,
    required: true,
  },
  no_telp:{
    type:String,
    required: true,
  },
  roles: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

user.set('timestamps', true);

user.pre("save", async function (next) {
  const user = this;

  // Check if the password field is modified or if it's a new user
  if (!user.isModified("password")) return next();

  try {
    // Hash the password using argon2
    const hashedPassword = await argon2.hash(user.password);
    // Replace the plain password with the hashed password
    user.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

user.methods.comparePassword = async function (candidatePassword, cb) {
  try {
    const isMatch = await argon2.verify(this.password, candidatePassword);
    cb(null, isMatch);
  } catch (err) {
    return cb(err);
  }
};

user.virtual('id').get(function () {
  return this._id.toHexString();
});

user.set('toObject', {
  virtuals: true,
});

export default mongoose.model('Users', user);
