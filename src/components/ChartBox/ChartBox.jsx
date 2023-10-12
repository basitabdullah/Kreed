import { Link } from "react-router-dom";
import "./chartbox.scss";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


const ChartBox = (props) => {
    
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img height={30} width={30} src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>

        <Link to="/" style={{color : props.color}}>Details</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
                <Tooltip
                contentStyle={{background : "transparent", border: "none"}}
                labelStyle={{display : "none"}}
                position={{x:10 , y:70} }
                cursor={{stroke : "green"}}
                />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage" style={{color : props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}%</div>
          <div className="duration">this year</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
