import React from 'react';
import './App.css';
import Button from './Components/Elements/Button';
import Login from './Components/Pages/Login';
import Navbar from './Components/Fragments/Navbar';
import Page1Dosen from './Components/Pages/Page1Dosen';
import Page2Dosen from './Components/Pages/Page2Dosen';
import Page3Dosen from './Components/Pages/Page3Dosen';
import Page4Dosen from './Components/Pages/Page4Dosen';
import DropdownDate from './Components/Elements/DropdownDate';
import Page1Mahasiswa from './Components/Pages/Page1Mahasiswa';
import Page2Mahasiswa from './Components/Pages/Page2Mahasiswa';

function App() {
  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      {/* <Login></Login> */}
      {/* <Page1Dosen></Page1Dosen> */}
      {/* <Page2Dosen></Page2Dosen> */}
      {/* <Page3Dosen></Page3Dosen> */}
      {/* <Page4Dosen></Page4Dosen> */}
      {/* <Page1Mahasiswa></Page1Mahasiswa> */}
      <Page2Mahasiswa></Page2Mahasiswa>
    </div>
  );
}

export default App;