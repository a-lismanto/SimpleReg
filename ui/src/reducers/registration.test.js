import reducer, { initialState } from "./registration";
import * as actions from "../actions/registration";

describe("registration reducer", () => {
    it("should have default state", () => {
        const reducerInitialState = reducer(undefined, {});
    
        expect(reducerInitialState).toEqual(initialState);
    });

    it("should handle registrationRequested", () => {
        const state = { ...initialState };
    
        const action = actions.registrationRequested();
        const newState = reducer(state, action);
    
        expect(newState.registrationSubmitting).toBe(true);
        expect(newState.errors).toEqual([]);
        expect(newState.registrationSuccess).toBe(false);
    });

    it("should handle registrationSucceeded", () => {
        const state = { ...initialState };
    
        const action = actions.registrationSucceeded();
        const newState = reducer(state, action);
    
        expect(newState.registrationSubmitting).toBe(false);
        expect(newState.registrationSuccess).toBe(true);
    });
    
    it("should handle registrationFailed", () => {
        const state = { ...initialState };
    
        const action = actions.registrationFailed([{message: "error"}]);
        const newState = reducer(state, action);
    
        expect(newState.registrationSubmitting).toBe(false);
        expect(newState.errors.length).toBe(1);
        expect(newState.registrationSuccess).toBe(false);
    });

    it("should handle registrationReset", () => {
        const state = { ...initialState };
    
        const action = actions.registrationReset();
        const newState = reducer(state, action);
    
        expect(newState).toEqual(initialState);
    });
});