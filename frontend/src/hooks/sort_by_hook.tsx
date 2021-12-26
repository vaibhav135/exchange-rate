import { useState } from "react";

const SortByHook = () => {
  const [sortByOrder, setSortByOrder] = useState("alphabetical");

  return { sortByOrder, setSortByOrder };
};

export default SortByHook;
