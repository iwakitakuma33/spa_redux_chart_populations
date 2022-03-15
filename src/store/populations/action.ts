import { PopulationData, PopulationsActionTypes } from "./types";
import { ActionTypes } from "../actionTypes";

export const fetchPoplation = (
  populationData: PopulationData
): PopulationsActionTypes => {
  return {
    type: ActionTypes.FETCH_POPULATION,
    payload: populationData,
  };
};

export const deletePoplation = (prefCode: number): PopulationsActionTypes => {
  return {
    type: ActionTypes.DELETE_POPULATION,
    payload: prefCode,
  };
};
