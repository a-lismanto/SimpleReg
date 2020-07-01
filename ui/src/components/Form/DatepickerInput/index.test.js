import React from "react";
import { shallow } from "enzyme";
import DatePickerInput from "./index";

describe("DatepickerInput", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<DatePickerInput 
                                label="Question"
                                input={{name: "question"}}
                                meta={{touched: false, error: undefined}}
                            />);
    
    expect(wrapper.length).toEqual(1);
  });
});