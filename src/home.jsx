import React from "react";
import { Link } from "react-router-dom";
import Navbar from './components/navbar';
import Info from './components/info';
import Stats from './components/stats';
import Dcord from './components/dcord';
import Head from './components/head';

function Home() {
    return(
        <div>
            <Navbar />
            <Head />
            <Info />
            <Stats />
            <Dcord />
        </div>
    );
}

export default Home;