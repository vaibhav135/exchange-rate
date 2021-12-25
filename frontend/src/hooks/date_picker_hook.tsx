import { useState } from "react";

const DatePicker = () => {
  const [historicalDate, setHistoricalDate] = useState();

  return { historicalDate, setHistoricalDate };
};

export default DatePicker;
