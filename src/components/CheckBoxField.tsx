import React from "react";
import { useDispatch } from "react-redux";

import { apiConfig } from "../constants/apiConfig";
import { apiFetcher } from "../utils/apiFetcher/index";

import { fetchPoplation, deletePoplation } from "../store/populations/action";
import { fetchGraphData, deleteGraphData } from "../store/graph/action";
import { Prefectures } from "../store/prefectures/types";

type PropsCheckBoxField = {
  label: string;
  prefectures: Prefectures;
};
const CheckBoxField: React.FC<PropsCheckBoxField> = ({
  label,
  prefectures,
}) => {
  const dispatch = useDispatch();

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
      });
    } else {
      dispatch(deletePoplation(prefCode));
      dispatch(deleteGraphData(prefCode));
    }
  };

  const formatPrefName = (prefName: string) => {
    const indentCount: number = 4 - prefName.length;
    const indentStr = "　";
    return indentStr.repeat(indentCount) + prefName;
  };

  return (
    <>
      <h2 style={Styles.label}>{label}</h2>

      <div style={Styles.checkcardList}>
        {prefectures.result.map((prefecture) => (
          <div style={Styles.checkcard} key={prefecture.prefName}>
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
            <label
              style={Styles.text}
              htmlFor={"checkbox" + prefecture.prefCode}
            >
              {formatPrefName(prefecture.prefName)}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

const Styles: { [key: string]: React.CSSProperties } = {
  checkcardList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    justifyContent: "flex-start",
    justifySelf: "auto",
  },
  text: { display: "contents", marginLeft: "1em", cursor: "pointer" },
  checkcard: {
    borderBottom: "solid 1px",
    textAlign: "center",
    padding: "4px",
    margin: "0.5rem",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderBottom: "2px solid #000",
    marginLeft: "15pt",
    marginRight: "15pt",
  },
};

export default CheckBoxField;
