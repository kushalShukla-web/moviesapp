import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Context from './context/Context';
import LandingPage from './components/landingPage'
import Checkout from './components/Checkout'
function route(props) {
    return (
        <Context>
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path ="/checkout" element={<Checkout/>} />\
            </Routes>
        </Context>
    
            
    );
}

export default route;
