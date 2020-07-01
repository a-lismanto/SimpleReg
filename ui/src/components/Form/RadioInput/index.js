import React from "react";
import styled from "styled-components";
import { Field } from 'redux-form';

// const  { input } = React.DOM;

const Container = styled.div`
    margin-bottom: 15px;
`;
const LabelContainer = styled.div`
    margin-bottom: 4px;
`;
const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 400;
`;
const OptionLabel = styled.label`
    min-width: 80px;
    display: inline-block;  
`;


const Radio = styled.input``;

class RadioInput extends React.Component {
    renderOption(option, label, index) {
        let { shouldDisable } = this.props;
        let input = {
            name: label,
            value: option,
            disabled: shouldDisable
        };
         
        return (
            <OptionLabel key={index}>
                <Field {...input} type="radio" component="input" name={label} value={option} />
                {option[0].toUpperCase() +  option.slice(1)}
            </OptionLabel>
        );
    }

    render() {
        let {label, options} = this.props;
        return (
        <Container>
            <LabelContainer><Label>{label}</Label></LabelContainer>
            {options.map((option, index) => {
                return this.renderOption(option, label, index)
            })}
        </Container>
        );
    }
}

export default RadioInput;