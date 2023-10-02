import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail:id/" element={<Detail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
