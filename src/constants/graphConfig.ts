type graphType = {
  type: "line";
  graphName: string;
  graphLabel: {
    title: string;
    xLabel: string;
    yLabel: string;
  };
};

export const graphConfig: graphType = {
  type: "line",
  graphName: "都道府県",
  graphLabel: {
    title: "総人口推移",
    xLabel: "年度",
    yLabel: "人口数",
  },
};
