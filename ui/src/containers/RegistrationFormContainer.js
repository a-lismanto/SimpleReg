import React from "react";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';

import RegistrationForm from '../components/RegistrationForm';

import { selectRegistrationSubmitting } from '../selectors/registration';

import { createUser } from "../effects/registration";

export class RegistrationFormContainer extends React.Component {
    submit = (formValues) => {
        // const { isSubmitting, domainError, initialValues, savePerson } = this.props;
    
        // if (isSubmitting || (domainError && domainError.isFatal))
        //   return;
    
        // const { id } = initialValues;
    
        // savePerson(id, formValues);onSave={handleSubmit(this.submit)}
        
        console.log("submit", formValues)
        const { createUser } = this.props;
        createUser(formValues);
    };
    
    render() {
        const { isSubmitting, handleSubmit } = this.props;
    
        return (
          <RegistrationForm
            isSubmitting={isSubmitting}
            onSave={handleSubmit(this.submit)}
          />
        );
    }
}

let ConnectedRegistrationFormContainer = RegistrationFormContainer;

const mapStateToProps = (state) => ({
  isSubmitting: selectRegistrationSubmitting(state),
});

const mapDispatchToProps = {
    createUser
}

ConnectedRegistrationFormContainer = reduxForm({
  form: 'registration'
})(ConnectedRegistrationFormContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRegistrationFormContainer);
