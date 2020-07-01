import React from "react";
import { shallow } from "enzyme";
import { RegistrationFormContainer } from "./RegistrationFormContainer";

describe("RegistrationFormContainer", () => {
  it("Should render", () => {
    const wrapper = shallow(<RegistrationFormContainer handleSubmit={jest.fn()}/>);

    expect(wrapper.length).toEqual(1);
  });
});