import './App.css';
import CreateIventory from "./components/CreateInventory"
import Iventory from "./components/Inventory"
import NavBar from './components/NavBar1';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Iventory />} />
          <Route exact path="/create" element={<CreateIventory />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
