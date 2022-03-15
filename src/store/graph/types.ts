import { Action } from "redux";
import Highcharts from "highcharts";

import { ActionTypes } from "../actionTypes";

import { PopulationData } from "../populations/types";
import { prefParam } from "../prefectures/types";

export type graphSeries = {
  prefParam: prefParam;
  series: Highcharts.SeriesOptionsType[];
  categories: string[];
};

export type serieType = Highcharts.SeriesOptionsType;

interface fetchGraphDatasAction extends Action {
  type: typeof ActionTypes.FETCHE_GRAPHDATA;
  payload: PopulationData;
}

interface deleteGraphsAction extends Action {
  type: typeof ActionTypes.DELETE_GRAPHDATA;
  payload: number;
}

export type GraphsActionTypes = fetchGraphDatasAction | deleteGraphsAction;
