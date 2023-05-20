import React from 'react';
import { FaPen,FaTrashAlt } from "react-icons/fa";

const MyToyCard = ({toy,index}) => {
    const{_id,availableQuantity,rating,sellerName,sellerEmail,subCategory,toyImage,toyPrice,toyName}=toy
    return (
        <tr>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-28 h-28">
                <img src={toyImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyName}</div>
              <div className="text-sm opacity-75">{subCategory}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br/>
          <span className="">{sellerEmail}</span>
        </td>
        <td>{toyPrice}$</td>
        <td>{availableQuantity}</td>
        <td>{rating}</td>
        <th className=' space-x-3'>
          <button className="btn btn-circle btn-outline btn-info"><FaPen className='w-5 h-5'></FaPen></button>
          <button className="btn btn-circle btn-outline text-red-500 hover:text-white"><FaTrashAlt className='w-5 h-5'></FaTrashAlt></button>
        </th>
      </tr>
    );
};

export default MyToyCard;