import React from "react";
import { RegistrationForm, StyledForm } from "./RegistrationForm";
import { shallow } from "enzyme";

describe("RegistrationForm", () => {
    it("should render default state", () => {
      const handleSubmit = jest.fn();
      const wrapper = shallow(
        <RegistrationForm
            isSubmitting={false}
            onSave={jest.fn()}
            shouldDisabled={false}
            errors={[]}
        />
      );

      const fields = wrapper.find("Styled(Field)");
      expect(fields.length).toEqual(6);
    });
  });