"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const persons = {
  users: [
    {
      name: "John Doe",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 5,
      emoji: "😁",
    },
    {
      name: "Emily Johnson",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "🥰",
    },
    {
      name: "Michael Lee",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 3,
      emoji: "🤩",
    },
    {
      name: "Sophia Martinez",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 5,
      emoji: "😘",
    },
    {
      name: "David Brown",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "😊",
    },
    {
      name: "David Brown",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "🥳",
    },
  ],
};

function Testimonials() {
  return (
    <>
      <div className="mb-10 md:mx-0 mx-5">
        <div className="text-center mb-10">
          <h1 className=" lg:text-5xl text-2xl">Testimonials</h1>
        </div>
        <div className="flex flex-col gap-4 m- sm:hidden">
          {persons.users.slice(0, 4).map((user, index) => (
            <Card key={index} data={user} />
          ))}
        </div>

        <div className="hidden md:flex flex-col gap-[12px] ">
          <Marquee loop={0} direction="right">
            <div className={`grid grid-cols-6 gap-4 ml-4 `}>
              {persons.users.map((user, index) => (
                <Card key={index} data={user} />
              ))}
            </div>
          </Marquee>
          <Marquee loop={0} direction="left">
            <div className={`grid grid-cols-6 gap-4 ml-4 `}>
              {persons.users.map((user, index) => (
                <Card key={index} data={user} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  // const [count, SetCount] = useState(data.starRating);
  const count = data.starRating;
  return (

    <div className=" rounded-lg shadow-sm aspect-[3/2]  h-[260px] border border-gray-600">
      <div class="flex flex-col  gap-4  rounded-lg p-4 border border-transparent h-full bg-clip-border">

      <div className="flex items-center">
          <img className="h-[30px] w-[30px]" src="/Logo/star.png" alt="star" />
          <span className="ml-2 text-lg font-semibold">{count}</span>
        </div>

        <div className="font-light text-[18px] self-start">
          {data.shortFeedback}
        </div>

        <div className=" w-full">
          <div className="flex  items-center justify-between">
            <div className="w-[50px] h-[50px] rounded-[100%] bg-black flex justify-between">
              <img
                src={data.profile}
                className="rounded-[100%] object-cover w-full h-full "
              ></img>
            </div>
            <h2 className="text-xl font-bold ">{data.name}</h2>
          </div>
        </div>

        {/* <div className="flex items-center">
          <img className="h-[30px] w-[30px]" src="/Logo/starz.png" alt="star" />
          <span className="ml-2 text-lg font-semibold">{count}</span>
        </div> */}

        {/* <div className="font-light text-[18px] self-start">
          {data.shortFeedback}
        </div> */}

        {/* <div className="flex flex-row items-end">
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className=" ">
              <img className="h-[30px] w-[30px] " src="/Logo/starz.png"></img>

            </div>
          ))}
        </div> */}
      </div>

    </div>

  );
}

export default Testimonials;


// "use client";

// import { useState } from "react";
// import Marquee from "react-fast-marquee";

// const persons = {
//   users: [
//     {
//       name: "John Doe",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback: "Excellent service! Very pleased with the outcome!",
//       starRating: 5,
//       emoji: "😁",
//     },
//     {
//       name: "Emily Johnson",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback: "Great experience overall!",
//       starRating: 4,
//       emoji: "🥰",
//     },
//     {
//       name: "Michael Lee",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback: "Good, but room for improvement.",
//       starRating: 3,
//       emoji: "🤩",
//     },
//     {
//       name: "Sophia Martinez",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback: "Amazing work, would recommend!",
//       starRating: 5,
//       emoji: "😘",
//     },
//     {
//       name: "David Brown",
//       profile:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       shortFeedback: "Very pleased with the outcome!",
//       starRating: 4,
//       emoji: "😊",
//     },
//   ],
// };

// function Testimonials() {
//   return (
//     <div className="mb-10 md:mx-0 mx-5">
//       <div className="text-center mb-10">
//         <h1 className="lg:text-5xl text-2xl">Testimonials</h1>
//       </div>
//       <div className="flex flex-col gap-4 m- sm:hidden">
//         {persons.users.slice(0, 4).map((user, index) => (
//           <Card key={index} data={user} />
//         ))}
//       </div>

//       <div className="hidden md:flex flex-col gap-[12px]">
//         <Marquee loop={0} direction="right">
//           <div className={`grid grid-cols-6 gap-4 ml-4`}>
//             {persons.users.map((user, index) => (
//               <Card key={index} data={user} />
//             ))}
//           </div>
//         </Marquee>
//         <Marquee loop={0} direction="left">
//           <div className={`grid grid-cols-6 gap-4 ml-4`}>
//             {persons.users.map((user, index) => (
//               <Card key={index} data={user} />
//             ))}
//           </div>
//         </Marquee>
//       </div>
//     </div>
//   );
// }

// function Card({ data }) {
//   const count = data.starRating; // Using starRating directly

//   return (
//     <div className="rounded-lg shadow-sm aspect-[3/2] h-[260px] border border-gray-600">
//       <div className="flex flex-col gap-4 rounded-lg p-4 border border-transparent h-full bg-clip-border">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img
//               src={data.profile}
//               className="rounded-full w-[50px] h-[50px] object-cover"
//               alt={data.name}
//             />
//             <h2 className="text-xl font-bold ml-4">{data.name}</h2>
//           </div>
//         </div>

//         <div className="flex items-center">
//           <img className="h-[30px] w-[30px]" src="/Logo/starz.png" alt="star" />
//           <span className="ml-2 text-lg font-semibold">{count}</span>
//         </div>

//         <div className="font-light text-[18px] self-start">
//           {data.shortFeedback}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;
