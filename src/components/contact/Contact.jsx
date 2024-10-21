import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

// Import the JSON data
const contactData = {
  locations: [
    {
      name: "ANNA NAGAR",
      address: (
        <>

          No 10, 34, 2nd Ave, Block F,<br />
          Annanagar East, Chennai,<br />
          Tamil Nadu 600102
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.88930928231193!2d80.22218305617572!3d13.084671467275157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265c9b9acdc51%3A0x5c995a83b6385862!2sMax%20Gold%20%7C%20Cash%20for%20Gold%20%7C%20Sell%20Old%20Gold%20%7C%20Best%20Place%20sell%20Gold!5e0!3m2!1sen!2sin!4v1729486333056!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "ANNA NAGAR",
      address: (
        <>
          2109/3, 1st Floor, 13th Main Rd,<br />
          Anna Nagar, Chennai,<br />
          Tamilnadu 600040
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",

      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42103.50030030984!2d80.17738432845948!3d13.085130020392564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658dfae68993%3A0xf91eec00ee9da140!2sMax%20Gold%20-Cash%20For%20Gold%20-%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1729486747938!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "T - NAGAR",
      address: (
        <>
          Prasanth Real Gold Towers,<br />
          8th Floor T. Nagar, Chennai, <br />
          Tamilnadu 600017
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14781.518549815984!2d80.21987226648343!3d13.03875650419726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526657dd90ac2d%3A0xb283306b4ac6fc6a!2sMax%20Gold%20-%20Cash%20For%20gold%20-T%20Nagar!5e0!3m2!1sen!2sin!4v1729486847835!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "T - NAGAR",
      address: (
        <>
          No:39, Pinjala Subramani street,<br />
          N Usman Rd, T. Nagar, Chennai, <br />
          Tamilnadu 600017
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.067407929137!2d80.22543079658764!3d13.043741280710998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526716fb6e3d0d%3A0x5e072c6f0d082e85!2sMax%20Gold%20-%20Cash%20for%20Gold%20%7C%20Old%20gold%20buyers!5e0!3m2!1sen!2sin!4v1729486486164!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },


    {
      name: "PORUR",
      address: (
        <>
          1st Floor, Arcot Main Road<br />
          Porur Signal, Chennai,<br />
          Tamilnadu 600116
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "81221 15945",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0037022638!2d80.15172567066249!3d13.035435985401046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614569ab5e9d%3A0x8bb4684a8b162e79!2sMax%20Gold%20-%20Cash%20For%20Gold%20-Porur!5e0!3m2!1sen!2sin!4v1726311898931!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "TAMBARAM",
      address: (
        <>
          6 GST Road<br />
          Tambaram Sanatorium<br />
          Chennai, 600047
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "81223 41656",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4468325972543!2d80.13151117411985!3d12.943234615501474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fd6348f9dff%3A0x97cb4fefc4ae4212!2sMax%20Gold%20Tambaram%20-%20Cash%20for%20Gold%20-%20Sell%20old%20gold!5e0!3m2!1sen!2sin!4v1726312020051!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "PERAMBUR",
      address: (
        <>
          77 Railway Station<br />
          3, Madhavaram High Rd<br />
          Perambur, Chennai 600011
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "84382 45452",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62174.431717946725!2d80.19178242951214!3d13.10539557666045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265f4693087c7%3A0xf710796e49d93a5d!2sMax%20Gold%20-%20cash%20For%20Gold%20-%20Perambur!5e0!3m2!1sen!2sin!4v1726312132521!5m2!1sen!2sin",
      backgroundColor: "bg-[#7b071e]"
    }
  ]
};

const Contact = () => {
  return (
    <div className="py-10 px-4 lg:px-8">
      <div>
        <h1 className="text-center font-bold md:text-3xl text-xl mb-3">Max Gold - Our Locations</h1>
        <p className="text-center font-medium mt-4 mb-8 text-sm md:text-lg ">
          Contact us today, and let us help you make informed decisions and valuable transactions. <br />
          Thank you for choosing Max Gold where your gold matters.
        </p>
      </div>

      {/* Alternating Layout for Each Location */}
      {contactData.locations.map((location, index) => (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:mb-10 ${location.backgroundColor} mb-5 md:mb-0 mx-0 lg:mx-10`} key={index}>
          {/* Render text first in all cases for mobile, alternate for desktop */}
          <div className={`text-white flex flex-col justify-center items-start mx-0 lg:mx-32 p-10 ${index % 2 === 1 ? "md:order-last" : ""}`}>
            <h2 className="lg:text-2xl md:text-xl text-lg font-bold mb-3">{location.name}</h2>
            <div className="flex items-start mb-3 gap-3 ">
              <RoomIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className=" font-medium md:text-lg lg:text-xl text-base">{location.address}</p>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <EmailIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className='md:text-lg lg:text-xl text-base'>{location.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <CallIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className='md:text-lg lg:text-xl text-base'>{location.phone}</p>
            </div>
          </div>
          {/* Render map */}
          <div className="md:w-full">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
