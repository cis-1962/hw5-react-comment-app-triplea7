import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <link rel="stylesheet" type="text/css" href="../src/main.css" />
    <App />
  </React.StrictMode>,
);
