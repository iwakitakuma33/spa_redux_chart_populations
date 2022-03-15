import { RootState } from "..";
import { graphSeries } from "./types";

export const selectGraph = (state: RootState): graphSeries[] => state.graph;
