import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Completed from "./Completed";

test("matches snapshot", () => {
  const wrapper = shallow(<Completed />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
