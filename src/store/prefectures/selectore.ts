import { RootState } from "..";
import { Prefectures } from "./types";

export const selectPrefs = (state: RootState): Prefectures => state.prefs;
