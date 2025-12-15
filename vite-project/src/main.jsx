import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignUp from "./Pages/SignUp.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import  Header from "./Component/Header.jsx";
import Login from './Pages/Login.jsx';
import  Footer from "./Component/Footer.jsx";
import Ride from './Pages/Ride.jsx';
import Driver from './Pages/Driver.jsx';



import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Ride" element={<Ride />} />
      <Route path="/Driver" element={<Driver />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  <>
  </>
  

)



