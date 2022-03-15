import React from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { selectGraph } from "../store/graph/selectore";
import { graphConfig } from "../constants/graphConfig";

const Graph: React.FC = () => {
  const graph = useSelector(selectGraph);

  const options: Highcharts.Options = {
    title: {
      text: graphConfig.graphLabel.title,
    },
    xAxis: {
      title: {
        text: graphConfig.graphLabel.xLabel,
      },
      categories: graph.length == 0 ? [] : graph[0].categories,
    },
    yAxis: {
      title: {
        text: graphConfig.graphLabel.yLabel,
      },
    },
    series: graph.map((e) => e.series[0]),
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
