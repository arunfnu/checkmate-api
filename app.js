import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import adminRoute from "./routes/admin.js";

import { notFound, errorHandler } from "./middileware/errorMiddleware.js";
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

export const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", paperRoute);
// app.use("/api", studentRoute);
app.use("/api", adminRoute);
// app.use("/api", blogRoute);

app.use(express.static("public/uploads/pimage"));
app.use(express.static("public/uploads/title1img"));
app.use(express.static("public/uploads/title2img"));
app.use(express.static("public/uploads/title3img"));
app.use(express.static("public/uploads/title4img"));
app.use(express.static("public/uploads/title5img"));
app.use(express.static("public/uploads/mainTitleImg"));
app.use(express.static("public/uploads/doc"));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`local host:${port}`);
});
