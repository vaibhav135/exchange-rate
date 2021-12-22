import express from "express";
import { getHistoricalData } from "../controller/post_controller";

const postRoutes = express();

postRoutes.post("/post/getHistoricalData", getHistoricalData);

export default postRoutes;
