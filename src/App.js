// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/js/Login';
import Beranda from './components/js/Beranda';

function App() {
  return (
      <Router>
        <Routes >
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<Beranda/>}/>
        </Routes>
      </Router>
  );
}

export default App;
