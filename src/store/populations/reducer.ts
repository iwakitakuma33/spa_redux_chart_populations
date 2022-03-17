import { ActionTypes } from "../actionTypes";
import { PopulationData, PopulationsActionTypes } from "./types";
import { FSA } from "../typeFSA";

export const initPopulation: PopulationData[] = [];
export const PopulationsReducer = (
  state = initPopulation,
  action: PopulationsActionTypes
): PopulationData[] => {
  switch (action.type) {
    case ActionTypes.FETCH_POPULATION: {
      const { payload } = action as FSA<
        typeof ActionTypes.FETCH_POPULATION,
        PopulationData
      >;
      if (payload) {
        return [...state, payload];
      } else {
        return [...state];
      }
    }
    case ActionTypes.DELETE_POPULATION: {
      const { payload } = action as FSA<
        typeof ActionTypes.DELETE_POPULATION,
        number
      >;
      if (payload) {
        return state.filter((item) => item.prefCode !== payload);
      } else {
        return [...state];
      }
    }
    default:
      return state;
  }
};
