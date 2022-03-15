import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiConfig } from "../constants/apiConfig";
import { apiFetcher } from "../utils/apiFetcher/index";

import { selectPrefs } from "../store/prefectures/selectore";
import { fetchPoplation, deletePoplation } from "../store/populations/action";
import { fetchGraphData } from "../store/graph/action";

import { selectGraph } from "../store/graph/selectore";

const CheckBoxField: React.FC = () => {
  const dispatch = useDispatch();
  const graph = useSelector(selectGraph);

  const prefectures = useSelector(selectPrefs);
  const handleClickCheck = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    const apiEndpointPre =
      apiConfig.endpoints.population.composition.onePrefPerYear.replace(
        ":prefCode",
        String(prefCode)
      );

    if (check) {
      apiFetcher.get(apiEndpointPre).then((results) => {
        dispatch(
          fetchPoplation({
            prefName: prefName,
            prefCode: prefCode,
            data: results.data.result.data[0].data,
          })
        );
        dispatch(
          fetchGraphData({
            prefName: prefName,
            prefCode: prefCode,
            data: results.data.result.data[0].data,
          })
        );
        console.log(graph);
      });
    } else {
      dispatch(deletePoplation(prefCode));
    }
  };

  return (
    <>
      {" "}
      <div>
        {prefectures.result.map((prefecture) => (
          <div key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              onChange={(event) =>
                handleClickCheck(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )
              }
              id={"checkbox" + prefecture.prefCode}
            />
            <label htmlFor={"checkbox" + prefecture.prefCode}>
              {prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckBoxField;
