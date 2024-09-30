export default function MainAb() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row w-full min-h-screen">

      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 to-white/80 z-20">
      
        <div
          className="relative w-full h-64  md:h-full bg-fixed bg-center bg-no-repeat bg-cover md:absolute md:inset-0"
          style={{
            backgroundImage: "url('/RKImages/gold.webp')",
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      </div>

      {/* Additional Content */}
      <section
        id="discover"
        className="relative w-full md:w-1/2 z-20 py-10 px-6 md:px-16 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-pink-200 to-white hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0%, 89% 100%, 0% 100%)" }}
        ></div>

        <div className="relative z-20 text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            In the fast-paced world of gold transactions, Max Gold is the trusted name for individuals seeking a seamless and reliable solution to exchange their precious gold for cash. As a premier choice among gold buyers, strategically located in your vicinity, we excel in providing a swift and hassle-free process for selling gold and receiving cash in return.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            If you’ve ever wondered, “Where can I sell gold near me?” or “Where can I find the best cash-for-gold locations near me?” – the answer is simple: Max Gold. We serve as your go-to destination for selling gold and transforming your valuable items into cash. With years of experience catering to individuals eager to exchange their gold for cash in their local area, we prioritize not only the profitability of your transaction but also its safety and security.
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
