import { Prefectures, PrefsActionTypes } from "./types";

import { ActionTypes } from "../actionTypes";

export const fetchPrefs = (prefs: Prefectures): PrefsActionTypes => {
  return {
    type: ActionTypes.FETCH_PREFS,
    payload: prefs,
  };
};
