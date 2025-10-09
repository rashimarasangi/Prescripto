import mongoose from "mongoose";

mongoose.connection.on("connected", () => console.log("Database is connected"));
const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
};

export default connectDB;
