import React from 'react';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Main />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}
 
export default App;