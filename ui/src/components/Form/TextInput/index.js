import React from "react";
import styled from "styled-components";


const Container = styled.div``;
const Label = styled.label``;
const StyledInput = styled.input`
    width: 98.6%;
`;
const ErrorContainer = styled.div`
    background-color: red;
`;

class TextInput extends React.Component {

    render() {
        let {input, label, placeholder, type, meta, shouldDisable} = this.props;
        const hasError = meta && meta.touched && meta.error;
        
        let inputParam = {
            ...input,
            disabled: shouldDisable
        }

        return (
        <Container>
            <div><Label>{label}</Label></div>
            <StyledInput 
                {...inputParam}
                autoComplete="off"
                type={type}
                placeholder={placeholder}
            />
            {hasError &&
                <ErrorContainer>
                    {meta.error}
                </ErrorContainer>
            }
        </Container>
        );
    }
}

export default TextInput;
