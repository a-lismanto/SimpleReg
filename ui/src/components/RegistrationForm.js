import React from "react";
import styled, {css} from "styled-components";
import { Field } from "redux-form";

import TextInput from "./Form/TextInput"
import RadioInput from "./Form/RadioInput";
import DateInput from "./Form/DatepickerInput";

import { required, email, indonesianPhone } from "../utils/validate";

const StyledForm = styled.form`
    width: 600px;
    padding: 16px;
    margin: 40px auto 0;
    text-align: left;
    background-color: #fafafa;
    border-radius: 2px;
`;
const StyledField = styled(Field)``;


const ButtonContainer = styled.div`
  text-align: center;
`;

const FormErrorContainer = styled.div`
    background-color: #f00;
    color: #fff;
    margin-bottom: 15px;
    border-radius: 2px;
    padding: 4px;
`;

const FormErrorLine = styled.div`
    &:before {
        content: "! "
    }
`;

const StyledButton = styled.button`
    width: 100%;
    background-color: #9c27b0;
    border: none;
    border-radius: 2px;
    color: #fff;
    height: 44px;
    font-weight: 400;
    font-size: 1rem;

    ${props => props.disabled && css`
        background: #e1bfe7;
    `}
`;
  
export class RegistrationForm extends React.Component {

    render() {
        const {
            onSave,
            shouldDisabled,
            errors
        } = this.props;

        const hasError = errors && errors.length > 0;

        return (
        <StyledForm onSubmit={onSave} autocomplete="off">
            <StyledField 
                label="Mobile" 
                name="mobile"
                placeholder="Required" 
                type="text"
                component={TextInput}
                validate={[required, indonesianPhone]}
                shouldDisable={shouldDisabled}
            />
            <StyledField 
                label="Firstname"
                name="firstname" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                validate={required}
                shouldDisable={shouldDisabled}
            />
            <StyledField 
                label="Lastname"
                name="lastname" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                validate={required}
                shouldDisable={shouldDisabled}
            />
            <StyledField 
                label="Date of Birth"
                name="birthday" 
                component={DateInput}
                shouldDisable={shouldDisabled}
            />
            <StyledField 
                label="Gender"
                name="gender"
                component={RadioInput}
                options={["male", "female"]}
                shouldDisable={shouldDisabled}
            />
            <StyledField 
                label="Email"
                name="email" 
                placeholder="Required" 
                type="text"
                component={TextInput}
                validate={[required, email]}
                shouldDisable={shouldDisabled}
            />
            {hasError &&
                <FormErrorContainer>
                {
                    errors.map((err, index) => {
                        return <FormErrorLine key={index}>{err.message}</FormErrorLine>
                    })
                }
            </FormErrorContainer>
            }
            <ButtonContainer>
                <StyledButton
                    type="submit"
                    disabled={shouldDisabled}
                >Register</StyledButton>
            </ButtonContainer>
        </StyledForm>
        );
    }
}

export default RegistrationForm;