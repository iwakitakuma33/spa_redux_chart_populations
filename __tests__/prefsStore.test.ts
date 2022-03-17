import { PrefsReducer, initPrefs } from "../src/store/prefectures/reducer";
import { PrefsActionTypes, Prefectures } from "../src/store/prefectures/types";
import { ActionTypes } from "../src/store/actionTypes";

test("init", () => {
  const action: PrefsActionTypes = {
    type: ActionTypes.FETCH_PREFS,
    payload: initPrefs,
  };
  const state = PrefsReducer(undefined, action);
  expect(initPrefs).toStrictEqual(state);
});

test("fetch Prefs", () => {
  const data: Prefectures = {
    message: "hello",
    result: [
      { prefName: "name1", prefCode: 1 },
      { prefName: "name2", prefCode: 2 },
      { prefName: "name3", prefCode: 3 },
    ],
  };
  const action: PrefsActionTypes = {
    type: ActionTypes.FETCH_PREFS,
    payload: data,
  };
  const state = PrefsReducer(initPrefs, action);
  console.log(state);
  expect(state).toStrictEqual(data);
});
