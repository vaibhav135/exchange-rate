import { useRef } from "react";
import VisualizeData from "components/VisualizeData/visualize_data";

import SortByHook from "hooks/sort_by_hook";
import DataFormatHook from "hooks/data_format_hook";
import ConversionDataHook from "hooks/conversion_data_hook";

import SortingRates from "utils/sorting_exchange_rates";

import "./main_page.css";

const MainPage = ({
  data,
  historicalDataInput,
  datePicker,
  setDatePicker,
}: {
  data: any;
  historicalDataInput: boolean;
  datePicker?: Date;
  setDatePicker?: any;
}) => {
  const { sortedConversionData, setSortedConversionData } =
    ConversionDataHook();
  const { dataFormatType, setDataFormatType } = DataFormatHook();
  const { sortByOrder, setSortByOrder } = SortByHook();

  const sortByBestOrWorst = (e: any) => {
    setSortedConversionData(SortingRates(e.target.value, data));
    setSortByOrder(e.target.value);
  };

  const sortByAlphbetical = (e: any) => {
    if (sortByOrder !== "alphabetical") setSortByOrder(e.target.value);
  };

  console.log("datePicker: " + datePicker);
  console.log(typeof datePicker);

  return (
    <div className="main_page_data_div">
      <div className="main_page_data_selection">
        Base Currency{" "}
        <strong style={{ paddingLeft: "5px" }}> {data.base} </strong>
        <label id="main_page_label" htmlFor="dataFormatSelectId">
          {" "}
          format data by{" "}
        </label>
        <select
          defaultValue="defaultValue"
          className="select_data_format"
          id="dataFormatSelectId"
          onChange={(e) => setDataFormatType(e.target.value)}
        >
          <option value="defaultValue" disabled={true}>
            select a data format
          </option>
          <option value="table"> table chart </option>
          <option value="bar"> bar chart </option>
          <option value="line"> line chart </option>
        </select>
        <label id="main_page_label" htmlFor="sortBySelectId">
          {" "}
          sort by{" "}
        </label>
        <select
          defaultValue="alphabetical"
          className="select_rate_order"
          id="sortBySelectId"
          onChange={(e) =>
            e.target.value !== "alphabetical"
              ? sortByBestOrWorst(e)
              : sortByAlphbetical(e)
          }
        >
          <option value="alphabetical"> alphabetical </option>
          <option value="best">best</option>
          <option value="worst">worst</option>
        </select>
        {historicalDataInput ? (
          <>
            <label id="main_page_label" htmlFor="dataInputId">
              {" "}
              select date{" "}
            </label>
            <input
              type="date"
              value={datePicker?.toISOString().substr(0, 10)}
              onChange={(e) => setDatePicker?.(new Date(e.target.value))}
              className="select_date"
              id="dataInputId"
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="main_page_main_div">
        <VisualizeData
          sortedConversionData={sortedConversionData}
          sortByOrder={sortByOrder}
          dataFormatType={dataFormatType}
          rates={data.rates}
        />
      </div>
    </div>
  );
};

export default MainPage;
