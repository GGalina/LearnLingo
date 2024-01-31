import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from "react-redux";
//import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from 'Redux/store';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <App />
        </Router>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);