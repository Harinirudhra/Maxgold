import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Harini R',
    title: 'Google Reviews',
    text: `"Good to visit Max Gold. Hospitality is excellent and got a good price for the gold sold. If you are looking for Old gold buyers in Chennai...I recommend Max Gold."`,
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 2,
    name: 'Aravinth S',
    title: 'Google Reviews',
    text: `"My experience at Max Gold Cash for Gold Shop was outstanding. The procedure was made easy and straightforward by the staff's friendliness and expertise."`,
    image: 'https://randomuser.me/api/portraits/men/81.jpg',
  },
  {
    id: 3,
    name: 'Mala',
    title: 'Google Reviews',
    text: `"I had a good experience in selling my old gold for cash from Max Gold. Highly recommended for anyone looking to sell their gold at best market price with confidence."`,
    image: 'https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    id: 4,
    name: 'Monika',
    title: 'Google Reviews',
    text: `"The staffs are really good. The way of talking, explaining things that really comforts a lot. Max Gold is highly recommended for those who are looking for instant cash for gold jewellery."`,
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
  },
  {
    id: 5,
    name: 'Sadha William',
    title: 'Google Reviews',
    text: `"I am really impressed with their service at Max Gold in T-Nagar. The hospitality of the staff and process is very simple. They offer the best price in this Chennai for cash for gold market."`,
    image: 'https://randomuser.me/api/portraits/women/73.jpg',
  },
  {
    id: 6,
    name: 'Anitha',
    title: 'Google Reviews',
    text: `"Without a doubt, Chennai's top Old Gold Buyer. They are unparalleled in their ability to appraise antique gold. They gave me a great price for my jewellery, and their expertise made the whole process go smoothly."`,
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
];


const NewTestimonials = () => {
  return (
    <div className="bg-gray-50 px-8 py-12">
      <div className="text-center">
        <p className="text-gray-500 mb-4">2,157+ people have said how good MaxGold</p>
        <h2 className="text-3xl font-bold mb-8 text-[#efbf04]">Our happy Customers say about us</h2>
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
          Check all 2,157+ reviews
        </button>
      </div>
    </div>
  );
};

export default NewTestimonials;


