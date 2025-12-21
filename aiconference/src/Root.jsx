import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import RegDetails from './reg-about/reg.jsx';

function Root() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/reg" element={<RegDetails />}/>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Root;
