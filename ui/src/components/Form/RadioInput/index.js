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
    font-size: 0.8rem; 
`;


const Radio = styled.input``;

class RadioInput extends React.Component {
    renderOption(option, name, index) {
        let { shouldDisable } = this.props;
        let input = {
            name: name,
            value: option,
            disabled: shouldDisable
        };
         
        return (
            <OptionLabel key={index}>
                <Field {...input} type="radio" component="input" value={option} />
                {option[0].toUpperCase() +  option.slice(1)}
            </OptionLabel>
        );
    }

    render() {
        let {label, options, input: {name}} = this.props;
        return (
        <Container>
            <LabelContainer><Label>{label}</Label></LabelContainer>
            {options.map((option, index) => {
                return this.renderOption(option, name, index)
            })}
        </Container>
        );
    }
}

export default RadioInput;