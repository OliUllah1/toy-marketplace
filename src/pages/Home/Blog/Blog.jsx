import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='py-10'>
            <div className='flex items-center pb-8'>
            <h1 className=' text-4xl font-semibold '> <span className=' font-semibold text-5xl text-pink-500'>B</span>log</h1>
            <p className='font-bold text-4xl text-pink-500'>_______</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>

                <div className='border border-pink-400 rounded-lg p-5'>
                    <h4 className='font-bold text-xl mb-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <p className=' font-semibold text-gray-600'><span className='font-bold text-black'>Answer:</span> An access token is a token through which a user can access certain protected data on the server for a specified period of time. Refresh token means that if the access token is destroyed, then a new access token can be created with the refresh token. <br />After user authentication and login, two tokens are given to him. Which is access token and refresh token. and stores the access token in its local storage. When the user applies to the server to access any data. Then the access token is sent to the server along with the application. The server verifies the access token and if valid. Then the server allows him to access the data. And if it is not valid then it is not allowed.
                    </p>
                </div>
                <div className='border border-pink-400 rounded-lg p-5'>
                    <h4 className='font-bold text-xl mb-2'>Compare SQL and NoSQL databases?</h4>
                    <p className=' font-semibold text-gray-600'><span className='font-bold text-black'>Answer:</span> SQL is Structured Query Language. It collects data between columns and rows in the form of tables. SQL servers are MySQL, Oracle etc. <br />
                    NoSQL is Not Only SQL. It collects data on the server in the form of collections or documents. no SQL servers are Mongodb, Cassandra etc
                    </p>
                </div>
                <div className='border border-pink-400 rounded-lg p-5'>
                    <h4 className='font-bold text-xl mb-2'>What is express js? What is Nest JS?</h4>
                    <p className=' font-semibold text-gray-600'><span className='font-bold text-black'>Answer:</span> Express.js is a popular framework of node.js. It provides easy way to create web application and api. Express.js allows developers to handle routes, middleware, and HTTP requests and responses easily. <br />
                    Nest.js is a popular framework of node.js and it is built with typescript. it is inspired by Angular. It is able to provide high quality routes, middle ware and http requests and response from express.js.
                    </p>
                </div>
                <div className='border border-pink-400 rounded-lg p-5'>
                    <h4 className='font-bold text-xl mb-2'>What is MongoDB aggregate and how does it work ?</h4>
                    <p  className=' font-semibold text-gray-600'><span className='font-bold text-black'>Answer: </span> mongobd aggregate is used to perform mathematical operations on documents in mongodb. For example: aggregate is used to do $sum,$avg,$min,$max, $limit,$sort etc. <br />
                    The aggregate operation works by taking an array of stages as input, where each stage represents a specific operation to be performed on the data. The output of one stage becomes the input for the next stage in the pipeline. The stages are processed sequentially, allowing you to build a multi-stage pipeline to shape and analyze your data.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;