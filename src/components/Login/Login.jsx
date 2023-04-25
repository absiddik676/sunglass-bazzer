import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.config';
import { toast } from 'react-hot-toast';

const Login = () => {
    const auth = getAuth(app);
    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             console.log(userCredential);
             toast.success('Successfully Login!')
             e.target.reset();
            })
            .catch((error) => {
              console.log(error);
              toast.error(`${error.message}`)
            });
    }
    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <form onSubmit={handelLogin} action="">
                <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs " /> <br />
                <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs my-5" />
                <button type='submit' className="btn btn-active btn-primary w-full">Submit</button><br />
            </form>
            <p className='text-lg mt-3'>New to this website,<Link className="link link-primary" to="/register">please register</Link></p>
        </div>
    );
};

export default Login;