import React, { useContext, useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import { FaFilter,FaSearch } from "react-icons/fa";

const ToyShop = () => {
    const [toysData,setToysData]=useState([]);
    const [activeSorting, setActiveSorting] = useState(true);
    const [searchValue,setSearchValue] = useState(null)
    const {loading}=useContext(AuthContext)
    useTitle('All Toys')
    console.log(toysData)
    const handleAscending=(ascending)=>{
      setActiveSorting(true)
    }
    const handleDescending=(descending)=>{
      setActiveSorting(false)
    }
    const handleSearchValue =(event)=>{
       setSearchValue(event.target.value)
    }
    console.log(searchValue)

    const handleSearchButton=()=>{
      fetch(`http://localhost:5000/getToysByName/${searchValue}`)
      .then(res=>res.json())
      .then(data=>setToysData(data))
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/toys?sorting=${activeSorting}`)
        .then(res=>res.json())
        .then(data=>setToysData(data))
    },[activeSorting])
    return (
        <div className='py-10 bg-slate-50 rounded-lg lg:px-5'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>T</span>oys <span className='text-5xl text-pink-500'>H</span>ouse <span  className='text-5xl text-pink-500'>S</span>hop </h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>

            <div className='flex justify-between mb-5 items-center'>


            <div className="form-control w-full">
              <div className="input-group w-1/2">
                <input onChange={handleSearchValue} type="text" placeholder="Search…" className="input input-bordered w-full" />
                <button onClick={handleSearchButton} className="btn  px-10">
                <FaSearch className='w-6 h-6'></FaSearch>
                </button>
              </div>
            </div>








            <div className="dropdown dropdown-left">
              <label tabIndex={0} className="px-10 font-semibold py-3 bg-slate-300 rounded-md flex items-center gap-2">Filter <FaFilter></FaFilter></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li onClick={()=>handleAscending()}><a>Ascending</a></li>
                  <li onClick={()=>handleDescending()}><a>Descending</a></li>
                </ul>
              </div>
            </div>
            



<table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      
         {toysData?.map((toy,index)=><ToyCard key={toy._id} index={index} toy={toy}></ToyCard>)}
    
     
    </tbody>
  </table>






        </div>
    );
};

export default ToyShop;