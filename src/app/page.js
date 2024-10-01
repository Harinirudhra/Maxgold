import Hero from "@/components/home/Hero";

import MaxGoldADS from "@/components/home/MaxGoldADS";
// import WhyMaxGold from "@/components/old/WhyMaxGold";
import "./globals.css";
import OurValue from "@/components/about/OurValue";
import Testimonials from "@/components/about/Testimonials";
// import Aboutus from "@/components/about/AboutUs";
// import Feedback from "@/components/home/Feedback";
import Extra1 from "@/components/home/Extra1";
import MainAb from "@/components/home/MainAb";
import Ourstory from "@/components/home/Ourstory";
import HomeAbout from "@/components/old/HomeAbout";
import Countup from "@/components/home/Countup";
import MainBC from "@/components/home/MainBC";


export default function Home() {
  return (
    <div >
      <Hero />
      <MainAb />
      
      <Ourstory />
      <MainBC/>
      <Extra1 />

      {/* <WhyMaxGold /> */}


      <OurValue />
      <Countup/>
      <Testimonials />
      <MaxGoldADS />
      {/* <Feedback/> */}

    </div>
  );
}
