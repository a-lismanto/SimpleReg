import React from "react";
import styled from "styled-components";
import { reduxForm, Field } from 'redux-form';

import TextInput from "./Form/TextInput"
import RadioInput from "./Form/RadioInput";
import DateInput from "./Form/DatepickerInput";

import { required, email, indonesianPhone } from "../utils/validate";

const StyledForm = styled.form`
    width: 600px;
    padding: 16px;
    margin: auto;
    text-align: left;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;
const StyledField = styled(Field)``;
const StyledInput = styled.input``;


export const ButtonContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
    width: 100%;
`;
  
class RegistrationForm extends React.Component {

    render() {
        const {
            isSubmitting,
            onSave
        } = this.props;


        return (
        <StyledForm onSubmit={onSave} autocomplete="off">
            {/* <TextInput label="firstname" placeholder="Required" type="text"/>
            <TextInput label="firstname" placeholder="Required" type="text"/>
            <TextInput label="lastname" placeholder="Required" type="text"/>
            <DateInput label="lastname" />
            <RadioInput label="gender" options={["female", "male"]} />
            <TextInput label="email" placeholder="Required" type="text"/> */}
            <StyledField 
                label="mobile" 
                name="mobile"
                placeholder="Required" 
                type="text"
                component={TextInput}
                // validate={[required, indonesianPhone]}
                shouldDisable={isSubmitting}
            />
            <StyledField 
                label="firstname"
                name="firstname" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                // validate={required}
                shouldDisable={isSubmitting}
            />
            <StyledField 
                label="lastname"
                name="lastname" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                //validate={required}
                shouldDisable={isSubmitting}
            />
            <StyledField 
                label="birthday"
                name="birthday" 
                component={DateInput}
                shouldDisable={isSubmitting}
            />
            <StyledField 
                label="gender"
                name="gender" 
                component={RadioInput}
                options={["female", "male"]}
                shouldDisable={isSubmitting}
            />
            <StyledField 
                label="email"
                name="email" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                // validate={[required, email]}
                shouldDisable={isSubmitting}
            />
            <ButtonContainer>
                <StyledButton
                    type="submit"
                    disabled={isSubmitting}
                >Register</StyledButton>
            </ButtonContainer>
        </StyledForm>
        );
    }
}

export default RegistrationForm;