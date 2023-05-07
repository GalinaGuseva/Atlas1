import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Policy from "./components/Policy/Policy";
import NotFound from "./components/NotFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Router basename="/Atlas1">
      <Routes>
      <Route path="/" element={<App />} />      
      <Route exact path="/policy" element={<Policy />} />
      <Route exact path="/*" element={<NotFound />} />   
      </Routes>      
    </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

