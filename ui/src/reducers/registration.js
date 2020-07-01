import types from "../actions/registration";

export const initialState = {
    registrationSubmitting: false,
    errors: [],
    registrationSuccess: false, 
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTRATION_REQUESTED:
            return {
                ...state,
                registrationSubmitting: true,
                errors: [],
                registrationSuccess: false
            }; 

        case types.REGISTRATION_SUCCEEDED:
            return {
                ...state,
                registrationSubmitting: false,
                registrationSuccess: true
            };

        case types.REGISTRATION_FAILED:
            return {
                ...state,
                registrationSubmitting: false,
                errors: action.error,
                registrationSuccess: false
            };
        
        case types.REGISTRATION_RESET:
            return {
                ...initialState
            }
        
        default:
            return state;
    }
};