import React from "react";
import { shallow } from "enzyme";
import RadioInput from "./index";

describe("RadioInput", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<RadioInput 
                                label="Question"
                                options={["1","2","3","4","5"]}
                                input={{name: "question"}}
                            />);
    expect(wrapper.length).toEqual(1);
    let options = wrapper.find("Field");
    expect(options.length).toEqual(5);
  });
});