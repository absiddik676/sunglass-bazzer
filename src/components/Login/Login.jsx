import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <form action="">
                <input type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs " /> <br />
                <input type="text" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs my-5" />
                <button className="btn btn-active btn-primary w-full">Submit</button><br />
            </form>
            <p className='text-lg mt-3'>New to this website,<Link className="link link-primary" to="/register">please register</Link></p>
        </div>
    );
};

export default Login;