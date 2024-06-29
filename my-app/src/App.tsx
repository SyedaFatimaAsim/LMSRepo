import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersistentDrawerLeft from './Pages/Dashboard';
import AppRoute from './config/appRouter';
import Students from './Screen/Student';

function App() {
  return (
    <div className="App">
     {<AppRoute />}
    </div>
  );
}

export default App;
