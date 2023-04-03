import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//components
import Main from './pages/Main';
import Login from './pages/Loginpage';

function App() {
  
 
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="Main" element={<Main />} /> 
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;