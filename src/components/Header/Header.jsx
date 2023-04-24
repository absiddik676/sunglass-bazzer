import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to="/login" className=' px-5'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;