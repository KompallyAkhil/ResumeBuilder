import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import Resume from './Resume';
const App = () => {
  const [name, setUsername] = useState('Akhil Kompally');
  return (
    <>
      <div className='flex h-screen'>
        <div class="flex-1 overflow-hidden flex items-center">
          
          <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="flex-1 flex items-center justify-center">
          <PDFViewer showToolbar={false} width='100%' height='100%'>
            <Resume name={name} />
          </PDFViewer>
        </div>
      </div>
    </>
  );
};

export default App;
