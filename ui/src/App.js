import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './createStore';

import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/register">
              <RegistrationPage />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </div>
      
    </Provider>
  );
}

export default App;
