import { useEffect, useState } from "react";

const ConversionDataHook = () => {
  const [sortedConversionData, setSortedConversionData] = useState<any>(null);

  useEffect(() => {}, []);
  return { sortedConversionData, setSortedConversionData };
};

export default ConversionDataHook;
