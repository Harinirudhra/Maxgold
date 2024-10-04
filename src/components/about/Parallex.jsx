import React from 'react';

const Parallax = () => {
  return (
    <div>
      {/* <div
        id="title"
        className="slide header relative w-full h-screen bg-cover flex items-start justify-start"
        style={{
          backgroundImage: 'url("https://www.freepik.com/free-photo/young-indian-woman-wearing-sari_26140461.htm#fromView=search&page=1&position=5&uuid=b17123ff-c11c-46e9-8093-e250125cd1f4")',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className="text-6xl text-white text-shadow-lg transform translateZ-1 scale-75">Max Gold</h1>
      </div> */}

      <div
        id="slide1"
        className="slide relative flex  min-h-screen p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/126fbb182282155.652ad63d40875.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="title h-full w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl mb-8">Research and Compare</h1>
          <p className="text-3xl text-gray-800  ">
          Take your time to research and compare different service providers. Understanding the market and comparing offers can help you secure the best deal.
          </p>
        </div>
      </div>

      <div
        id="slide2"
        className="slide relative flex  min-h-screen p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/93f717168213353.64369fe84335a.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
         <div className="title h-full w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl mb-8">Timing</h1>
          <p className="text-3xl text-gray-800  ">
          Consider the timing of your sale. Gold prices fluctuate, so selling when prices are high can maximize your return.
          </p>
        </div>
      </div>

      <div
        id="slide3"
        className="slide relative flex min-h-screen p-16 bg-cover"
        style={{
          backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/2fd824102034643.5f2cfeb0bee15.jpg")',
          backgroundAttachment: 'fixed',
        }}
      >
         <div className="title h-full w-1/2 bg-gray-200/35 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl mb-8">Emotional Attachment</h1>
          <p className="text-3xl text-gray-800  ">
          Some gold items may hold sentimental value. Consider the emotional attachment before selling, as certain pieces may be worth more to you than their monetary value.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Parallax;

