import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/global';
import Router from './Routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
