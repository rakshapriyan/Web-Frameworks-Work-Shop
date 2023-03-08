import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/AddValue';
import DisplayData from './components/Display'

function App() {
  return (  
    <div>
      <Create />
      <DisplayData />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path = "/" element = {Create} />
    //     <Route path = "/update " element = {DisplayData} />
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;
