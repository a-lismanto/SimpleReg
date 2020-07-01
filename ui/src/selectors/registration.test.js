import * as selectors from "./registration";
import { initialState } from "../reducers/registration";

describe("registration selectors", () => {
    function setupState(alteredState) {
        return {
            registration: {
                ...initialState,
                ...alteredState
            }
        };
      }

    describe("selectRegistrationSubmitting", () => {
        it("should return selectRegistrationSubmitting", () => {
            const alteredState = {
                registrationSubmitting: true
            };
            const state = setupState(alteredState);

            const result = selectors.selectRegistrationSubmitting(state);
            expect(result).toBe(true);
        });
    });
    
    describe("selectRegistrationSuccess", () => {
        it("should return selectRegistrationSubmitting", () => {
          const alteredState = {
              registrationSuccess: true
            };
            const state = setupState(alteredState);
      
            const result = selectors.selectRegistrationSuccess(state);
            expect(result).toBe(true);
        });
    });

    describe("selectRegistrationErrors", () => {
        it("should return selectRegistrationSubmitting", () => {
          const alteredState = {
              errors: [{message: "error"}]
            };
            const state = setupState(alteredState);
      
            const result = selectors.selectRegistrationErrors(state);
            expect(result.length).toBe(1);
        });
      });
      
  });