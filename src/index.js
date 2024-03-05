
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import the Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Provide the Redux store to the app */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
