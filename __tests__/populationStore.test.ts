import { ActionTypes } from "../src/store/actionTypes";
import { PopulationsReducer } from "../src/store/populations/reducer";
import {
  PopulationsActionTypes,
  PopulationData,
} from "../src/store/populations/types";

test("init", () => {
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
  const action: PopulationsActionTypes = {
    type: ActionTypes.FETCH_POPULATION,
    payload: payload,
  };
  const state = PopulationsReducer([], action);
  console.log(state);
  expect([payload]).toStrictEqual(state);
});

test("fetch Population", () => {
  const intitdata: PopulationData[] = [
    {
      prefName: "name1",
      prefCode: 1,
      data: [
        { year: 1, value: 1 },
        { year: 2, value: 2 },
        { year: 3, value: 3 },
        { year: 4, value: 4 },
      ],
    },
    {
      prefName: "name2",
      prefCode: 2,
      data: [
        { year: 1, value: 1 },
        { year: 2, value: 2 },
        { year: 3, value: 3 },
        { year: 4, value: 4 },
      ],
    },
  ];
  const payload: PopulationData = {
    prefName: "name3",
    prefCode: 3,
    data: [
      { year: 1, value: 1 },
      { year: 2, value: 2 },
      { year: 3, value: 3 },
      { year: 4, value: 4 },
    ],
  };
  const action: PopulationsActionTypes = {
    type: ActionTypes.FETCH_POPULATION,
    payload: payload,
  };
  const state = PopulationsReducer(intitdata, action);
  expect([...intitdata, payload]).toStrictEqual(state);
});

test("delete Population", () => {
  const intitdata: PopulationData[] = [
    {
      prefName: "name1",
      prefCode: 1,
      data: [
        { year: 1, value: 1 },
        { year: 2, value: 2 },
        { year: 3, value: 3 },
        { year: 4, value: 4 },
      ],
    },
    {
      prefName: "name2",
      prefCode: 2,
      data: [
        { year: 1, value: 1 },
        { year: 2, value: 2 },
        { year: 3, value: 3 },
        { year: 4, value: 4 },
      ],
    },
  ];
  const resultdata: PopulationData[] = [
    {
      prefName: "name2",
      prefCode: 2,
      data: [
        { year: 1, value: 1 },
        { year: 2, value: 2 },
        { year: 3, value: 3 },
        { year: 4, value: 4 },
      ],
    },
  ];
  const payload = 1;
  const action: PopulationsActionTypes = {
    type: ActionTypes.DELETE_POPULATION,
    payload: payload,
  };
  const state = PopulationsReducer(intitdata, action);
  expect(resultdata).toStrictEqual(state);
});
