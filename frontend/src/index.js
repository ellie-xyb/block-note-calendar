import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './components/signinandup/SignInSide';
import SignUpSide from './components/signinandup/SignUpSide';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} /> 
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpSide />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
