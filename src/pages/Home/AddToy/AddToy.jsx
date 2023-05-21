import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';

const AddToy = () => {
    const {user,defaultUser,setDefaultUser}= useContext(AuthContext);
    const email =user?.email || defaultUser
    useTitle('Add Toy')
    const handleAddToy =(event)=>{
        event.preventDefault()
        const form =event.target;
        const toyImage = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail= form.sellerEmail.value;
        const subCategory= form.subCategory.value;
        const toyPrice = parseFloat(form.price.value);
        const rating = form.rating.value;
        const availableQuantity =form.quantity.value;
        const detailDescription = form.description.value;
        setDefaultUser(sellerEmail)
        const toyInfo ={toyImage,toyName,sellerName,sellerEmail,subCategory,toyPrice,rating,availableQuantity,detailDescription}
        fetch('https://toy-marketplace-server-flax.vercel.app/toys',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(toyInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Toy Add Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset()
            }
        })
    }
    
    return (
        <div>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>A</span>dd <span className='text-5xl text-pink-500'>T</span>oy</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>

            <form onSubmit={handleAddToy}>
            <div className='grid grid-cols-2 gap-5 pb-5'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Photo</span>
                </label>
                <input type="url" name='toyPhoto' placeholder="Toy photo" className="input input-bordered input-secondary w-full" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered input-secondary w-full" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <input type="text" defaultValue={user?.displayName} name='sellerName' placeholder="seller name" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <input type="email" defaultValue={email} name='sellerEmail' placeholder="seller email" className="input input-bordered input-secondary w-full" required/>
            </div>

            {/* <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <input type="text" name='subCategory' placeholder="Sub category" className="input input-bordered input-secondary w-full" required/>
                
            </div> */}

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
            <div  className="">
                <select name='subCategory' className="input input-bordered input-secondary w-full">
                    <option disabled selected>Pick category</option>
                    <option>Teddy Bear</option>
                    <option>Horse</option>
                    <option>Dinosaur</option>
                    <option>Dogs</option>
                    <option>Cat</option>
                    <option>Cows</option>
                </select>
    
                </div>
            </div>












            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="price" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="Rating" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available quantity</span>
                </label>
                <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered input-secondary w-full" required/>
            </div>
            </div>


            <textarea name='description' className="textarea textarea-secondary w-full h-48" placeholder="Detail description" required></textarea>
            <div className="form-control mt-6">
                <button className="btn btn-secondary">Add Toy</button>
            </div>
            </form>
        </div>
    );
};

export default AddToy;