import React from "react";
import { shallow } from "enzyme";
import TextInput from "./index";

describe("TextInput", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<TextInput 
                                label="Question"
                                placeholder="Required"
                                type="text"
                                input={{name: "question"}}
                                meta={{touched: false, error: undefined}}
                            />);
    
    expect(wrapper.length).toEqual(1);
    
  });
});