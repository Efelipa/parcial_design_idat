import { use, useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Inicio from './pages/Inicio.jsx';
import Carta from './pages/Carta.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/carta' element={<Carta/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
