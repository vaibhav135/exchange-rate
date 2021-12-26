import { useState, useEffect } from "react";
import { getLatestData } from "apis/get_request";

const LatestDataHook = () => {
  const [latestDataHook, setLatestDataHook] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      await getLatestData().then((res) => {
        const res_data = res.data;
        if (res_data.status === "ok") {
          console.log(res_data);
          setLatestDataHook(res_data.data);
        } else {
          console.log(res_data.error);
        }
      });
    };
    callApi();
    return () => {};
  }, []);

  return { latestDataHook };
};

export default LatestDataHook;
