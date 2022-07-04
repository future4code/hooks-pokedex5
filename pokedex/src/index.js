import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import background from '../src/assets/img/background-sea.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles photo={background}/>
  </React.StrictMode>
);
