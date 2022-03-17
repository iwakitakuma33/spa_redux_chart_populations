import { ActionTypes } from "../src/store/actionTypes";
import { GraphReducer } from "../src/store/graph/reducer";
import { GraphsActionTypes, graphSeries } from "../src/store/graph/types";
import { PopulationData } from "../src/store/populations/types";
test("fetche graph to []", () => {
  const payload: PopulationData = {
    prefName: "name1",
    prefCode: 1,
    data: [
      { year: 1, value: 1 },
      { year: 2, value: 2 },
      { year: 3, value: 3 },
      { year: 4, value: 4 },
    ],
  };
  const resultGraph: graphSeries[] = [
    {
      prefParam: {
        prefCode: 1,
        prefName: "name1",
      },
      series: [
        {
          type: "line",
          name: "name1",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
  ];

  const action: GraphsActionTypes = {
    type: ActionTypes.FETCHE_GRAPHDATA,
    payload: payload,
  };
  const state = GraphReducer([], action);
  expect(resultGraph).toStrictEqual(state);
});

test("fetche graph", () => {
  const payload: PopulationData = {
    prefName: "name2",
    prefCode: 2,
    data: [
      { year: 1, value: 1 },
      { year: 2, value: 2 },
      { year: 3, value: 3 },
      { year: 4, value: 4 },
    ],
  };
  const initGraph: graphSeries[] = [
    {
      prefParam: {
        prefCode: 1,
        prefName: "name1",
      },
      series: [
        {
          type: "line",
          name: "name1",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
  ];
  const resultGraph: graphSeries[] = [
    {
      prefParam: {
        prefCode: 1,
        prefName: "name1",
      },
      series: [
        {
          type: "line",
          name: "name1",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
    {
      prefParam: {
        prefCode: 2,
        prefName: "name2",
      },
      series: [
        {
          type: "line",
          name: "name2",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
  ];
  const action: GraphsActionTypes = {
    type: ActionTypes.FETCHE_GRAPHDATA,
    payload: payload,
  };
  const state = GraphReducer(initGraph, action);
  console.log(state);
  expect(resultGraph).toStrictEqual(state);
});
test("delete graph", () => {
  const resultGraph: graphSeries[] = [
    {
      prefParam: {
        prefCode: 1,
        prefName: "name1",
      },
      series: [
        {
          type: "line",
          name: "name1",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
  ];
  const initGraph: graphSeries[] = [
    {
      prefParam: {
        prefCode: 1,
        prefName: "name1",
      },
      series: [
        {
          type: "line",
          name: "name1",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
    {
      prefParam: {
        prefCode: 2,
        prefName: "name2",
      },
      series: [
        {
          type: "line",
          name: "name2",
          data: [1, 2, 3, 4],
        },
      ],
      categories: ["1", "2", "3", "4"],
    },
  ];
  const action: GraphsActionTypes = {
    type: ActionTypes.DELETE_GRAPHDATA,
    payload: 2,
  };
  const state = GraphReducer(initGraph, action);
  expect(resultGraph).toStrictEqual(state);
});
