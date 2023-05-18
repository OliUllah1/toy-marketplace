import React from 'react';
import Navber from '../pages/Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
        <Navber></Navber>
        <Outlet></Outlet>  
        <Footer></Footer>
        </>
    );
};

export default Main;