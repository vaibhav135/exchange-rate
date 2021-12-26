import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL || "";

//get the latest exchange-rate data
export const getHistoricalData = async (date: Date) => {
  console.log(date);
  const request_data = await axios.post(`${url}/post/getHistoricalData`, {
    date: date,
  });
  return request_data;
};
