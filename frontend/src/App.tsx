import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Router from './Routes';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
