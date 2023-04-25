import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='my-5 mx-5'>
            <Toaster />
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;