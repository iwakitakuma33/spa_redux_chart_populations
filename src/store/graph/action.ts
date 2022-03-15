import { GraphsActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

import { PopulationData } from "../populations/types";

export const fetchGraphData = (
  populationData: PopulationData
): GraphsActionTypes => {
  return {
    type: ActionTypes.FETCHE_GRAPHDATA,
    payload: populationData,
  };
};

export const deleteGraphData = (prefCode: number): GraphsActionTypes => {
  return {
    type: ActionTypes.DELETE_GRAPHDATA,
    payload: prefCode,
  };
};
