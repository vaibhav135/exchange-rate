import express from "express";
import { getLatestData } from "../controller/get_controller";

const getRoutes = express();

getRoutes.get("/get/getLatestData", getLatestData);

export default getRoutes;
