import React from 'react';

const DoorstepX = () => {
  const services = [
    {
      title: "Time-Saving",
      text: "With doorstep services, you save valuable time. Theres no need to commute, find parking, or wait in queues. Our team comes to you, ensuring that the transaction is efficient and swift."
    },
    {
      title: "Safety and Security",
      text: "Selling valuable gold items can be a concern for safety. Max Golds doorstep services are designed with your security in mind. Our trained professionals handle your gold with the utmost care and professionalism, ensuring a secure transaction."
    },
    {
      title: "Flexibility",
      text: "Our doorstep services provide flexibility in scheduling. You can choose a date and time that suits your convenience, allowing you to plan the transaction around your daily activities."
    },
    {
      title: "Expert Appraisers",
      text: "Max Golds team of expert appraisers, who are trained to assess the value of your gold accurately, accompany our doorstep services. You can have confidence that youll receive a competitive and fair valuation for your gold items."
    }
  ];


  return (
    <div className=" px-4 py-8 min-h-96 bg-[#7b071e]">

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        

        <div className="mt-12 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-[#7b071e] hover:bg-[#a90e2d] transition hover:z-[1] hover:shadow-2xl">
              <div className="relative space-y-8 py-12 p-8">
                <div className="space-y-2">
                  <h5 className="text-lg md:text-xl font-semibold text-yellow-400 transition group-hover:text-secondary">{service.title}</h5>
                  <p className="text-gray-300 text-base sm:text-sm">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorstepX;

