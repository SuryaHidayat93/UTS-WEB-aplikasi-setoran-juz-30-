import React from 'react';
import './App.css';
import Button from './Components/Elements/Button';
import Login from './Components/Pages/Login';
import Navbar from './Components/Fragments/Navbar';
import Page1Dosen from './Components/Pages/Page1Dosen';
import Page2Dosen from './Components/Pages/Page2Dosen';

function App() {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      {/* <Login></Login> */}
      {/* <Page1Dosen></Page1Dosen> */}
      <Page2Dosen></Page2Dosen>
    </div>
  );
}

export default App;