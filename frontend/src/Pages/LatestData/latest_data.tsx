import "./latest_data.css";

import VisualizeData from "components/VisualizeData/visualize_data";

import LatestDataHook from "hooks/latest_data_hook";
import DataFormatHook from "hooks/data_format_hook";
import ConversionDataHook from "hooks/conversion_data_hook";

import SortingRates from "utils/sorting_exchange_rates";

const LatestData = () => {
  const { latestDataHook }: any = LatestDataHook();
  const { sortedConversionData, setSortedConversionData } =
    ConversionDataHook();
  const { dataFormatType, setDataFormatType } = DataFormatHook();

  if (latestDataHook !== null) {
    return (
      <div className="latest_data_div">
        <div className="latest_data_selection">
          Base Currency <strong> {latestDataHook.base} </strong>
          <select
            defaultValue="defaultValue"
            className="latest_data_select_data_format"
            onChange={(e) => setDataFormatType(e.target.value)}
          >
            <option value="defaultValue" disabled={true}>
              select a data format
            </option>
            <option value="table"> table chart </option>
            <option value="bar"> bar chart </option>
            <option value="line"> line chart </option>
          </select>
          <select
            defaultValue="defaultValue"
            className="latest_data_select_rate_order"
            onChange={(e) =>
              setSortedConversionData(
                SortingRates(e.target.value, latestDataHook)
              )
            }
          >
            <option value="defaultValue" disabled={true}>
              select rates conversion order
            </option>
            <option value="best">best</option>
            <option value="worst">worst</option>
          </select>
        </div>
        <div className="latest_data_main">
          <VisualizeData
            sortedConversionData={sortedConversionData}
            dataFormatType={dataFormatType}
            rates={latestDataHook.rates}
          />
        </div>
      </div>
    );
  } else {
    return <> loading </>;
  }
};

export default LatestData;
