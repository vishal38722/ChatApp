import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>     // if we use this code then useEffect might render the elements twice
  //   <App />
  // </React.StrictMode>

  <>
  <App />
  </>
);


