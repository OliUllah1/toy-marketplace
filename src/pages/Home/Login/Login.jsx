import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../Provider/AuthProvider';
import GoogleAndGithubLogin from './GoogleAndGithubLogin';

const Login = () => {
  const [error,setError]=useState('');
  const {signIn}=useContext(AuthContext);
  const location =useLocation();
  const from = location.state?.from?.pathname||'/';
  const navigate = useNavigate();

  
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
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
  }
    return (
        <div className='w-1/3 mx-auto shadow-2xl bg-base-100 border-0 p-10 my-10 rounded-xl'>
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
            <GoogleAndGithubLogin></GoogleAndGithubLogin>
        </div>
    );
};

export default Login;