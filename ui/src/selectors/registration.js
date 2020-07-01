function getState(state) {
    return state.registration;
}

export function selectRegistrationSubmitting(state) {
    return getState(state).registrationSubmitting;
}

export function selectRegistrationSuccess(state) {
    return getState(state).registrationSuccess;
}
  
export function selectRegistrationErrors(state) {
    return getState(state).errors;
}