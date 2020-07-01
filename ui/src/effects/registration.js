import { registrationRequested, registrationSucceeded } from "../actions/registration"
const later = (timeout, callback) => {
    return new Promise(resolve => {
        setTimeout(resolve.bind(null, callback), timeout)
    });
}

export function createUser(form) {
    return (dispatch, getState) => {
        dispatch(registrationRequested());

        later(3000).then(() => {
            console.log("after waiting");
            console.log(form);
            dispatch(registrationSucceeded());
        });
    };
}