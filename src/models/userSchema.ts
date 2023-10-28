import mongoose from "mongoose";

const User = new mongoose.Schema({
  uid: String,
  name: String,
  email: String,
  image: String,
  qrs: Array,
});

export const Users = mongoose.models.users || mongoose.model("users", User);
