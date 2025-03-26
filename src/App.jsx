import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import Hero from "./components/Hero";
import Resume from './Resume';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Template from './components/Template';
import {Routes, Route } from 'react-router-dom';
const App = () => {
  const [name, setUsername] = useState('Akhil Kompally');
  return (
    <>
    <Navbar/>

     
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Features />} />
        <Route path="/template" element={<Template />} />
      </Routes>
      {/* <div className='flex h-screen'>
        <div class="flex-1 overflow-hidden flex items-center">
          <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="flex-1 flex items-center justify-center">
          <PDFViewer showToolbar={false} width='100%' height='100%'>
            <Resume name={name} />
          </PDFViewer>
        </div>
      </div> */}
    </>
  );
};

export default App;
