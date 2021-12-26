import Table from "components/Table/table";
import BarChart from "components/BarChart/bar_chart";
import LineChart from "components/LineChart/line_chart";

const VisualizeData = (props: any) => {
  const { sortedConversionData, dataFormatType, rates } = props;
  let currency_names: string[] = [];
  let currency_rates: number[] | any = [];

  console.log(props.sortByOrder);
  for (const [key, value] of Object.entries(
    sortedConversionData !== null && props.sortByOrder !== "alphabetical"
      ? sortedConversionData
      : rates
  )) {
    currency_names.push(key);
    currency_rates.push(value);
  }

  if (dataFormatType === "defaultValue" || dataFormatType === "table") {
    return (
      <Table
        rates={
          sortedConversionData !== null && props.sortByOrder !== "alphabetical"
            ? sortedConversionData
            : rates
        }
      />
    );
  } else if (dataFormatType === "bar") {
    return (
      <BarChart
        currency_names={currency_names}
        currency_rates={currency_rates}
      />
    );
  }
  return (
    <LineChart
      currency_names={currency_names}
      currency_rates={currency_rates}
    />
  );
};

export default VisualizeData;
