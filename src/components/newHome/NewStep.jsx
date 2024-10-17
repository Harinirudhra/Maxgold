"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faCalculator, faCheck, faStore, faHome, faSmile } from '@fortawesome/free-solid-svg-icons';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const NewStep = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className='px-10'>
     
      <motion.h1
        variants={fadeInUp}
        className='py-10 text-3xl font-bold text-center text-[#efbf04]'
      >
        Steps to sell your old gold
      </motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left Image Section */}
        <motion.div
          variants={fadeInUp}
          className='flex justify-center items-center h-full'
        >
          <motion.img
            src="/service2.jpg"
            alt="img"
            className='object-cover w-full h-full max-h-96'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className='relative space-y-10'
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {[
            { number: "1", title: "Contact Us", text: "To sell your gold, reach out to us at 97501 97501 or via WhatsApp to arrange doorstep service.", icon: faPhoneAlt },
            { number: "2", title: "Get Quote", text: "Our expert team provides a comprehensive estimate based on current market rates for your gold, silver, and diamond jewelry.", icon: faCalculator },
            { number: "3", title: "Transparent Service", text: "Our estimation value remains the highest in Chennai. We offer transparent service throughout the selling process.", icon: faCheck },
            { number: "4", title: "Visit Our Branch", text: "Visit any of our branches to sell your gold for the same estimated value offered by our team.", icon: faStore },
            { number: "5", title: "Doorstep Service", text: "Our friendly staff will visit your home, verify the gold, and make payments accordingly.", icon: faHome },
            { number: "6", title: "100% Customer Satisfaction", text: "Your satisfaction is our paramount concern. We strive to offer the highest price while ensuring a secure process.", icon: faSmile },
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex items-center space-x-4">
              <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-[#550000] z-10">
                <FontAwesomeIcon icon={section.icon} className="text-white text-2xl p-8" />
              </div>
              <div className="space-y-2 pl-4">
               <h1 className='font-bold text-2xl text-[#550000]'>
               <span className='text-4xl text-[#550000]'>{section.number} </span> {section.title}
               </h1>
               <p>{section.text}</p>
              </div>

              {/* Add small vertical line */}
              {index < 5 && (
                <div className="absolute left-4 md:top-full md:h-10 w-1 bg-black items-center justify-center"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewStep;
