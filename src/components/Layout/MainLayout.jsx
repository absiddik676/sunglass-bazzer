import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='my-5 mx-5'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;