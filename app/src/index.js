import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<App />} />
        </Route>
      </Routes>
  </BrowserRouter>
);