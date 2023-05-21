import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/toy-logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navber = () => {
    const {user,logOut,userProfile,userName}=useContext(AuthContext)
    const userImages = user?.photoURL || userProfile;
    const profileName =user?.displayName || userName;
    console.log(userImages)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="flex justify-between items-center bg-white shadow-md lg:mb-1">
    <div className="navbar">
      <div className=" flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-semibold" : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mytoys"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-semibold" : ""
                }
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtoy"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-semibold" : ""
                }
              >
               Add Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-semibold" : ""
                }
              >
               Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='w-20 lg:w-20 kg:h-20 flex items-center'>
        <img className="w-full h-full object-center" src={logo} alt="" />
        <h3 className=' hidden lg:flex '><span className='text-3xl font-bold text-[#ff6600]'>T</span><span className='text-3xl font-bold text-sky-500'>O</span><span className='text-3xl font-bold text-[#99cc33]'>Y</span><span className='text-3xl font-bold text-pink-500'>S</span> <span className='ml-3 font-bold text-2xl mt-1 text-yellow-300 '>House</span></h3>
        </div>
      </div>
      <div>
      <div className=" hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 font-semibold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-pink-500" : " text-gray-800")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              className={({ isActive }) => (isActive ? "text-pink-500" : " text-gray-800")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytoys"
              className={({ isActive }) => (isActive ? "text-pink-500" : "text-gray-800")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addtoy"
              className={({ isActive }) => (isActive ? "text-pink-500" : "text-gray-800")}
            >
              Add Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-pink-500" : "text-gray-800")}
            >
              Blog
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className=" font-semibold ml-5">
        {
            user?<div className="flex items-center gap-2">
            <div  className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full">
                <img className="w-full object-center" title={profileName} src={userImages} />
              </div>
            </div>
  
            <div>
            <button onClick={handleLogOut} className="px-8 rounded-lg py-2 btn-outline border btn-error">Log Out</button>
            </div>
          </div>:<Link to='/login'><button className="px-8 rounded-lg py-2 btn-outline border btn-info">Log In</button></Link>
        }
      </div>
      </div>
    </div>
  </div>
    );
};

export default Navber;
