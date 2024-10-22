import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

// Import the JSON data with locations
const contactData = {
  locations: [
    {
      name: "ANNA NAGAR (Main Branch)",
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
      googleMapsUrl: "https://www.google.com/maps/place/No+10,+34,+2nd+Avenue,+Block+F,+Annanagar+East,+Chennai,+Tamil+Nadu+600102",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "ANNA NAGAR",
      address: (
        <>
          2109/3, 1st Floor, 13th Main Rd,<br />
          Anna Nagar, Chennai,<br />
          Tamil Nadu 600040
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42103.50030030984!2d80.17738432845948!3d13.085130020392564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658dfae68993%3A0xf91eec00ee9da140!2sMax%20Gold%20-Cash%20For%20Gold%20-%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1729486747938!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/2109/3,+1st+Floor,+13th+Main+Rd,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "T - NAGAR (Main Branch)",
      address: (
        <>
          Prasanth Real Gold Towers,<br />
          8th Floor T. Nagar, Chennai, <br />
          Tamil Nadu 600017
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14781.518549815984!2d80.21987226648343!3d13.03875650419726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526657dd90ac2d%3A0xb283306b4ac6fc6a!2sMax%20Gold%20-%20Cash%20For%20gold%20-T%20Nagar!5e0!3m2!1sen!2sin!4v1729486847835!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/Prasanth+Real+Gold+Towers,+8th+Floor+T.+Nagar,+Chennai,+Tamil+nadu+600017",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "T - NAGAR",
      address: (
        <>
          No:39, Pinjala Subramani street,<br />
          N Usman Rd, T. Nagar, Chennai, <br />
          Tamil Nadu 600017
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.067407929137!2d80.22543079658764!3d13.043741280710998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526716fb6e3d0d%3A0x5e072c6f0d082e85!2sMax%20Gold%20-%20Cash%20for%20Gold%20%7C%20Old%20gold%20buyers!5e0!3m2!1sen!2sin!4v1729511744633!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/No:39,+Pinjala+Subramani+street,+N+Usman+Rd,+T.+Nagar,+Chennai,+Tamil+nadu+600017",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "PORUR",
      address: (
        <>
          1st Floor, Arcot Main Road<br />
          Porur Signal, Chennai,<br />
          Tamil Nadu 600116
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "81221 15945",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0037022638!2d80.15172567066249!3d13.035435985401046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52614569ab5e9d%3A0x8bb4684a8b162e79!2sMax%20Gold%20-%20Cash%20For%20Gold%20-Porur!5e0!3m2!1sen!2sin!4v1726311898931!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/1st+Floor,+Arcot+Main+Road,+Porur+Signal,+Chennai,+Tamil+nadu+600116",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "TAMBARAM (Main Branch)",
      address: (
        <>
          6 GST Road<br />
          Tambaram Sanatorium<br />
          Chennai, 600047
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "8122341656",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4468325972543!2d80.13151117411985!3d12.943234615501474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fd6348f9dff%3A0x97cb4fefc4ae4212!2sMax%20Gold%20Tambaram%20-%20Cash%20for%20Gold%20-%20Sell%20old%20gold!5e0!3m2!1sen!2sin!4v1726312020051!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/6+GST+Road,+Tambaram+Sanatorium,+Chennai,+Tamil+nadu+600047",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "TAMBARAM",
      address: (
        <>
          No 36/644 - First Floor,<br />
          Grand Southern Trunk Rd, West, Nehru Nagar, Kadaperi,<br />
          Tambaram, Chennai, Tamil Nadu 600045
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "9750197501",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.30145544492!2d80.00224828720093!3d12.943228980859947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ff603c8a77f%3A0x3490866251a19e94!2sBest%20Money%20Gold%20%7C%20Tambaram%20%7C%20Old%20Gold%20Buyers!5e0!3m2!1sen!2sin!4v1729511744633!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/No+36/644+-+First+Floor,+Grand+Southern+Trunk+Rd,+West,+Nehru+Nagar,+Kadaperi,+Tambaram,+Chennai,+Tamil+Nadu+600045",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "KODAMBAKKAM (Main Branch)",
      address: (
        <>
          145, Kodambakkam High Road,<br />
          Near Ekkatuthangal Metro Station,<br />
          Chennai 600024
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "93823 20192",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7952752701436!2d80.22365507074139!3d13.04863239313839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526678c7bde55b%3A0x19446e1e8f67cd35!2sMax%20Gold%20-%20Cash%20For%20Gold%20%7C%20Kodambakkam!5e0!3m2!1sen!2sin!4v1726312114452!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/145,+Kodambakkam+High+Road,+Near+Ekkatuthangal+Metro+Station,+Chennai,+Tamil+nadu+600024",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "KODAMBAKKAM",
      address: (
        <>
          107, 1st Floor, N.N. Balu Nagar,<br />
          Near Ags Cinemas, Kodambakkam,<br />
          Chennai, 600024
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24113.45828374887!2d80.22614047161226!3d13.047679097338137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266a55ac63b63%3A0xb61af64ec75177de!2sMax%20Gold%20-%20Cash%20For%20Gold%20%7C%20Kodambakkam!5e0!3m2!1sen!2sin!4v1726312174440!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/107,+1st+Floor,+N.N.+Balu+Nagar,+Near+Ags+Cinemas,+Kodambakkam,+Chennai,+Tamil+nadu+600024",
      backgroundColor: "bg-[#7b071e]"
    },
    {
      name: "THIRUVANMIYUR",
      address: (
        <>
          No:52, 1st Floor,<br />
          East Coast Road,<br />
          Thiruvanmiyur, Chennai,<br />
          Tamil Nadu 600041
        </>
      ),
      email: "info@maxgold.co.in",
      phone: "96770 35402",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14642.925017894486!2d80.26764727819037!3d12.96826238684491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f2a62fbac8d%3A0xf682bdc1d6e5c65a!2sMax%20Gold%20-%20Cash%20for%20Gold%20%7C%20Sell%20Old%20Gold!5e0!3m2!1sen!2sin!4v1729513070724!5m2!1sen!2sin",
      googleMapsUrl: "https://www.google.com/maps/place/No:+52,+1st+Floor,+East+Coast+Road,+Thiruvanmiyur,+Chennai,+Tamil+nadu+600041",
      backgroundColor: "bg-[#7b071e]"
    }
  ]
};

const Contact = () => {
  return (
    <div className="py-10 px-4 lg:px-8">
      <header className="text-center">
        <h1 className="font-bold md:text-3xl text-xl mb-3 text-[#efbf04]">Max Gold - Our Locations</h1>
        <p className="font-medium mt-4 mb-8 text-sm md:text-lg">
          Contact us today, and let us help you make informed decisions and valuable transactions. 
          <br />
          Thank you for choosing Max Gold where your gold matters.
        </p>
      </header>

      {contactData.locations.map(({ name, address, email, phone, mapUrl, googleMapsUrl, backgroundColor }, index) => (
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:mb-10 ${backgroundColor} mb-5 md:mb-0 mx-0 lg:mx-10`} 
          key={index}
        >
          <div className={`text-white flex flex-col justify-center items-start mx-0 lg:mx-32 p-10 ${index % 2 === 1 ? "md:order-last" : ""}`}>
            <h2 className="lg:text-2xl md:text-xl text-lg font-bold mb-3">{name}</h2>
            <div className="flex items-start mb-3 gap-3">
              <RoomIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className="font-medium md:text-lg lg:text-xl text-base">{address}</p>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <EmailIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className="md:text-lg lg:text-xl text-base">{email}</p>
            </div>
            <div className="flex items-center gap-3">
              <CallIcon className="text-white md:text-lg lg:text-xl text-base" />
              <p className="md:text-lg lg:text-xl text-base">{phone}</p>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded">
              View on Google Maps
            </a>
          </div>
          <div className="md:w-full">
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Contact);
