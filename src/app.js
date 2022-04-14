import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./routes/product";
import authRoute from './routes/auth';
import mongoose from "mongoose";
import categoryRoute from './routes/category';
import cartRouter from './routes/card';


const app = express();
app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())

app.use("/api", productRouter)
app.use("/api", authRoute);
app.use("/api", categoryRoute);
app.use("/api", categoryRoute);
app.use("/api", cartRouter);

mongoose.connect('mongodb://localhost:27017/myapp')
    .then(() => console.log("connec thành công"))
    .catch(err => console.log("error"))
const PORT = 8000;

app.listen(PORT, () => {
    console.log("Đang chạy cổng ", PORT)
});