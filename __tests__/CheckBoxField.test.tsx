import React from "react";
import "jsdom-global/register";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CheckBoxField from "../src/components/CheckBoxField";
import { Prefectures } from "../src/store/prefectures/types";
import { useSelector, useDispatch } from "react-redux";
import { selectPrefs } from "../src/store/prefectures/selectore";

jest.mock("react-redux");
configure({ adapter: new Adapter() });

test("test init check box field", () => {
  const inputText = "labal1";
  const prefs: Prefectures = {
    message: "hello",
    result: [
      { prefName: "name1", prefCode: 1 },
      { prefName: "name2", prefCode: 2 },
      { prefName: "name3", prefCode: 3 },
    ],
  };

  const useSelectorMock = useSelector as jest.Mock<typeof selectPrefs>;
  const useDispatchMock = useDispatch as jest.Mock;
  beforeEach(() => {
    useSelectorMock.mockReturnValue(() => prefs);
    useDispatchMock.mockReturnValue(jest.fn());
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  const wrapper = mount(
    <CheckBoxField label={inputText} prefectures={prefs} />
  );
  const checkbox_size = wrapper.find("input").length;
  const h2_label = wrapper.find("h2").text();
  expect(checkbox_size).toBe(prefs.result.length);
  expect(h2_label).toBe(inputText);
});
