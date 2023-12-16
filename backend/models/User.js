import mongoose from "mongoose";
import argon2 from "argon2";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isStrongPassword(value),
      message: "Password is not strong enough",
    },
  },
  no_telp: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["contributor", "admin", "user"],
    default: "user",
  },
});

userSchema.set("timestamps", true);

userSchema.pre("save", async function (next) {
  const user = this;

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

userSchema.methods.comparePassword = async function (candidatePassword, cb) {
  try {
    const isMatch = await argon2.verify(this.password, candidatePassword);
    cb(null, isMatch);
  } catch (err) {
    return cb(err);
  }
};

function isStrongPassword(password) {
  // Password must be at least 8 characters long
  // It must contain num and letter
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}

export default mongoose.model("Users", userSchema);
