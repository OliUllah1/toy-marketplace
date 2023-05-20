import React from 'react';

const AddToy = () => {

    const handleAddToy =(event)=>{
        event.preventDefault()
        const form =event.target;
        const photo = form.toyPhoto.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail= form.sellerEmail.value;
        const subCategory= form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity =form.quantity.value;
        const description = form.description.value;
        const toyInfo ={photo,toyName,sellerName,sellerEmail,subCategory,price,rating,quantity,description}
        console.log(toyInfo)
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
                <input type="text" name='sellerName' placeholder="seller name" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <input type="email" name='sellerEmail' placeholder="seller email" className="input input-bordered input-secondary w-full" required/>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <input type="text" name='subCategory' placeholder="Sub category" className="input input-bordered input-secondary w-full" required/>
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