import LatestDataHook from "hooks/latest_data_hook";
import MainPage from "components/Main/main_page";

import "./latest_data.css";

const LatestData = () => {
  const { latestDataHook }: any = LatestDataHook();
  if (latestDataHook === null) {
    return (
      <div className="ring">
        Loading
        <span></span>
      </div>
    );
  } else {
    return <MainPage data={latestDataHook} historicalDataInput={false} />;
  }
};

export default LatestData;
