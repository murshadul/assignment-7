import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const rootlayout = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
          <Footer></Footer>
           <ToastContainer />
        </div>
    );
};

export default rootlayout;