import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/navber-logo.webp'
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
        <div className="flex lg:px-10 px-2 justify-between items-center bg-white">
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
        <div className=''>
        <img className="w-full h-full object-center" src={logo} alt="" />
        
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
            <button onClick={handleLogOut} className="px-8 text-white hover:bg-[#73a19a] rounded-full py-2 bg-[#f379a7]">Log Out</button>
            </div>
          </div>:<Link to='/login'><button className="px-8 text-white rounded-full py-2 bg-[#f379a7] hover:bg-[#73a19a]">Log In</button></Link>
        }
      </div>
      </div>
    </div>
  </div>
    );
};

export default Navber;
