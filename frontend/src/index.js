import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInSide from './components/signinandup/SignInSide';
import SignUpSide from './components/signinandup/SignUpSide';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie';

function Site() {
  const [isSignIn, setSignIn] = React.useState(false);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App isSignIn={isSignIn} />} /> 
          <Route path="/signin" element={<SignInSide isSignIn={isSignIn} setSignIn={setSignIn} />} />
          <Route path="/signup" element={<SignUpSide isSignIn={isSignIn} setSignIn={setSignIn} />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
