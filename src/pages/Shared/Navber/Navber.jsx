import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/toy-logo.png'



const Navber = () => {
    return (
        <div className="flex justify-between items-center bg-white">
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
                  isActive ? "text-blue-400 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            
            
           
           
          </ul>
        </div>
        <div className='w-28 h-20 flex items-center relative'>
        <img className="w-full h-full" src={logo} alt="" />
        <h3 className='flex absolute left-20'><span className='text-3xl font-bold text-[#ff6600]'>T</span><span className='text-3xl font-bold text-sky-500'>O</span><span className='text-3xl font-bold text-[#99cc33]'>Y</span><span className='text-3xl font-bold text-[#ff599b]'>S</span> <span className='ml-3 font-bold text-2xl mt-1 text-yellow-300 '>House</span></h3>
        </div>
      </div>
      <div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-blue-500" : " text-gray-800")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menulist"
              className={({ isActive }) => (isActive ? "text-blue-400" : "text-gray-800")}
            >
              Menu List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="recipe"
              className={({ isActive }) => (isActive ? "text-blue-400" : "text-gray-800")}
            >
              Popular Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className={({ isActive }) => (isActive ? "text-blue-400" : "text-gray-800")}
            >
              Register
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className=" font-semibold">
      <Link to='login'><button className="px-5 py-1 rounded text-gray-600 border border-blue-700 hover:bg-blue-400">Log In</button></Link>
        {/* {
          user?  <div className="flex items-center gap-2">
          <div  className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                className="w-full" title={name}
                src={profileImg}
              />
            </div>
          </div>

          <div>
          <button onClick={handleLogOut} className="px-5 py-1 rounded text-white border border-blue-700 hover:bg-blue-400">log out</button>
          </div>
        </div>
          :<Link to='login'><button className="px-5 py-1 rounded text-white border border-blue-700 hover:bg-blue-400">Log In</button></Link>
         } */}
      </div>
      </div>
    </div>
  </div>




    );
};

export default Navber;