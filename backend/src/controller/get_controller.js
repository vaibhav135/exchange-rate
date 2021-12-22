import express from "express";
import { fetchLatestData } from "../apis/get_requests";

export const getLatestData = await(req, res) => {
	try {
		const response_data = await fetchLatestData();
		return res.json({status: "ok", data: response_data}):
	}
	catch (error) {
		return res.json({status: "error", error: (error as Error).message});
	}
};
