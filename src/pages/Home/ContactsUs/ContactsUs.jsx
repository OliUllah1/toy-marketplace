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
        <div className='py-5 lg:px-10 bg-slate-50 rounded-lg px-2'>
            <div className='text-center mb-10 space-y-3'>
            <h1 className='text-4xl font-bold'> <span className=' lg:text-5xl text-pink-500'>C</span>ontacts <span className='lg:text-5xl text-pink-500'>U</span>s</h1>
            <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden lg:block' /> incididunt ut labore et dolore magna aliqua...</p>
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
                    <input onClick={handleSendMessage} className="main-btn" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default ContactsUs;