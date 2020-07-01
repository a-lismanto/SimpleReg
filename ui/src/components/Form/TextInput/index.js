import React from "react";
import styled from "styled-components";


const Container = styled.div`
    margin-bottom: 15px;
`;
const LabelContainer = styled.div`
    margin-bottom: 8px;
`;
const Label = styled.label`
    padding: 4px 0;
    font-size: 0.9rem;
    font-weight: 400;
`;
const StyledInput = styled.input`
    width: 98.6%;
`;
const ErrorContainer = styled.div`
	position: relative;
	border: none;
    background-color: red;
    display: inline-block;
    position: relative;
    float: right;
    width: 60%;
    color: #fff;
    padding: 4px;
    top: -9px;
    
    &:after {
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: rgba(255, 0, 0, 0);
        border-top-color: #F00;
        border-width: 10px;
        margin-left: -10px;
    }
    
`;

class TextInput extends React.Component {

    render() {
        let {input, label, placeholder, type, meta, shouldDisable } = this.props;
        const hasError = meta && meta.touched && meta.error;
        
        let inputParam = {
            ...input,
            disabled: shouldDisable
        }

        return (
        <Container>
            <LabelContainer>
                <Label>{label}</Label>
                {hasError &&
                    <ErrorContainer>
                        {meta.error}
                    </ErrorContainer>
                }
            </LabelContainer>
            <StyledInput 
                {...inputParam}
                autoComplete="off"
                type={type}
                placeholder={placeholder}
            />
        </Container>
        );
    }
}

export default TextInput;
