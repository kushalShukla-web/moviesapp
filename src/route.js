import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/landingPage'
import Checkout from './components/Checkout'

function route(props) {
    return (
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path ="/checkout" element={<Checkout/>} />\
            </Routes>
    );
}

export default route;
