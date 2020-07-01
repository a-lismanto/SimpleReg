import config from "../config";
import { registrationRequested, registrationSucceeded, registrationFailed } from "../actions/registration"

export function createUser(form) {
    return async (dispatch, getState) => {
        dispatch(registrationRequested());

        let url = `${config.serviceBaseUrl}/${config.serviceEndpointCreateUser}`;
        let dob = null;
        if (Object.prototype.toString.call(form.birthday) === "[object Date]") {
            let y = form.birthday.getFullYear();
            let m = form.birthday.getMonth() + 1;
            let d = form.birthday.getDate();
            if (m < 10) {
                m = "0" + m;
            }
            if (d < 10) {
                d = "0" + d;
            }
            dob = `${y}-${m}-${d}`;
        }
        let param = {
            ...form,
            birthday: dob
        }

        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(param)
            });

            let json = await response.json();

            if (response.ok) {
                dispatch(registrationSucceeded());
            } else {
                dispatch(registrationFailed(json.message));
            }

        } catch (err) {
            dispatch(registrationFailed([{message: "An unknown error occured while registering"}]));
        }

    };
}