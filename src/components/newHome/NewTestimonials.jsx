import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Leslie Alexander',
    title: 'React Developer',
    text: `"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."`,
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Actual image URL
  },
  {
    id: 2,
    name: 'Jacob Jones',
    title: 'Digital Marketer',
    text: `"Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users."`,
    image: 'https://randomuser.me/api/portraits/men/65.jpg', // Actual image URL
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    title: 'Graphic Designer',
    text: `"I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg', // Actual image URL
  },
];

const NewTestimonials = () => {
  return (
    <div className="bg-gray-50 px-8 py-12">
      <div className="text-center">
        <p className="text-gray-500 mb-4">2,157 people have said how good Rareblocks</p>
        <h2 className="text-3xl font-bold mb-8">Our happy clients say about us</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-left mb-4">
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-900 text-left mb-6">{testimonial.text}</p>
            <div className="flex items-start justify-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className='text-left'>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="text-blue-500 hover:underline">
          Check all 2,157 reviews
        </button>
      </div>
    </div>
  );
};

export default NewTestimonials;


