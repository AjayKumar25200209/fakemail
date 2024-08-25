import React from 'react'
import "./mycss.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import  Maincontent from './Maincontent.js';
import  Test from './Test.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

          <Route path="/Main" element={<Maincontent/>} />
          <Route path="/" element={<Test/>} />
  

      </Routes>
      
      </BrowserRouter>

    </div>
    
    
  );
}

export default App;
