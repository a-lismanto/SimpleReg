import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import registrationReducer from "./reducers/registration";

const rootReducer = combineReducers({
    form: formReducer,
    registration: registrationReducer
  });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;