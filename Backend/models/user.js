import mongoose from "mongoose";
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: Boolean,
    default: false, // Assuming false is for regular users, true for admin or other roles
  },
});

export default mongoose.model('User',userSchema)