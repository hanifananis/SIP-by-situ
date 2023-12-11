import mongoose from "mongoose";
import argon2 from "argon2";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  no_telp: {
    type: String,
    required: true,
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

export default mongoose.model("Users", userSchema);
