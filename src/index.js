import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/lenko-vasiliy-is-your-master">
      <App />
      {/* <h1>Hello Word!</h1> */}
    </BrowserRouter>
  </React.StrictMode>
);
