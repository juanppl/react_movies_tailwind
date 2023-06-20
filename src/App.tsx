import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home.component';
import Layout from './components/layout.component';
import SerieDetailPage from './pages/serie-detail.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='serie-detail' element={<SerieDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
