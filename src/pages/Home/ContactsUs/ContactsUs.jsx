import React from 'react';
import contactsImg from '../../../assets/images/contacts.jpg'
import Swal from 'sweetalert2';
const ContactsUs = () => {
    const handleSendMessage =()=>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Message Send Successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className='py-5 bg-slate-50 rounded-lg px-2'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>C</span>ontacts <span className='text-5xl text-pink-500'>U</span>s</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>


            <div className='lg:flex gap-5'>
                <div className='lg:w-[40%]'>
                    <img className='w-full rounded-lg' src={contactsImg} alt="" />
                </div>
                <div className=' lg:w-[60%] lg:p-5'>
                    <h1 className='text-3xl font-bold text-gray-600'>Contact Form</h1>
                    <form className='mt-5'>
                    <div className='lg:flex gap-3 mb-4'>
                    <input type="text"  placeholder="First Name" className="input border mb-3 lg:mb-0 border-gray-300 py-5 w-full h-full" />
                    <input type="email" placeholder="Enter Your Email" className="input border border-gray-300 py-5 w-full h-full" />
                    </div>
                    <div className='lg:flex gap-3 mb-4'>
                    <input type="text" placeholder="Your Phone Number" className="input border mb-3 lg:mb-0 border-gray-300 py-5 w-full h-full" />
                    <input type="text" placeholder="Subjects" className="input border border-gray-300 py-5 w-full h-full" />
                    </div>
                    <textarea className="textarea mb-1 border border-gray-300 h-36 w-full" placeholder="Message"></textarea>
                    <input onClick={handleSendMessage} className="px-10 py-3 border rounded-md font-bold border-purple-400 hover:bg-pink-600 hover:border-0 hover:text-white" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default ContactsUs;