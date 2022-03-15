import { combineReducers, createStore } from "redux";

import { PrefsReducer } from "./prefectures/reducer";
// import { GraphReducer } from "./graph/reducer";
import { PopulationsReducer } from "./populations/reducer";

const RootReducer = combineReducers({
  prefs: PrefsReducer,
  populations: PopulationsReducer,
  // graph: GraphReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
