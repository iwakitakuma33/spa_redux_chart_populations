import React, { useEffect } from "react";
import CheckBoxField from "./CheckBoxField";
import Graph from "./Graph";

import { apiFetcher } from "../utils/apiFetcher/index";
import { apiConfig } from "../constants/apiConfig";

const Main: React.FC = () => {
  useEffect(() => {
    const apiEndpointPrefsALL = apiConfig.endpoints.prefectures.all;
    apiFetcher.get(apiEndpointPrefsALL).then((results) => {
      console.log(results);
    });
  }, []);

  return (
    <main>
      <div>main</div>
      <CheckBoxField />
      <Graph />
    </main>
  );
};

export default Main;
