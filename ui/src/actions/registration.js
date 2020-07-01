const REGISTRATION_REQUESTED = "REGISTRATION/REQUESTED";
const REGISTRATION_SUCCEEDED = "REGISTRATION/SUCCEEDED";
const REGISTRATION_FAILED = "REGISTRATION/FAILED";
const REGISTRATION_RESET = "REGISTRATION/RESET";

export default {
    REGISTRATION_REQUESTED,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_FAILED,
    REGISTRATION_RESET
};

export const registrationRequested = () => ({
    type: REGISTRATION_REQUESTED
});

export const registrationSucceeded = () => ({
    type: REGISTRATION_SUCCEEDED
});

export const registrationFailed = (error) => ({
    type: REGISTRATION_FAILED,
    error
});

export const registrationReset = (error) => ({
    type: REGISTRATION_RESET
});