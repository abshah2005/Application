import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'HRManager', 'User'], default: 'User' },
},{timestamps:true});

export const Users=mongoose.model("Users",userSchema)
