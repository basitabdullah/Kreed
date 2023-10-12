import React from "react";
import "./home.scss";
import TopBox from "../../components/TopBox/TopBox";
import ChartBox from "../../components/ChartBox/ChartBox";
import { barChartBoxRevenue, chartBoxUploads, chartBoxUser, } from "../../data";
import BarchartBox from "../../components/BarChart/BarchartBox";
import PieChartBox from "../../components/PieChart/PieChartBox";
import Box5 from "../../components/Box5/Box5";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box2 ">
        <BarchartBox {...barChartBoxRevenue} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUploads} />
      </div>
      <div className="box box4">
        <TopBox />
      </div>
      <div className="box box5"><Box5/></div>
      <div className="box box6"><PieChartBox/></div>
    </div>
  );
};

export default Home;
