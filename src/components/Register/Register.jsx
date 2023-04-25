import React from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
import { toast } from 'react-hot-toast';
const Register = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelSubmit = ()=>{

    }

    const handelGoogleLogin = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result);
            toast.success('Successfully Login!')
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handelgithubLogin = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            console.log(result);
            toast.success('Successfully Login!')
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <form onSubmit={handelSubmit} action="">
                <input type="text" placeholder="Enter Your Name" className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                <input type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs " /> <br />
                <input type="text" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs my-5" />
                <button type='submit' className="btn btn-active btn-primary w-full mb-3">Submit</button>
            </form>
                <p><small className='text-lg'>You Already register? please <Link to='/login' className="link link-primary">Login</Link></small></p> 
                <div>
                    <h1 className='text-xl text-center my-3 font-semibold'>Continue with </h1>
                    <button onClick={handelGoogleLogin} className="btn btn-primary mr-5">Google</button>
                    <button onClick={handelgithubLogin} className="btn btn-primary">Github</button>
                </div>
        </div>
    );
};

export default Register;