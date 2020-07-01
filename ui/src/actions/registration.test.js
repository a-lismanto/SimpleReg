import types, * as actions from "./registration";

describe("registration actions", () => {
    describe("registration requested", () => {
        it("should return action", () => {
          const action = actions.registrationRequested();
          expect(action.type).toBe(types.REGISTRATION_REQUESTED);
        });
    });
    describe("registration succeeded", () => {
        it("should return action", () => {
          const action = actions.registrationSucceeded();
          expect(action.type).toBe(types.REGISTRATION_SUCCEEDED);
        });
    });
    describe("registration failed", () => {
        it("should return action", () => {
          const action = actions.registrationFailed("err");
          expect(action.type).toBe(types.REGISTRATION_FAILED);
        });
    });
    describe("registration reset", () => {
        it("should return action", () => {
          const action = actions.registrationReset("err");
          expect(action.type).toBe(types.REGISTRATION_RESET);
        });
    });
});