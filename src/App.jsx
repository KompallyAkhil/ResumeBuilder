import React from 'react';
import Hero from "./components/Hero";
import Templates from './components/Templates';
import Navbar from './components/Navbar';
import SampleTemplate from './components/SampleTemplate';
import {Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/buildresume" element={<SampleTemplate />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
};

export default App;
