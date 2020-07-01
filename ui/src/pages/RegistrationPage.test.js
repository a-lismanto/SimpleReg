import React from "react";
import { shallow } from "enzyme";
import RegistrationPage from "./RegistrationPage";

describe("RegistrationPage", () => {
  it("Should render", () => {
    const wrapper = shallow(<RegistrationPage />);

    expect(wrapper.length).toEqual(1);
  });
});