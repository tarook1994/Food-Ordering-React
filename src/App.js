import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Containers/MainPage/MainPage'
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <MainPage/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
