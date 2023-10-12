import React from "react";
import "../PieChart/piechartBox.scss";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
    { name: 'Men', value: 48 },
    { name: 'Women', value: 52 },
   
  ];
const PieChartBox = () => {
  return (
    <div className="pieChartBox" style={{ width: '100%', height: 300 }} >
        <h1>Posts</h1>
         <ResponsiveContainer>
            
          <PieChart>
          <Tooltip
            contentStyle={{background : "white" ,borderRadius : "5px"}}
            />
            <Pie dataKey="value" data={data} fill="#1FD656" label />
          </PieChart>
        </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
