import { useEffect, useState } from "react";
import { getHistoricalData } from "apis/post_request";
import { getLatestData } from "apis/get_request";

const currentDate = new Date();
const HistoricalDataHook = () => {
  const [historicalData, setHistoricalData] = useState<any>(null);
  const [datePicker, setDatePicker] = useState(currentDate);

  useEffect(() => {
    const callApi = async () => {
      await getHistoricalData(datePicker).then((res) => {
        const res_data = res.data;
        if (res_data.status === "ok") {
          setHistoricalData(res_data.data);
        } else {
          console.log(res_data);
          console.log(res_data.error);
          if (res_data.error === "not_available") {
            // if the data for today exchage rates is not available
            // fetch the lates data available
            const callApiAgain = async () => {
              await getLatestData().then((res) => {
                const res_data = res.data;
                if (res_data.status === "ok") {
                  setHistoricalData(res_data.data);
                  const unix_timestamp: number = res_data.data.timestamp;
                  setDatePicker(new Date(unix_timestamp * 1000));
                } else {
                  console.log(res_data.error);
                }
              });
            };
            callApiAgain();
          }
        }
      });
    };
    callApi();
    return () => {};
  }, [datePicker]);

  return { historicalData, setHistoricalData, datePicker, setDatePicker };
};

export default HistoricalDataHook;
