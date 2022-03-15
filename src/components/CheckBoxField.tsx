import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPrefs } from "../store/prefectures/selectore";
const CheckBoxField: React.FC = () => {
  const dispatch = useDispatch();

  const prefectures = useSelector(selectPrefs);
  const handleClickCheck = () => {
    console.log("click");
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
              onChange={(event) => handleClickCheck()}
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
