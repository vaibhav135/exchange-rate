import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

import postRoutes from "./routes/post.js";
import getRoutes from "./routes/get.js";

dotenv.config();

const app = express();

app.use(cors());
app.use("/post", postRoutes);
app.use("/get", getRoutes);

const port = process.env.PORT || "";

app.listen(port, () => {
  console.log(`started server on port ${port}`);
});
