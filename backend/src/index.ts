import express from "express";
import { userRouter } from "./routes/user";
import { merchantRouter } from "./routes/merchant";
const app = express();
app.use("/api/v1/user",userRouter);
app.use("/api/v1/merchant",merchantRouter)