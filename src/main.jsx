import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Pages/Login';
import Page1Dosen from './Components/Pages/Page1Dosen'
import Page2Dosen from './Components/Pages/Page2Dosen'
import Page3Dosen from './Components/Pages/Page3Dosen';
import Page4Dosen from './Components/Pages/Page4Dosen';
import DropdownDate from './Components/Elements/DropdownDate';
import Page1Mahasiswa from './Components/Pages/Page1Mahasiswa';
import Page2Mahasiswa from './Components/Pages/Page2Mahasiswa';
import Page3Mahasiswa from './Components/Pages/Page3Mahasiswa';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>,
  },
  {
    path: '/HomeDosen',
    element: <Page1Dosen />,
  },
  {
    path: '/HomeMahasiswa',
    element: <Page1Mahasiswa />,
  },
  {
    path: '/SetoranMahasiswa',
    element: <Page2Dosen />,
  },
  {
    path: '/InputSetoran',
    element: <Page3Dosen />,
  },
  {
    path: '/StatistikMahasiswa',
    element: <Page4Dosen />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
