import { ActionTypes } from "../actionTypes";
import { Prefectures, PrefsActionTypes } from "./types";
import { FSA } from "../typeFSA";

export const initPrefs: Prefectures = {
  message: "prefs init",
  result: [],
};
export const PrefsReducer = (
  state = initPrefs,
  action: PrefsActionTypes
): Prefectures => {
  switch (action.type) {
    case ActionTypes.FETCH_PREFS: {
      const { payload } = action as FSA<
        typeof ActionTypes.FETCH_PREFS,
        Prefectures
      >;
      if (payload) {
        if (initPrefs === state) {
          return { ...payload };
        } else {
          return { ...state, ...payload };
        }
      }
      return state;
    }

    default:
      return state;
  }
};
