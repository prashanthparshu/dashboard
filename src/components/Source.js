import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Desktop", 11],
  ["Andriod App", 2],
  ["IOS APP", 2],
  ["Mobile Web", 2],
  ["Smart Phone", 7],
];

export const options = {
  title: "Visitor By Source",
  is3D: true,
};

const Source = () => {
  return (
    <div style={{ border: "1px solid black", width: "20%", height: "268px" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Source;
