import { Action } from "redux";
import { ActionTypes } from "../actionTypes";
import { prefData } from "../prefectures/types";

export type PopulationData = {
  prefName: string;
  prefCode: number;
  data: prefData[];
};

interface fetchPopulationAction extends Action {
  type: typeof ActionTypes.FETCH_POPULATION;
  payload: PopulationData;
}

interface deletePopulationAction extends Action {
  type: typeof ActionTypes.DELETE_POPULATION;
  payload: number;
}

export type PopulationsActionTypes =
  | fetchPopulationAction
  | deletePopulationAction;
