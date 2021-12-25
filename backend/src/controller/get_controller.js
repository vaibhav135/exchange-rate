import express from "express";
import { fetchLatestData } from "../apis/get_requests.js";

export const getLatestData = async (req, res) => {
  return await fetchLatestData()
    .then((response) => {
      //console.log(typeof response);
      return res.json({ status: "ok", data: response.data });
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const responseError = error.response.data;
        return res.json({
          status: "error",
          error: responseError.message,
          description: responseError.description,
        });
      }
      return res.json({ status: "error", error: error.message });
    });
};
