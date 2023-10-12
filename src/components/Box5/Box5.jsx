import React from "react";
import "../Box5/box5.scss";
const Box5 = () => {
  return (
    <div className="lastBox">
      <div className="upperSec">
        <img src="/svgs/latency.svg" width={30} height={40} alt="" />
        <h1>Latency</h1>
      </div>

      
        <div className="time">
          <img src="/svgs/downtime.svg" width={35} height={80} alt="" />
          <span>Downtime</span>
          <span className="speed">35ms</span>
        </div>
        <div className="time">
          <img src="/svgs/uptime.svg" width={30} height={80} alt="" />
          <span>Uptime</span>
          <span className="speed" >20ms</span>
        </div>
        <div className="time">
          <img src="/svgs/crash.svg" width={30} height={80} alt="" />
          <span>Crash</span>
          <span className="speed">10ms</span>
        </div>
     
    </div>
  );
};

export default Box5;
