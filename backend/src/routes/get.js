import express from "express";
import { getLatestData } from "../controller/get_controller.js";

const getRoutes = express.Router();

getRoutes.get("/getLatestData", getLatestData);

export default getRoutes;
