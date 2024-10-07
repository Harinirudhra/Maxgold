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
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Research and Compare</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
            Take your time to research and compare different service providers. Understanding the market and comparing offers can help you secure the best deal.
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Timing</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
            Consider the timing of your sale. Gold prices fluctuate, so selling when prices are high can maximize your return.
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8">Emotional Attachment</h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-800">
            Some gold items may hold sentimental value. Consider the emotional attachment before selling, as certain pieces may be worth more to you than their monetary value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;


