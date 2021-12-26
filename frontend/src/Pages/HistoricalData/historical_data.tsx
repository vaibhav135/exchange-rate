import HistoricalDataHook from "hooks/historical_data_hook";
import MainPage from "components/Main/main_page";

import "./historical_data.css";

const HistoricalData = () => {
  const { historicalData, setHistoricalData, datePicker, setDatePicker }: any =
    HistoricalDataHook();

  const setNewDate = (date: Date) => {
    setDatePicker(date);
    setHistoricalData(null);
  };

  if (historicalData === null) {
    return (
      <div className="ring">
        Loading
        <span></span>
      </div>
    );
  }
  return (
    <MainPage
      data={historicalData}
      historicalDataInput={true}
      datePicker={datePicker}
      setDatePicker={setNewDate}
    />
  );
};

export default HistoricalData;
