import React from "react";
import styled from "styled-components";
import { Field } from 'redux-form';

// const  { input } = React.DOM;

const Container = styled.div``;
const Label = styled.label``;
// const Radio = styled.input.attrs({
//     type: 'radio',
//   })``;
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
            <label key={index}>
                <Field {...input} type="radio" component="input" name={label} value={option} />
                {option}
            </label>
        );
    }

    render() {
        let {label, options} = this.props;
        return (
        <Container>
            <div><Label>{label}</Label></div>
            {options.map((option, index) => {
                return this.renderOption(option, label, index)
            })}
        </Container>
        );
    }
}

export default RadioInput;