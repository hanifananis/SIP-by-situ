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
    validate: {
      validator: (value) => isPhoneNumber(value),
      message: "Invalid phone number",
    },
  },
  roles: {
    type: String,
    enum: ["admin", "user"],
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
  const passwordRegex = /^.{8,}$/;
  return passwordRegex.test(password);
}

function isPhoneNumber(phoneNumber) {
  // Phone number must contain only numbers and have at least 11 digits
  const phoneRegex = /^\d{10,13}$/;
  return phoneRegex.test(phoneNumber);
}

export default mongoose.model("Users", userSchema);
