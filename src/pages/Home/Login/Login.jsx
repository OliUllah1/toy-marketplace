import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {
  const [error,setError]=useState('');
  const {signIn}=useContext(AuthContext)
  const handleLogin =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('')
    if(password.length<6){
      setError('provide the 6 character password and try again')
      return;
    }
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      form.reset();
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
  }
    return (
        <div className='w-1/3 mx-auto shadow-2xl bg-base-100 border-0 p-10 mb-5 rounded-xl'>
            <h1 className='font-bold text-3xl text-center'>Login Now</h1>
            <form onSubmit={handleLogin}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <p className='mt-3'>New here?<Link to='/register'><a className="link link-accent">create an a account</a></Link></p>
        </div>
        {
          error?<p className='mt-2 text-red-500'>{error}</p>:''
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>
            <p className='text-center mt-5 mb-1 font-semibold text-gray-500 text-xl'>or</p>
            <hr className='mb-5' />
            <button className='w-full flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-[#3b5998] hover:bg-[#154abb]'><FaFacebookF></FaFacebookF><span>Sign in with Facebook</span></button>
            <button className='w-full mt-3 flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-gray-700 hover:bg-gray-800'><FaGithub></FaGithub>Sign in with Github</button>
        </div>
    );
};

export default Login;