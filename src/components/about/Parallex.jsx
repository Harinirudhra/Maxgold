import React from 'react';

const Parallax = () => {
  return (
    <div>
      <div
        id="slide1"
        className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/126fbb182282155.652ad63d40875.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full sm:w-full md:w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Purity and Karat</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
          Gold jewelry is often marked with a karat value, which indicates the purity of the gold used. Karat values typically range from 24k (pure gold) to 10k. A higher karat signifies purer gold and a more valuable item.
          </p>
        </div>
      </div>

      <div
        id="slide2"
        className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/93f717168213353.64369fe84335a.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full sm:w-full md:w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Weight</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
          The weight of your gold jewelry, measured in grams, plays a pivotal role in determining its value. Heavier items contain more gold and, consequently, command a higher value.
          </p>
        </div>
      </div>

      <div
        id="slide3"
        className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/2fd824102034643.5f2cfeb0bee15.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full sm:w-full md:w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Market Price</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
          The current market price of gold is a critical factor influencing the value of your gold items. Gold prices fluctuate daily in response to global supply and demand, economic conditions, and geopolitical events. Selling your gold when prices are favorable can maximize your returns.
          </p>
        </div>
      </div>
      <div
        id="slide4"
        className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/93f717168213353.64369fe84335a.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full sm:w-full md:w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Design and Craftsmanship</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
          The design, craftsmanship, and aesthetics of your gold jewelry can also affect its value. Antique or designer pieces may have additional value beyond their gold content.
          </p>
        </div>
      </div>
      <div
        id="slide5"
        className="slide relative flex flex-col sm:flex-row min-h-screen p-4 sm:p-8 md:p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/126fbb182282155.652ad63d40875.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full sm:w-full md:w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Condition</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
          The condition of your gold items matters. Well-maintained and undamaged jewelry typically has a higher value than items showing significant wear or damage.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;


