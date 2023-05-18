import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaGithub } from "react-icons/fa";
const Register = () => {
    return (
        <div className='w-1/3 mx-auto shadow-2xl bg-base-100 border-0 p-10 mb-5 rounded-xl'>
            <h1 className='font-bold text-3xl text-center'>Register Now</h1>
            <form>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <p className='mt-3'>Already have a account? <Link to='/login'><a className="link link-accent">login now</a></Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
            </form>
            <p className='text-center mt-5 mb-1 font-semibold text-gray-500 text-xl'>or</p>
            <hr className='mb-5' />
            <button className='w-full flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-[#3b5998] hover:bg-[#154abb]'><FaFacebookF></FaFacebookF><span>Sign in with Facebook</span></button>
            <button className='w-full mt-3 flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-gray-700 hover:bg-gray-800'><FaGithub></FaGithub>Sign in with Github</button>
        </div>
    );
};

export default Register;