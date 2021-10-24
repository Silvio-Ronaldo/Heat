import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import { AuthProvider } from './contexts/auth';

import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
