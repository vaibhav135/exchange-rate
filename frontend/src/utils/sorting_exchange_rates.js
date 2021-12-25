// sort the data in terms of their performance against USD
// sortingType : best (increasing order) || worst (decreasing order)
const SortingRates = (sortingType?: string, latestDataHook) => {
  console.log(sortingType);
  const sortedData = Object.fromEntries(
    Object.entries(latestDataHook.rates).sort(
      ([, valueA]: any, [, valueB]: any) =>
        sortingType === "worst" ? valueB - valueA : valueA - valueB
    )
  );
  return sortedData;

  //for test purposes only
  //Object.entries(sortedData).map((value) =>
  //console.log(value[0] + " " + value[1])
  //);
};

export default SortingRates;
