import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { AppContextProvider} from './Context/AppContext';
import './App.css';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <AppContextProvider>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
