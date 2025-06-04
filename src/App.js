import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";

function App() {
  return (
    <>
     <BrowserRouter>
        <Header>
          <Nav></Nav>
        </Header>
        <Routing />
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
