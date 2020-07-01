import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("Should render", () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper.length).toEqual(1);
  });
});