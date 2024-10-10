"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

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
            className='py-10 text-3xl font-bold text-center'
          >
            Step-By-Step
          </motion.h1>
     
          <div className='grid grid-cols-2'>
            <motion.div
              variants={fadeInUp}
              className='px-20 pt-20'
            >
              <motion.img
                src="/RKImages/service2.jpg"
                alt="img"
                className='w-96 h-96'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
              />
            </motion.div>
     
            <motion.div
              className='space-y-10'
              initial="hidden"
              animate="visible"
              variants={container}
            >
              {[
                { title: "Contact Us", text: "To sell your gold, reach out to us at 97501 97501 or via WhatsApp to arrange doorstep service." },
                { title: "Get Quote", text: "Our expert team provides a comprehensive estimate based on current market rates for your gold, silver, and diamond jewelry." },
                { title: "Transparent Service", text: "With minimal margins, our estimation value remains the highest in Chennai. We offer transparent service throughout the selling process, encouraging clients to cross-check with other gold buyers to validate our market trends." },
                { title: "Visit Our Branch", text: "Visit any of our nearby branches to sell your gold for the same estimated total value offered by our team." },
                { title: "Doorstep Service", text: "Sell your gold for cash from the comfort of home. Our friendly staff will visit your home, conduct the verification process, and make payments accordingly." },
                { title: "100% Customer Satisfaction", text: "Your satisfaction is our paramount concern. We strive to offer the highest price possible while ensuring a safe and secure process." }
              ].map((section, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <h1 className='font-bold'>{section.title}</h1>
                  <p>{section.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )
    };
export default NewStep