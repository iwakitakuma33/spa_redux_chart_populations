import { ActionTypes } from "../actionTypes";
import { graphSeries, serieType } from "./types";
import { PopulationData } from "../populations/types";
import { GraphsActionTypes } from "./types";
import { FSA } from "../typeFSA";

const initGraph: graphSeries[] = [];
export const GraphReducer = (
  state = initGraph,
  action: GraphsActionTypes
): graphSeries[] => {
  switch (action.type) {
    case ActionTypes.FETCHE_GRAPHDATA: {
      const { payload } = action as FSA<
        typeof ActionTypes.FETCHE_GRAPHDATA,
        PopulationData
      >;

      if (payload) {
        const checkedGraph: graphSeries = {
          prefParam: {
            prefCode: payload.prefCode,
            prefName: payload.prefName,
          },
          series: [],
          categories: [],
        };
        const data: number[] = [];
        for (const pd of payload.data) {
          checkedGraph.categories.push(String(pd.year));
          data.push(pd.value);
        }
        const tmp: serieType = {
          type: "line",
          name: payload.prefName,
          data: data,
        };
        checkedGraph.series?.push(tmp);
        state.push(checkedGraph);
        return [...state];
      } else {
        return state;
      }
    }
    case ActionTypes.DELETE_GRAPHDATA: {
      const { payload } = action as FSA<
        typeof ActionTypes.DELETE_GRAPHDATA,
        number
      >;

      return state.filter((e) => e.prefParam.prefCode != payload);
    }
    default:
      return state;
  }
};
