import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CheckBoxField from "./CheckBoxField";
import Graph from "./Graph";

import { fetchPrefs } from "../store/prefectures/action";
import { selectPrefs } from "../store/prefectures/selectore";

import { apiFetcher } from "../utils/apiFetcher/index";
import { apiConfig } from "../constants/apiConfig";
import { contents } from "../constants/contents";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const prefectures = useSelector(selectPrefs);
  useEffect(() => {
    const apiEndpointPrefsALL = apiConfig.endpoints.prefectures.all;
    apiFetcher.get(apiEndpointPrefsALL).then((results) => {
      dispatch(fetchPrefs(results.data));
    });
  }, []);

  return (
    <main>
      <div>main</div>
      {prefectures && <CheckBoxField />}
      <Graph />
    </main>
  );
};

export default Main;
