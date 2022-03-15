import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { graphConfig } from "../constants/graphConfig";

const Graph: React.FC = () => {
  const options: Highcharts.Options = {
    title: {
      text: graphConfig.graphLabel.title,
    },
    xAxis: {
      title: {
        text: graphConfig.graphLabel.xLabel,
      },
      categories: ["1", "2", "3"],
    },
    yAxis: {
      title: {
        text: graphConfig.graphLabel.yLabel,
      },
    },
    series: [],
  };

  return (
    <div style={Styles.graph}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "12px",
  },
};

export default Graph;
