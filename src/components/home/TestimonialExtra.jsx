"use client";
import React, { useEffect, useRef } from 'react';

const feedback = [
    {
      name: "Joe Mifsud",
      username: "@Joe_Mifsud",
      profilePic: "https://ui-avatars.com/api/?name=Joe+Mifsud&background=random",
      text: "These look awesome, nice work!",
      verified: true
    },
    {
      name: "Rexan Wong",
      username: "@rexan_wong",
      profilePic: "https://robohash.org/rexanwong.png?set=set2",
      text: "Aceternity UI is a complete collection of stunning effects ready to use for your website.",
      verified: true
    },
    {
      name: "Paarth Agarwal",
      username: "@PaarthAgarwal17",
      profilePic: "https://ui-avatars.com/api/?name=Paarth+Agarwal&background=random",
      text: "I just tried it out this is crazy awesome",
      verified: true
    },
    {
      name: "Micky",
      username: "@rasmickyy",
      profilePic: "https://robohash.org/micky.png?set=set1",
      text: "Yoo.... This has to be the most beautiful component library I've ever seen!!",
      verified: true
    },
    {
      name: "Greg Bergé",
      username: "@gregberge_",
      profilePic: "https://ui-avatars.com/api/?name=Greg+Bergé&background=random",
      text: "Bookmarking it right away",
      verified: true
    },
    {
      name: "Rajdeep Seth",
      username: "@rajdeepseth1",
      profilePic: "https://robohash.org/rajdeepseth.png?set=set3",
      text: "Stumbled upon ui.aceternity.com today and it's amazing!",
      verified: false
    },
    {
      name: "Alice Johnson",
      username: "@alice_j",
      profilePic: "https://ui-avatars.com/api/?name=Alice+Johnson&background=random",
      text: "Loving the new UI components! They make designing so much easier.",
      verified: true
    },
    {
      name: "David Liu",
      username: "@dliu_tech",
      profilePic: "https://robohash.org/davidliu.png?set=set4",
      text: "Just integrated the UI kit, and it's fantastic. Great job!",
      verified: false
    },
    {
      name: "Emma Watson",
      username: "@emmawatson_ux",
      profilePic: "https://ui-avatars.com/api/?name=Emma+Watson&background=random",
      text: "These UI elements are clean, simple, and easy to work with!",
      verified: true
    },
    {
      name: "Tom Hardy",
      username: "@hardy_dev",
      profilePic: "https://robohash.org/tomhardy.png?set=set2",
      text: "Bookmarking this! Can't wait to use it in my next project.",
      verified: true
    },
    {
      name: "Nina Patel",
      username: "@ninapatel",
      profilePic: "https://ui-avatars.com/api/?name=Nina+Patel&background=random",
      text: "The animations in this library are incredibly smooth. Love it!",
      verified: false
    },
    {
      name: "Carlos Diaz",
      username: "@carlos_design",
      profilePic: "https://robohash.org/carlosdiaz.png?set=set1",
      text: "Amazing component collection. This is now my go-to library!",
      verified: true
    },
];

const FeedbackCard = ({ feedback }) => (
    <div className="p-4 lg:p-8 bg-white shadow-lg rounded-xl w-80 mb-7">
      <div className="flex items-center mb-4">
        <img src={feedback.profilePic} alt={feedback.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="font-semibold">
            {feedback.name} {feedback.verified && <span className="text-blue-500">✔</span>}
          </h3>
          <p className="text-gray-500">{feedback.username}</p>
        </div>
      </div>
      <p>{feedback.text}</p>
    </div>
);

const TestimonialExtra = () => {
    const columnRefs = [useRef(), useRef(), useRef()];
  
    useEffect(() => {
      const scrollInterval = setInterval(() => {
        columnRefs.forEach((ref, index) => {
          if (ref.current) {
            const scrollSpeed = index === 1 ? 1 : 2; // Middle column scrolls slower
  
            if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
              ref.current.scrollTop = 0;
            } else {
              ref.current.scrollBy(0, scrollSpeed); // Scroll down by the defined speed
            }
          }
        });
      }, 30); // Adjust the speed of the interval
  
      return () => clearInterval(scrollInterval); // Cleanup on unmount
    }, []);
  
    // Create duplicated content for infinite scroll
    const renderFeedback = () => (
      <>
        {feedback.map((item, index) => (
          <FeedbackCard key={index} feedback={item} />
        ))}
        {feedback.map((item, index) => (
          <FeedbackCard key={`duplicate-${index}`} feedback={item} />
        ))}
      </>
    );
  
    return (
      <div className='bg-gray-100 py-16 px-6 flex flex-col items-center justify-center'>
        <div className='text-center'>
          <h1>Loved by thousands of people</h1>
          <p className='text-base mt-4 mb-8'>Here's what some of our users have to say about Aceternity UI.</p>
        </div>
  
        <div className="flex flex-col justify-center items-center bg-gray-100">
          <style>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
  
            /* Hide scrollbar for IE and Edge */
            .scrollbar-hide {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>
  
          {/* Centering wrapper */}
          <div className="flex flex-row justify-center items-center">
            {/* Wrapper for the first column - shown on all screen sizes */}
            <div className="flex flex-col mx-0 md:mx-2 w-full md:w-auto h-96 items-center overflow-hidden relative">
              <div
                ref={columnRefs[0]}
                className="overflow-y-hidden h-full pr-2 scrollbar-hide"
                style={{ pointerEvents: 'none' }} // Disable mouse events
              >
                {renderFeedback()}
              </div>
            </div>
  
            {/* Wrapper for the second column - shown on tablet and larger screens */}
            <div className="hidden md:flex flex-col mx-0 md:mx-2 h-96 overflow-hidden relative">
              <div
                ref={columnRefs[1]}
                className="overflow-y-hidden h-full pr-2 scrollbar-hide"
                style={{ pointerEvents: 'none' }} // Disable mouse events
              >
                {renderFeedback()}
              </div>
            </div>
  
            {/* Wrapper for the third column - shown on laptop and larger screens */}
            <div className="hidden lg:flex flex-col mx-0 md:mx-2 h-96 overflow-hidden relative">
              <div
                ref={columnRefs[2]}
                className="overflow-y-hidden h-full pr-2 scrollbar-hide"
                style={{ pointerEvents: 'none' }} // Disable mouse events
              >
                {renderFeedback()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialExtra;