// import React from 'react'

// const NewTestimonial = () => {
//     return (
//         <div>
//             NewTestimonial
//             NewTestimonial
//         </div>
//     )
// }

// export default NewTestimonial

"use client";
 
import { useState } from "react";
import Marquee from "react-fast-marquee";
 
const persons = {
  users: [
    {
      name: "Mala Mala",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "I had an good experience in selling my old gold for cash from Max Gold. All staffs are Professional, friendly and knowledgeable, and made entire process very transparent. I was offered the best price for my gold items, and the payment was prompt and immediate. Highly recommended for anyone looking to sell their gold at best market price with confidence",
      starRating: 4,
      emoji: "😁",
      numberRating: 4,
    },
    {
      name: "Aravinth.s Thala",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "My experience at Max Gold Cash for Gold Shop was outstanding The procedure was made easy and straightforward by the staff friendliness and expertise.For my gold things, I received the best offer, and the payment arrived on time. Strongly advised for anyone wishing to confidently sell their gold.",
      starRating: 5,
      emoji: "🥰",
      numberRating: 5,
    },
    {
      name: "Harini R",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Good to visit Max Gold. Hospitality is excellent and got a good price for the gold sold. The are professionals who make customer understand every process. The manager is very humble doesn't want to lose the customer and he was particular about the customer satisfaction also. If you are looking for Old gold buyers in Chennai I recommend Max Gold.",
      starRating: 5,
      emoji: "🤩",
      numberRating: 5,
    },
    {
      name: "Monika Monika",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "The staffs are really good. The way of talking, explaining things that really comforts a lot. Can assure that you will get more than what other shops will pay for your gold. Max Gold is highly recommended for those who are looking for instant cash for gold jwellery.",
      starRating: 4.5,
      emoji: "😘",
      numberRating: 4.5,
    },
    {
      name: "Jeyapriya 1999",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "At the Max Gold- Cash for Gold , we had a wonderful experience. The entire process was simple and straight forward thanks to the competent and kind staffs Best place to sell your gold, quick transactions no long wait time, as per market price they are taking, especially the owner such a humble person .",
      starRating: 5,
      emoji: "😊",
      numberRating: 5,
    },
  ],
};
const personsSecondMarquee = {
  users: [
    {
      name: "Jayasri",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Best place to get the best price on your old gold. Very genuine and very customer friendly. They are very genuine and the process is so smooth and hassle free. most recommended if you are looking cash for Gold in Chennai.",
      starRating: 5,
      emoji: "😊",
      numberRating: 5,
    },
    {
      name: "Sadha William",
      profile:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "I was looking to sell my old gold for cash. I am really impressed with their service at Max Gold in t-nagar.The hospitality of staffs and process is very simple .They offer the best price in this chennai for cash for gold market .I recommend Max GOLD for everyone who want to sell their jewellery at the best price.",
      starRating: 5,
      emoji: "😁",
      numberRating: 5,
    },
    {
      name: "Devadharshini B",
      profile:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "I visited max gold to sell my gold chain and ring..They are very professional and offer quick service.The entire process consumed just 15 - 20 mins.Its a best place to sell your gold at a very current online price. I will definitly recommend to my friends and relatives.",
      starRating: 4,
      emoji: "🤩",
      numberRating: 4,
    },
    {
      name: "Leela Swedha",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "For the first time, my sister and I went to Max Gold to sell our gold jewellery to pay for personal expenses.Better hospitality and transparent information on gold rates were given by Ganesh sir. We have now sold our gold for a good sum, and we heartily recommend it to everyone.",
      starRating: 5,
      emoji: "😄",
      numberRating: 5,
    },
    {
      name: "Anitha Sathiyakala",
      profile:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "without a doubt Chennai's top Old Gold Buyer. They are unparalleled in their ability to appraise antique gold.They gave me a great price for my jewellery, and their expertise made the whole process go smoothly.",
      starRating: 5,
      emoji: "😍",
      numberRating: 5,
    },
    {
      name: "Gokula Priya",
      profile:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "I visited recently Max Gold T-nager branch to exchange gold for cash. They are really very professional, straight forward and transparent with the price and evaluation of gold jewellery.Transfered money to my Bank account instantly. Good experience and recommended. Thanks",
      starRating: 5,
      emoji: "😊",
      numberRating: 5,
    },
  ],
};
 
function NewTestimonial({ speed1 = 50, speed2 = 35 }) {
  return (
    <div className="mb-10 md:mx-0 mx-5 my-10">
      <div className="text-center mb-10 space-y-4">
        <h1 className="lg:text-5xl text-2xl">Testimonials</h1>
        <h3 className="lg:text-xl font-bold text-xl">Join the Trust of Over 100,000+ Happy Customers!</h3>
        <h2 className="lg:text-3xl text-1xl">Google reviews</h2>
      </div>
 
      {/* For small screens */}
      <div className="flex flex-col gap-4 sm:hidden">
        {persons.users.slice(0, 4).map((user, index) => (
          <Card key={index} data={user} />
        ))}
      </div>
 
      {/* For medium and larger screens */}
      <div className="hidden md:flex flex-col gap-[12px]">
        {/* First Marquee */}
        <Marquee loop={0} direction="right" speed={speed1} className="py-4">
          <div className="flex gap-4 ml-4">
            {persons.users.map((user, index) => (
              <Card key={index} data={user} />
            ))}
          </div>
        </Marquee>
 
        {/* Second Marquee with different content */}
<Marquee loop={0} direction="right" speed={speed2} className="py-4">
  <div className="flex gap-4 ml-4">
    {personsSecondMarquee.users.map((user, index) => (
      <Card key={index} data={user} />
    ))}
  </div>
</Marquee>
 
      </div>
    </div>
  );
}
 
function Card({ data }) {
  const [count, setCount] = useState(data.starRating);

  // Define a maximum length for the feedback
  const maxLength = 150; // Adjust this value based on your design

  // Check if the feedback is long
  const isLongFeedback = data.shortFeedback.length > maxLength;

  // Display feedback with dots if it's long
  const displayedFeedback = isLongFeedback
    ? `${data.shortFeedback.substring(0, maxLength)}...`
    : data.shortFeedback;

  // Total number of stars
  const totalStars = 5;

  return (
    <div className="rounded-lg shadow-sm aspect-[3/2] h-[260px]">
      <div className="flex flex-col gap-4 rounded-lg p-4 border h-full bg-clip-border shadow-lg">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-between">
              <img
                src={data.profile}
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-bold text-red-600">{data.name}</h2>
          </div>
        </div>
        <div className="font-light text-[18px]">{displayedFeedback}</div>
        <div className="flex flex-row items-end gap-2">
          <div className="flex items-end gap-2">
            {Array.from({ length: totalStars }, (_, i) => (
              <img
                key={i}
                className="h-[25px] w-[25px]"
                src={i < count ? "/Logo/redstar.svg" : "/Logo/emred.png"} // Adjust to your empty star image
                alt={i < count ? "Filled Star" : "Empty Star"}
              />
            ))}
            {/* <span className="font-bold text-lg leading-4">| {data.numberRating}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}


 
export default NewTestimonial;