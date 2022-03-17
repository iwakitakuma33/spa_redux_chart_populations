import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { graphConfig } from "../constants/graphConfig";
import { graphSeries } from "../store/graph/types";
type PropsGraph = {
  label: string;
  graph: graphSeries[];
};
const Graph: React.FC<PropsGraph> = ({ label, graph }) => {
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
    <>
      <h2 style={Styles.label}>{label}</h2>
      <div style={Styles.graph}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "12px",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderBottom: "2px solid #000",
    marginLeft: "15pt",
    marginRight: "15pt",
  },
};

export default Graph;
