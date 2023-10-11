import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import PageContainer from './container/PageContainer';
import { useSelector } from 'react-redux';


function App() {
  const {drawer}= useSelector(state => state.drawer);

  
  return (
  
    <PageContainer>
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
      {drawer && <Card />}
    <Footer />
  </BrowserRouter>
  </PageContainer>
  );
}

export default App;
