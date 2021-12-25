import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL || "";

//get the latest exchange-rate data
export const getHistoricalData = async () => {
  const request_data = await axios.get(`${url}/get/getLatestData}`);
  return request_data;
};
