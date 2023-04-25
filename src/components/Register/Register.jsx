import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [error,setError] = useState('')
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        setError('')
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please add one upper case');
            return;
        }
        else if(!/[a-zA-Z0-9]{8,}/.test(password)){
            setError('Password must be 8 character');
            return
        }
        console.log(email);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            result.user.displayName = name
            console.log(result);
            toast.success('Successfully create account!')
            setError('')
            e.target.reset();
            
        })
        .catch((error) => {
           setError(error.message);
        });
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
                <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                <input name='email' type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs " /> <br />
                <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered input-primary w-full max-w-xs my-5" />
                <button type='submit' className="btn btn-active btn-primary w-full mb-3">Submit</button>
            </form>
                <p><small className='text-lg'>You Already register? please <Link to='/login' className="link link-primary">Login</Link></small></p> 
                <div>
                    <h1 className='text-xl text-center my-3 font-semibold'>Continue with </h1>
                    <button onClick={handelGoogleLogin} className="btn btn-primary mr-5">Google</button>
                    <button onClick={handelgithubLogin} className="btn btn-primary">Github</button>
                </div>
                <p>{error}</p>
        </div>
    );
};

export default Register;