import React from "react";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import RegistrationForm from '../components/RegistrationForm';

import { selectRegistrationSubmitting, selectRegistrationSuccess, selectRegistrationErrors } from '../selectors/registration';

import { createUser } from "../effects/registration";

const Container = styled.div`
    width: 600px;
    padding: 16px;
    margin: 20px auto 0;
    text-align: left;
    background-color: #fafafa;
    border-radius: 2px;
`;

const StyledButton = styled.button`
    width: 100%;
    background-color: #9c27b0;
    border: none;
    border-radius: 2px;
    color: #fff;
    height: 44px;
`;

const StyledLink = styled(Link)`
    width: 96.4%;
    background-color: #9c27b0;
    border: none;
    border-radius: 2px;
    color: #fff;
    height: 22px;
    display: inline-block;
    text-align: center;
    padding: 11px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
`;

export class RegistrationFormContainer extends React.Component {
    submit = (formValues) => {
        console.log("submit", formValues)
        const { createUser } = this.props;
        createUser(formValues);
    };
    
    render() {
        const { isSubmitting, handleSubmit, isRegistrationSuccess, registrationErrors } = this.props;
        console.log("isSubmitting", isSubmitting);
        const shouldDisabled = isRegistrationSuccess === true ? true : isSubmitting
        return (
            <>
                <RegistrationForm
                    isSubmitting={isSubmitting}
                    onSave={handleSubmit(this.submit)}
                    shouldDisabled={shouldDisabled}
                />
                {isRegistrationSuccess && 
                    <Container>
                        <StyledLink to="/">
                            Login
                        </StyledLink>
                    </Container>
                }
            </>
        );
    }
}

let ConnectedRegistrationFormContainer = RegistrationFormContainer;

const mapStateToProps = (state) => ({
  isSubmitting: selectRegistrationSubmitting(state),
  isRegistrationSuccess: selectRegistrationSuccess(state),
  registrationErrors: selectRegistrationErrors(state)
});

const mapDispatchToProps = {
    createUser
}

ConnectedRegistrationFormContainer = reduxForm({
  form: 'registration'
})(ConnectedRegistrationFormContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRegistrationFormContainer);
