import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedToyInfo = () => {
    const toyData = useLoaderData()
    const  {_id,toyImage,toyName,sellerName,sellerEmail,subCategory,toyPrice,rating,availableQuantity,detailDescription} = toyData;
    const navigate = useNavigate();

    const handleUpdate =(event)=>{
        event.preventDefault()
        const form =event.target;
        const toyImage = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail= form.sellerEmail.value;
        const subCategory= form.subCategory.value;
        const toyPrice = form.price.value;
        const rating = form.rating.value;
        const availableQuantity =form.quantity.value;
        const detailDescription = form.description.value;
        const toyInfo ={toyImage,toyName,sellerName,sellerEmail,subCategory,toyPrice,rating,availableQuantity,detailDescription}
        console.log(toyInfo)
        fetch(`http://localhost:5000/mytoys/${_id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(toyInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount==1){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Toy Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
                  navigate('/mytoys')
            }
        })
    }

    return (
        <div>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>U</span>pdate <span className='text-5xl text-pink-500'>T</span>oy</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>

            <form onSubmit={handleUpdate}>
            <div className='grid grid-cols-2 gap-5 pb-5'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Photo</span>
                </label>
                <input type="url" defaultValue={toyImage} name='toyPhoto' placeholder="Toy photo" className="input input-bordered input-secondary w-full" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <input type="text" defaultValue={toyName} name='toyName' placeholder="Toy Name" className="input input-bordered input-secondary w-full" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={sellerName} name='sellerName' placeholder="seller name" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <input type="email" defaultValue={sellerEmail} name='sellerEmail' placeholder="seller email" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <input type="text" defaultValue={subCategory} name='subCategory' placeholder="Sub category" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" defaultValue={toyPrice} name='price' placeholder="price" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input type="text" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available quantity</span>
                </label>
                <input type="text" defaultValue={availableQuantity} name='quantity' placeholder="Available quantity" className="input input-bordered input-secondary w-full" required/>
            </div>
            </div>


            <textarea name='description' defaultValue={detailDescription} className="textarea textarea-secondary w-full h-48" placeholder="Detail description" required></textarea>
            <div className="form-control mt-6">
                <button className="btn btn-secondary">Update Toy</button>
            </div>
            </form>
        </div>
    );
};

export default UpdatedToyInfo;