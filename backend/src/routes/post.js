import express from "express";
import { getHistoricalData } from "../controller/post_controller.js";

const postRoutes = express.Router();

postRoutes.post("/getHistoricalData", getHistoricalData);

export default postRoutes;
