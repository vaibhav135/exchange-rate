const getFormattedDate = (d) => {
  const date = new Date(d);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let dayStr = day.toString();
  let monthStr = month.toString();

  monthStr = monthStr.length < 2 ? "0" + monthStr : monthStr;
  dayStr = dayStr.length < 2 ? "0" + dayStr : dayStr;

  //console.log(dayStr + "   " + monthStr);

  const formattedDate = `${year}-${monthStr}-${dayStr}`;
  return formattedDate;
};

export default getFormattedDate;
