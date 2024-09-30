// "use client";

// import { useState, useEffect } from "react";
// import Marquee from "react-fast-marquee";

// const persons = {
//   users: [
//     {
//       name: "John Doe",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 5,
//       emoji: "😁",
//     },
//     {
//       name: "Emily Johnson",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 4,
//       emoji: "🥰",
//     },
//     {
//       name: "Michael Lee",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 3,
//       emoji: "🤩",
//     },
//     {
//       name: "Sophia Martinez",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 5,
//       emoji: "😘",
//     },
//     {
//       name: "David Brown",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 4,
//       emoji: "😊",
//     },
//     {
//       name: "David Brown",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback:
//         "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
//       starRating: 4,
//       emoji: "🥳",
//     },
//   ],
// };

// function Testimonials() {
//   return (
//     <>
//       <div className="mb-10 md:mx-0 mx-5">
//         <div className="text-center mb-10">
//           <h1 className=" lg:text-5xl text-2xl">Testimonials</h1>
//         </div>
//         <div className="flex flex-col gap-4 m- sm:hidden">
//           {persons.users.slice(0, 4).map((user, index) => (
//             <Card key={index} data={user} />
//           ))}
//         </div>

//         <div className="hidden md:flex flex-col gap-[12px] ">
//           <Marquee loop={0} direction="right">
//             <div className={`grid grid-cols-6 gap-4 ml-4 `}>
//               {persons.users.map((user, index) => (
//                 <Card key={index} data={user} />
//               ))}
//             </div>
//           </Marquee>
//           <Marquee loop={0} direction="left">
//             <div className={`grid grid-cols-6 gap-4 ml-4 `}>
//               {persons.users.map((user, index) => (
//                 <Card key={index} data={user} />
//               ))}
//             </div>
//           </Marquee>
//         </div>
//       </div>
//     </>
//   );
// }

// function Card({ data }) {
//   // const [count, SetCount] = useState(data.starRating);
//   const count = data.starRating;
//   return (

//     <div className=" rounded-lg shadow-sm aspect-[3/2]  h-[260px] border border-gray-600">
//       <div class="flex flex-col  gap-4  rounded-lg p-4 border border-transparent h-full bg-clip-border">

// <div className="flex flex-row items-end">
//     {Array.from({ length: count }, (_, i) => (
//       <div key={i} className=" ">
//         <img className="h-[30px] w-[30px] " src="/Logo/star.png"></img>

//       </div>
//     ))}
//   </div>

//         <div className="font-light text-[18px] self-start">
//           {data.shortFeedback}
//         </div>

//         <div className=" w-full">
//           <div className="flex  items-center justify-between">
//             <div className="w-[50px] h-[50px] rounded-[100%] bg-black flex justify-between">
//               <img
//                 src={data.profile}
//                 className="rounded-[100%] object-cover w-full h-full "
//               ></img>
//             </div>
//             <h2 className="text-xl font-bold ">{data.name}</h2>
//           </div>
//         </div>

//         {/* <div className="flex items-center">
//           <img className="h-[30px] w-[30px]" src="/Logo/starz.png" alt="star" />
//           <span className="ml-2 text-lg font-semibold">{count}</span>
//         </div> */}

//         {/* <div className="font-light text-[18px] self-start">
//           {data.shortFeedback}
//         </div> */}

//         {/* <div className="flex flex-row items-end">
//           {Array.from({ length: count }, (_, i) => (
//             <div key={i} className=" ">
//               <img className="h-[30px] w-[30px] " src="/Logo/star.png"></img>

//             </div>
//           ))}
//         </div> */}
//       </div>

//     </div>

//   );
// }

// export default Testimonials;



"use client";
import React, { useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      title: "What Our Happy Users Says",
      stars: 5,
      quote:
        "If there was a choice on spending a lot of money on accessories or dresses, I always chose accessories. I think jewelry can change an outfit more than anything else.",
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "What Our Happy Users Says",
      stars: 3,
      quote:
        "If there was a choice on spending a lot of money on accessories or dresses, I always chose accessories. I think jewelry can change an outfit more than anything else.",
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "What Our Happy Users Says",
      stars: 4,
      quote:
        "If there was a choice on spending a lot of money on accessories or dresses, I always chose accessories. I think jewelry can change an outfit more than anything else.",
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dy",
    },
    {
      id: 4,
      title: "What Our Happy Users Says",
      stars: 4,
      quote:
        "If there was a choice on spending a lot of money on accessories or dresses, I always chose accessories. I think jewelry can change an outfit more than anything else.",
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "What Our Happy Users Says",
      stars: 4,
      quote:
        "If there was a choice on spending a lot of money on accessories or dresses, I always chose accessories. I think jewelry can change an outfit more than anything else.",
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  // Calculate indexes for previous and next testimonials
  const previousIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const { title, stars, quote } = testimonials[currentIndex];

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-16 px-6 bg-gray-50">
      <div className="flex flex-col items-center justify-center shadow-xl py-16 px-40 rounded-2xl bg-gray-100">
        {/* Heading */}
        <h3 className="text-lg lg:text-2xl font-semibold text-orange-500 tracking-wider uppercase mb-4 underline">
          {title}
        </h3>

        {/* Quote */}
        <div className="flex justify-between items-center w-full mt-6">
          <p className="text-center text-lg md:text-xl font-light text-gray-800 leading-relaxed max-w-2xl mb-8">
            {quote}
          </p>
        </div>

        {/* Star Ratings */}
        <div className="flex justify-center mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              className="h-8 w-8 mx-1"
              src={index < stars ? "/Logo/star.png" : "/Logo/gstar1.png"}
              alt="star"
            />
          ))}
        </div>

        {/* Pagination with Images */}
        <div className="flex space-x-6 mt-4 items-center justify-center">
          {/* Previous Image */}
          <img
            src={testimonials[previousIndex].img}
            onClick={() => handlePagination(previousIndex)}
            className="h-10 w-10 rounded-full object-cover cursor-pointer opacity-70"
            alt={`testimonial-${previousIndex}`}
          />

          {/* Current Active Image */}
          <img
            src={testimonials[currentIndex].img}
            onClick={() => handlePagination(currentIndex)}
            className="h-16 w-16 ring ring-red-700 p-1 rounded-full object-cover cursor-pointer transform scale-110"
            alt={`testimonial-${currentIndex}`}
          />

          {/* Next Image */}
          <img
            src={testimonials[nextIndex].img}
            onClick={() => handlePagination(nextIndex)}
            className="h-10 w-10 rounded-full object-cover cursor-pointer opacity-70"
            alt={`testimonial-${nextIndex}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
