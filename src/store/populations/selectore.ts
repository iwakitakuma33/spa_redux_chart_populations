import { RootState } from "..";
import { PopulationData } from "./types";

export const selectPopulations = (state: RootState): PopulationData[] =>
  state.populations;
