import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const valueArr = props.dataPoints.map(data => data.value);
  const totalMax = Math.max(...valueArr);

  return (
    <div className="chart">
      {props.dataPoints.map(data => (
        <ChartBar
          value={data.value}
          maxValue={totalMax}
          label={data.label}
          key={data.label}
        />
      ))}
    </div>
  );
}
