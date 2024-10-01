export default function MainAb() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row-reverse w-full min-h-screen">
      {/* Parallax Background Section */}
      <div
        className="relative w-full h-64 md:h-full bg-fixed bg-center bg-no-repeat bg-cover md:absolute md:inset-0"
        style={{
          backgroundImage: "url('/RKImages/gold.webp')",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>

      {/* Additional Content */}
      <section
        id="discover"
        className="relative w-full md:w-1/2 z-20 py-10 px-6 md:px-16 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-pink-200 to-white hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)" }}
        ></div>

        <div className="relative z-20 text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
          Max Gold’s journey began with a vision to create a safe and reliable platform for individuals to navigate the intricate world of precious metals. Founded in 2006, we set out to offer a seamless and transparent experience in buying and selling gold, silver, and more. Over the years, our unwavering dedication to our core principles has earned us a reputation as a market leader in the industry.
          </p>
         
          <a
            href="#"
            className="inline-block mt-8 px-4 py-2 md:px-6 md:py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Discover more
          </a>
        </div>
      </section>
    </div>
  );
}
