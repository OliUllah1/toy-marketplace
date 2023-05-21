import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
const ToyCategory = () => {
    const [toys,setToys]=useState([])
    const [toysData,setToysData]=useState([]);
    const [teddyData,setTeddyData]=useState([])

    useEffect(()=>{
      fetch('https://toy-marketplace-server-flax.vercel.app/toys')
      .then(res=>res.json())
      .then(data=>setToysData(data))
  },[])

    useEffect(()=>{
      const teddyBearData = toysData.filter(toy=>toy.subCategory === 'Teddy Bear')
        if(teddyBearData.length>2){
            const teddy=teddyBearData.slice(0,2)
            setTeddyData(teddy)
            return
        }
        else{
          setTeddyData(teddyBearData)
        }
    },[toysData])
    
    const handleHorse=()=>{
      setToys([])
        const horseData = toysData.filter(toy=>toy.subCategory === 'Horse')
        if(horseData.length>2){
            const horse=horseData.slice(0,2)
            setToys(horse)
            return
        }
        else{
          setToys(horseData)
        }
    }
    const handleDinosaur=()=>{
      setToys([])
        const dinosaurData = toysData.filter(toy=>toy.subCategory === 'Dinosaur')
        if(dinosaurData.length>2){
            const dinosaur=dinosaurData.slice(0,2)
            setToys(dinosaur)
            return
        }
        else{
          setToys(dinosaurData)
        }
    }
    return (
        <div className=" bg-slate-200 px-4 py-10 lg:rounded-xl">
          <div className='flex items-center pb-8'>
            <h1 className='text-4xl font-semibold '> <span className=' lg:text-5xl text-pink-500'>T</span>oys <span className='lg:text-5xl text-pink-500'>C</span>ategory </h1>
            <p className='font-bold lg:text-4xl text-pink-500'>________</p>
            </div>

          <Tabs>
            <TabList className="flex mb-4">
              <Tab  className="mr-4 px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold cursor-pointer">
              Teddy Bear
              </Tab>
              <Tab onClick={handleHorse} className="mr-4 px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold cursor-pointer">
              Horse
              </Tab>
              <Tab onClick={handleDinosaur} className="mr-4 px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold cursor-pointer">
              Dinosaur
              </Tab>
            </TabList>
    
            <TabPanel>
              <h2 className="text-lg font-semibold mb-2">Teddy Bear</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                   teddyData.map(toy=><CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                }
              </div>
            </TabPanel>
            <TabPanel>
            <h2 className="text-lg font-semibold mb-2">Horse Toys</h2>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    toys.map(toy=><CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                }
              </div>
            </TabPanel>
            <TabPanel>
            <h2 className="text-lg font-semibold mb-2">Dinosaur Toys</h2>
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    toys.map(toy=><CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
      );
    };

export default ToyCategory;