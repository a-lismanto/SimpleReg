import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as effects from "./registration";

describe("auth effects", () => {

    it("create user successfully", async () => {
        const mockStore = configureMockStore([thunk]);
    
        let store = mockStore({
        });
    
        const mockJsonPromise = Promise.resolve({
          result: {}
        });
        const mockFetchPromise = Promise.resolve({
          ok: true,
          json: () => mockJsonPromise,
        });
    
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);    
    
        const expectedActions = [
          { type: "REGISTRATION/REQUESTED" },
          { type: "REGISTRATION/SUCCEEDED" }
        ];
    
        const form = {
          mobile: '0361 443322',
          firstname: 'unit',
          lastname: 'tes',
          email: 'unit.test@test.com'
        }
        
        await store.dispatch(effects.createUser(form));
    
        expect(store.getActions()).toEqual(expectedActions);
      });

      it("handle create user failed", async () => {
        const mockStore = configureMockStore([thunk]);
    
        let store = mockStore({
        });
    
        const errMsg = [
            {message: "ERR1"},
            {message: "ERR2"}
        ];
        const mockJsonPromise = Promise.resolve({
          message: [...errMsg]
        });
        const mockFetchPromise = Promise.resolve({
          ok: false,
          json: () => mockJsonPromise,
        });
    
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);    
    
        const expectedActions = [
          { type: "REGISTRATION/REQUESTED" },
          { type: "REGISTRATION/FAILED", error: [...errMsg] }
        ];
    
        const form = {
          mobile: '0361 443322',
          firstname: 'unit',
          lastname: 'tes',
          email: 'unit.test@test.com'
        }
        
        await store.dispatch(effects.createUser(form));
    
        expect(store.getActions()).toEqual(expectedActions);
      });
});