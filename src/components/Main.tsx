import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckBoxField from "./CheckBoxField";
import Graph from "./Graph";

import { fetchPrefs } from "../store/prefectures/action";
import { selectPrefs } from "../store/prefectures/selectore";

import { apiFetcher } from "../utils/apiFetcher/index";
import { apiConfig } from "../constants/apiConfig";
import { contents } from "../constants/contents";
import { selectGraph } from "../store/graph/selectore";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const prefectures = useSelector(selectPrefs);
  const graph = useSelector(selectGraph);

  useEffect(() => {
    const apiEndpointPrefsALL = apiConfig.endpoints.prefectures.all;
    apiFetcher.get(apiEndpointPrefsALL).then((results) => {
      dispatch(fetchPrefs(results.data));
    });
  }, []);

  return (
    <main>
      {prefectures &&
        CheckBoxField({
          label: contents.label.prefs,
          prefectures: prefectures,
        })}
      {Graph({ label: contents.label.populations, graph: graph })}
    </main>
  );
};

export default Main;
