import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Student from './components/Student/Student';
import Fee from './components/Fee/Fee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Student></Student>
        <Fee></Fee>
      </header>
    </div>
  );
}

export default App;
