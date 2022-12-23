import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Provider } from 'react-redux';

import ScrollToTopWrapper from './components/ScrollToTopWrapper';
import store from '~/redux/store'
import App from './App';
import GlobalStyles from './components/GlobalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <GlobalStyles>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalStyles>
  // </React.StrictMode>
);

