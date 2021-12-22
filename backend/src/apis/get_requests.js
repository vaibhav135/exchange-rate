import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

//app id for exchange-rates api
const app_id = process.env.APP_ID_FOR_API || "";
// base url for exchange-rates api
const base_url = process.env.BASE_URL_API || "";

export const fetchLatestData = async () => {
  const response = await axios.get(
    `${base_url}/api/latest.json?app_id=${app_id}`
  );
  return response;
};

export const fetchHistoricalData = async (date) => {
  const response = await axios.get(
    `${base_url}/api/historical/${date}.json?app_id=${app_id}`
  );
  return response;
};
