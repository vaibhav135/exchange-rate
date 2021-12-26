import { Routes, Link, Route, Navigate, useLocation } from "react-router-dom";

import About from "Pages/About/about";
import LatestData from "Pages/LatestData/latest_data";
import HistoricalData from "Pages/HistoricalData/historical_data";

import "./navigation.css";

const Navigation = () => {
  const currentPath = useLocation();

  const returnActiveTag = (path: string) => {
    //console.log(currentPath.pathname);
    return currentPath.pathname === path ? "currently_active" : "";
  };

  return (
    <div className="navigation_div">
      <nav className="navigation_nav">
        {""}
        <ul className="navigation_ul">
          <li id="navigation_li" className={returnActiveTag("/latest")}>
            <Link to="/latest" id="li_link">
              Latest
            </Link>
          </li>
          <li
            id="navigation_li"
            className={returnActiveTag("/historical_data")}
          >
            <Link to="/historical_data" id="li_link">
              Historical Data
            </Link>
          </li>
          <li id="navigation_li" className={returnActiveTag("/about")}>
            <Link to="/about" id="li_link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="latest" replace={true} />} />
        <Route path="latest" element={<LatestData />}></Route>
        <Route path="historical_data" element={<HistoricalData />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default Navigation;
