import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reservations from '../pages/Reservations';
import OrderOnline from '../pages/OrderOnline';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Homepages from './Homepage';


import Login from '../pages/Login';
import Feedback from '../pages/Feedback';
import Confirmation from '../pages/Confirmation';
import Thanks from '../pages/Thanks';
import SignIn from "../pages/SignIn.js";
import SuccessfullyRegistered from "../pages/SuccessfullyRegistered.js";

export default function Routing() {
    const handleSubmit= () => {
        console.log("Form submitted!");
    }
    return (
        <Routes>
            <Route path="/reservations" element={<Reservations/>}></Route>
            <Route path="/order-online" element={<OrderOnline/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="*" element={<Homepages/>} />

            <Route path="/login" element={<Login/>}></Route>
            <Route path="/feedback" element={<Feedback onSubmit={handleSubmit}/>}></Route>
            <Route path="/confirmation" element= {<Confirmation />}/>
            <Route path="/thanks" element= {<Thanks />}/>
            <Route path="/signin" element= {<SignIn />}/>
            <Route path="/successfullyregistered" element= {<SuccessfullyRegistered />}/>
        </Routes>
  );
}