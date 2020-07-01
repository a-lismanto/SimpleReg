import { registrationRequested, registrationSucceeded } from "../actions/registration"
const later = (timeout, callback) => {
    return new Promise(resolve => {
        setTimeout(resolve.bind(null, callback), timeout)
    });
}

export function createUser(form) {
    return (dispatch, getState) => {
        later(5000).then(() => {
            console.log("after waiting");
            console.log(form);
        });
    };
}