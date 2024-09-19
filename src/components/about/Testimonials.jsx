'use client'

import { useState ,useEffect} from 'react';
import Marquee from "react-fast-marquee";

const persons = {
  "users": [
    {
      "name": "John Doe",
      "profile": "https://example.com/images/john_doe.jpg",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 5,
      "emoji":"😁"
    },
    {
      "name": "Emily Johnson",
      "profile": "https://example.com/images/emily_johnson.jpg",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 4,
      "emoji":"🥰"
    },
    {
      "name": "Michael Lee",
      "profile": "https://example.com/images/michael_lee.jpg",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 3,
      "emoji":"🤩"
    },
    {
      "name": "Sophia Martinez",
      "profile": "https://example.com/images/sophia_martinez.jpg",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 5,
      "emoji":"😘"
    },
    {
      "name": "David Brown",
      "profile": "https://example.com/images/david_brown.jpg",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 4,
      "emoji":"😊"
    },
    {
      "name": "David Brown",
      "profile": "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "shortFeedback": "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      "starRating": 4,
      "emoji":"🥳"
    }
  ]
};

function Testimonials() {
  

  return (
  <>
  <div className='flex flex-col gap-4 m-2 sm:hidden'>
  {persons.users.slice(0,4).map((user, index) => (
       
        
       <Card key={index} data={user}   />
       
     ))}
  </div>
  <div className='hidden md:flex flex-col gap-[12px] '>


<Marquee loop={0} direction='right'>
    <div className={`grid grid-cols-6 gap-4 ml-4 `}>
      {persons.users.map((user, index) => (
       
        
        <Card key={index} data={user} />
        
      ))}
    
    </div>
    </Marquee>
    <Marquee loop={0} direction='left'>
    <div className={`grid grid-cols-6 gap-4 ml-4 `}>
      {persons.users.map((user, index) => (
       
        
        <Card key={index} data={user} />
        
      ))}
    </div>
    
    </Marquee>
   
    </div>
    </>
  );
}

function Card({ data }) {
  const[count,SetCount]=useState(data.starRating);
  return (
    
    <div className='flex flex-col items-center gap-4 p-1 rounded-lg shadow-sm aspect-[3/2]  h-[260px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400'>
      <div class="bg-white rounded-lg p-4 border border-transparent h-full bg-clip-border">
      <div className='flex items-center justify-between w-full'>
      <div className='flex items-center gap-2'>
      <div className='w-[50px] h-[50px] rounded-[100%] bg-black'>
        <img src={data.profile}  className='rounded-[100%] object-cover w-full h-full'></img>
      </div>
      <h2 className='text-xl font-bold'>{data.name}</h2>
      </div>
      <div className='flex'>
      
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>⭐
        </div>
      ))}
    </div>
    </div>
    <div className='font-light text-[18px] self-start'>{data.shortFeedback}</div>
    
    </div>
    </div>
  );
}

export default Testimonials;