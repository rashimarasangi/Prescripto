import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import morgan from "morgan";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//api endpoints
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API  WORKING ");
});

app.listen(port, () => console.log("Server started", port));
