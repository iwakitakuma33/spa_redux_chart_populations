import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type prefParam = {
  prefCode: number;
  prefName: string;
};

export type prefData = {
  year: number;
  value: number;
};

export type Prefectures = {
  message: string;
  result: prefParam[];
};

interface fetchPrefsAction extends Action {
  type: typeof ActionTypes.FETCH_PREFS;
  payload: Prefectures;
}

export type PrefsActionTypes = fetchPrefsAction;
