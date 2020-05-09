import React from 'react';
import logo from './logo.svg';
import M from 'materialize-css';

import './App.css';
import './index.css';

import Header from "./components/Header"
import Breadcrumb from "./components/Breadcrumb"
import Footer from "./components/Footer"
import ListOfCards from "./components/ListOfCards"

function App() {
  return (
    <div>
      <Header/>
      <Breadcrumb/>
      
      <Footer/>
    </div>
  );
}

export default App;
