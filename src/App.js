import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContainer from './container/PageContainer';

function App() {
  return (
    <PageContainer>
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail:id/" element={<Detail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </PageContainer>
  );
}

export default App;
