import express from "express";
import { fetchHistoricalData } from "../apis/get_requests";

// NOTE:- although the below function start with get
// but it is actually a post request.

export const getHistoricalData = async (req, res) => {
  const { date } = req.body;
	try {
		const response_data = await fetchHistoricalData(date);
		res.json({status:"ok", data:response_data});
	}
	catch (error) {
		return res.json({status:"error", error:(error as Error).message});
	}
};
