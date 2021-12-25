import Table from "components/Table/table";
import BarChart from "components/BarChart/bar_chart";
import LineChart from "components/LineChart/line_chart";
import { window } from "d3";

const VisualizeData = (props: any) => {
  const { sortedConversionData, dataFormatType, rates } = props;
  //const width = );
  let width =
    (window as any).innnerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  //default height
  let height =
    (window as any).innnerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const margin = {
    top: 40,
    right: 20,
    bottom: 20,
    left: 50,
  };

  let currency_names: string[] = [];
  let currency_rates: number[] | any = [];

  for (const [key, value] of Object.entries(
    sortedConversionData !== null ? sortedConversionData : rates
  )) {
    currency_names.push(key);
    currency_rates.push(value);
  }

  if (dataFormatType === "defaultValue" || dataFormatType === "table") {
    return (
      <Table
        rates={sortedConversionData !== null ? sortedConversionData : rates}
      />
    );
  } else if (dataFormatType === "bar") {
    //console.log(currency_rates);
    //console.log(currency_names);
    return (
      <BarChart
        currency_names={currency_names}
        currency_rates={currency_rates}
      />
    );
  }
  return <> </>;
};

export default VisualizeData;

//width={width}
//height={height}
//margin={margin}
