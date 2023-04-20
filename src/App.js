import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastProvider } from 'react-toastify';

//pages
import Main from './pages/main';
import Login from './pages/Loginpage';

function App() {
  
 
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="Main" element={<Main />} /> 
    </Routes>
 
 
  </BrowserRouter>
    </div>
  );
}

export default App;