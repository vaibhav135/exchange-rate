import { useState } from "react";

const DataFormatHook = () => {
  const [dataFormatType, setDataFormatType] = useState("defaultValue");
  return { dataFormatType, setDataFormatType };
};

export default DataFormatHook;
