import React, { useContext } from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const GoogleAndGithubLogin = () => {
    const {googleSignIn,githubSignIn}=useContext(AuthContext)
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <p className='text-center mt-5 mb-1 font-semibold text-gray-500 text-xl'>or</p>
            <hr className='mb-5' />
            <button onClick={handleGoogleSignIn} className='w-full flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-[#4285F4] hover:bg-[#4285F4]/90'><FaGoogle></FaGoogle><span>Sign in with Google</span></button>
            <button onClick={handleGithubSignIn} className='w-full mt-3 flex items-center justify-center gap-2 rounded-lg py-3 font-bold text-white bg-gray-700 hover:bg-gray-800'><FaGithub></FaGithub>Sign in with Github</button>
        </div>
    );
};

export default GoogleAndGithubLogin;