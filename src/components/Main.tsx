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
      <h2 style={Styles.label}>{contents.label.prefs}</h2>
      {prefectures && <CheckBoxField />}
      <h2 style={Styles.label}>{contents.label.populations}</h2>
      <Graph />
    </main>
  );
};

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "10px",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderBottom: "2px solid #000",
    marginLeft: "15pt",
    marginRight: "15pt",
  },
};

export default Main;
