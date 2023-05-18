import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import GoogleAndGithubLogin from '../Login/GoogleAndGithubLogin';
const Register = () => {
  const [error,setError]=useState('');
  const {createUser}=useContext(AuthContext);
  const updateUserNameAndProfileImages =(user,name,photo)=>{
    updateProfile(user,{displayName:name,photoURL:photo})
    .then(result=>{
      console.log('user update successfully')
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleRegister =(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    setError('')
    if(password.length<6){
      setError('provide the 6 character password and try again')
      return;
    }
    console.log(name,email,password,photoUrl)
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      form.reset();
      updateUserNameAndProfileImages(result.user,name,password)
      
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
  }
    return (
        <div className='w-1/3 mx-auto shadow-2xl bg-base-100 border-0 p-10 my-10 rounded-xl'>
            <h1 className='font-bold text-3xl text-center'>Register Now</h1>
            <form onSubmit={handleRegister}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name='photoUrl' placeholder="Photo" className="input input-bordered" />
            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <p className='mt-3'>Already have a account? <Link to='/login'><a className="link link-accent">login now</a></Link></p>
        </div>
        {
          error?<p className='mt-2 text-red-500'>{error}</p>:''
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
            </form>
            <GoogleAndGithubLogin></GoogleAndGithubLogin>
        </div>
    );
};

export default Register;