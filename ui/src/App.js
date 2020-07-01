import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './createStore';

import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RegistrationPage />
      </div>
    </Provider>
  );
}

export default App;
