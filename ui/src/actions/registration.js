const REGISTRATION_REQUESTED = "REGISTRATION/REQUESTED";
const REGISTRATION_SUCCEEDED = "REGISTRATION/SUCCEEDED";
const REGISTRATION_FAILED = "REGISTRATION/FAILED";

export default {
    REGISTRATION_REQUESTED,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_FAILED
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