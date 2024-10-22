"use client";
import React from "react";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Cash for Gold",
    description: [
      "Cash for Gold Jewellery",
      " Your Trusted Instant Cash for Gold near me",
      "Understanding the Value of Your Gold at Max Gold",
      "The Max Gold Instant Cash for Gold Process ",
      "A Commitment to Customer Satisfaction",
    ],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/126fbb182282155.652ad63d40875.jpg", // Remove url()
    buttonText: "View More",
    href: "/services/cashforgold",
  },
  {
    id: 2,
    title: "Release Pledged Gold",
    description: [
      "Understanding Pledged Gold",
      "Release Pledged Gold Jewellery - Process",
      "Rights and Responsibilities",
      "Valuable Considerations",
    ],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/93f717168213353.64369fe84335a.jpg", // Remove url()
    buttonText: "View More",
    href: "/services/releasegold",
  },
  {
    id: 3,
    title: "Door Step Services",
    description: [
      "Max Gold provides the Convenience of Doorstep Services",
      "Steps to Avail Doorstep Services from Max Gold",
      "Max Gold’s doorstep services offer several advantages",
      "Considerations for Doorstep Services"
    ],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/2fd824102034643.5f2cfeb0bee15.jpg", // Remove url()
    buttonText: "View More",
    href: "/services/DoorStep",
  },
  {
    id: 4,
    title: "Add-On Services",
    description: [
      "Max Gold - Add-on Services",
      "Cash for Diamond, Platinum and Silver",
      "Value Added Services"
    ],
    image: "https://img.freepik.com/premium-photo/closeup-delicate-gold-necklace-with-floral-motifs-dangling-beads-rich-blue-fabric-background_923559-13903.jpg?w=996", // Remove url()
    buttonText: "View More",
    href: "/services/addonservice",
  },
];


const Parallax = () => {
  return (
    <div>
      {servicesData.map((service) => (
        <div
          key={service.id}
          id={service.id}
          className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="title h-full sm:w-full md:w-1/2 bg-[#7b071e] shadow-lg p-4 sm:p-6 md:p-8 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8  text-yellow-400 ">{service.title}</h1>
            <ul className="text-lg font-bold sm:text-xl md:text-2xl text-white">
              {service.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            {service.buttonText && (
              <Link href={service.href} passHref>
                <button className="md:text-lg mt-6 shadow-md text-sm text-white bg-yellow-400 px-4 py-2 hover:bg-yellow-500 transition-all duration-300">
                  {service.buttonText}
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parallax;
