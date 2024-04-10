import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      primaryKey: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    organisation: {
      type: String
    },
    role: {
      type: String
    },
    projects: {
      type: [String]
    },
    refreshTokens: {
      type: String
    },
    accessTokens: {
      type: String
    },
    authority: {
      type: [{
        // Define the schema for the authority object
        // This is just a placeholder, you can define its structure as per your requirements
        // For example:
        // role: String,
        // permissions: [String]
      }]
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  // Before saving, hash the password if it has been modified
  if (!this.isModified("password")) return next();

  // Hash the password with bcrypt
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  // Compare provided password with hashed password using bcrypt
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("User", userSchema);

export default User;
