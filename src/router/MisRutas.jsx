import React from 'react'
import {Routes, Route, BrowserRouter,Navigate} from 'react-router-dom';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Main from '../components/Main';

const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER */}
        <Header/>
        {/* MAIN */}
        <Main/>
        {/* FOOTER */}
        <Footer/>
    </BrowserRouter>
  )
}

export default MisRutas