import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect("mongodb+srv://aviralsharma07:mathura123@cluster0.uslz3tj.mongodb.net/task-ease");
  console.log("Connected to DB");
};
