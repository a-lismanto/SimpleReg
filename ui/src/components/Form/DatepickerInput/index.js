import React from "react";
import styled from "styled-components";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 400;
`;


class DatePickerInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (date) {
        this.props.input.onChange(date);
    }
     
    handleOnBlur = () => {
        // to prevent error
    };
    
    render() {
        const {
            input, placeholder,
            label, shouldDisable
        } = this.props;
      
        return (
            <Container>
                <div><Label>{label}</Label></div>
                <Datepicker
                    {...input}
                    autoComplete="off"
                    placeholder={placeholder}
                    dateFormat="yyyy-MM-dd"
                    selected={input.value}
                    disabled={shouldDisable}
                    onChange={this.handleChange}
                    onBlur={this.handleOnBlur}
                />
            </Container>
        );
    }
}

export default DatePickerInput;