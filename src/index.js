import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MyComponent from "./physicalShop/physicalShop";
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';
import './fonts/Aller_BdIt.ttf';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/conkpunks" element={<MyComponent />} />
    </Routes>
  </BrowserRouter>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
