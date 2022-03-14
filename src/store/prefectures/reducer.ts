import { ActionTypes } from "../actionTypes";
import { Prefectures, PrefsActionTypes } from "./types";
import { FSA } from "../typeFSA";

const initPrefs: Prefectures = {
  message: "test",
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
        return { ...state, ...payload };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};
