import React from 'react';

const Contact = () => {
  return (
    <div className="w-full h-screen">
      
      {/* Maps and Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Paris */}
        <div className="relative bg-orange-400 p-8">
          <h2 className="text-white text-2xl font-bold mb-4">PARIS</h2>
          <p className="text-white">112, rue Réaumur<br />75002 Paris</p>
          <p className="text-white mt-2">hello@nedd.me</p>
          <p className="text-white">+33-1-71-19-58-32</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=PARIS_MAP_EMBED_URL"
            width="100%"
            height="250"
            className="mt-4 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Montpellier */}
        <div className="relative bg-gray-600 p-8">
          <h2 className="text-white text-2xl font-bold mb-4">MONTPELLIER</h2>
          <p className="text-white">1, rue Général Maurielhan<br />34000 Montpellier</p>
          <p className="text-white mt-2">hello@nedd.me</p>
          <p className="text-white">+33-4-67-15-32-42</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=MONTPELLIER_MAP_EMBED_URL"
            width="100%"
            height="250"
            className="mt-4 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;