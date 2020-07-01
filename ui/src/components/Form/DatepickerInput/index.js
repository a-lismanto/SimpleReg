import React from "react";
import styled from "styled-components";
// import Datepicker from "react-date-picker";
import Datepicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Container = styled.div``;
const Label = styled.label``;
const StyledDatepicker = styled(Datepicker)`
background-color: white;
`;


class RadioInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (date) {
        this.props.input.onChange(date);
    }
     
    //onChangeHandler = date => { this.setState({ date }); }
    handleOnBlur = () => {
        // to prevent error
    };
    

    render() {
        // let {input, label} = this.props;
        // let {date} = this.state;
        // return (
        // <Container>
        //     <div><Label>{label}</Label></div>
        //     <StyledDatepicker 
        //         {...input}
        //         value={date}
        //         onChange={ this.onChangeHandler }
        //     />
        // </Container>
        // );
        const {
            input, placeholder,
            meta: {touched, error},
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

export default RadioInput;