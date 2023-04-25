import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center font-2xl'>
            <Link to='/'>Home</Link>
            <Link to="/login" className=' px-5'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;