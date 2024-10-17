import React from 'react';

// Reusable ImageCard component to handle circular images
const ImageCard = ({ src, alt, shape }) => {
  return (
    <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 overflow-hidden ${shape}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

// About Us section
const Aboutus = () => {
  const images = [
    {
      src: "https://images.picxy.com/cache/2018/12/13/914fde17a4d9f25112718d4d95585ded.jpg",
      alt: 'Image 1',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegcHssB5bxu2azpdG1ApPffkGvJWy1SjSN6NC3WmCmcaSSNKj8xCZlpREnfe0C6P8D18&usqp=CAU',
      alt: 'Image 2',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhya1d3E2SaimhtR_pfp2LDOT194q3f-nQOQ&s',
      alt: 'Image 3',
    },
    {
      src: 'https://i.pinimg.com/736x/7e/e1/87/7ee187eb415792cc6f9dad614974a480.jpg',
      alt: 'Image 4',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10">
      {/* Images Section */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-2">
        {images.map((image, index) => (
          <ImageCard 
            key={index} 
            src={image.src} 
            alt={image.alt}
            shape={ 
              index === 0
                ? "rounded-lg"
                : index === 1
                ? "rounded-full"
                : index === 2
                ? "rounded-full" 
                : "rounded-lg"
            } 
          />
        ))}
      </div>

      {/* Right section: Text content */}
      <div className="mt-4 ml-10 md:mt-0 md:w-1/2  md:text-left  ">
        <p className="text-black lg:text-3xl md:text-2xl sm:text-center leading-relaxed  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
