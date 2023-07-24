import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DAppProvider } from "@usedapp/core";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <Router>
        <Routes>
          <Route path="/bravo" element={<App/>} />
        </Routes>
      </Router>
    </DAppProvider>
  </React.StrictMode>
);
