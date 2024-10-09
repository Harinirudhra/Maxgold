"use client"
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const NewCountUp = () => {
  // Initialize the Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // It will trigger the animation every time the component comes into view
    threshold: 0.3, // Adjust this value to control when the animation triggers (30% visibility)
  });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-tr from-red-800 to-red-500   rounded-lg p-8 lg:px-8 lg:py-20 flex flex-col-reverse lg:flex-row items-center lg:items-start lg:gap-8"

    >
      {/* White Background Section */}
      < div className="absolute top-0 left-0 w-full h-16 py-8 bg-white pt-5 rounded-t-lg" ></div >

      <div className="flex-1 z-10 py-8 ml-0 lg:ml-10">
        <h3 className="text-yellow-300 font-semibold lg:mt-10 mt-0">WHY OURS</h3>
        <h2 className="md:text-5xl text-3xl font-black mt-2 text-white">Our Best Achievements</h2>
        <p className="text-white mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          ducimus asperiores vero consectetur iure laudantium nostrum neque,
          provident blanditiis ea! Recusandae delectus odio cum illo quis id,
          inventore corrupti aperiam temporibus dolorem.
        </p>

        {/* Achievements Section */}
        <div className="flex flex-wrap mt-5 md:mt-8 gap-5 lg:gap-12">
          <div className="text-left">
            <h3 className="md:text-6xl text-5xl font-bold mb-1 text-white">
              {inView && <CountUp start={0} end={55} duration={2} suffix="k+" />}
            </h3>
            <p className="font-semibold text-white">University Scholars</p>
          </div>
          <div className="text-left">
            <h3 className="md:text-6xl text-5xl font-bold mb-1 text-white">
              {inView && <CountUp start={0} end={17} duration={2} suffix="k" />}
            </h3>
            <p className="font-semibold text-white">Professional Educators</p>
          </div>
          <div className="text-left">
            <h3 className="md:text-6xl text-5xl font-bold mb-1 text-white">
              {inView && <CountUp start={0} end={2} duration={2} suffix="k+" />}
            </h3>
            <p className="font-semibold text-white">Worldwide Branches</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-1 flex justify-center items-center z-10">
        <div className="relative lg:absolute mt-0 -top-7 lg:mt-8 lg:-top-24 xl:left-24 lg:w-96 lg:h-96 md:h-80 md:w-80 w-64 h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/service2.jpg"
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section >
  );
};

export default NewCountUp;


