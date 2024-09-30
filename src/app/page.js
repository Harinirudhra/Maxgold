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


export default function Home() {
  return (
    <div >
      <Hero />
     
      {/* <WhyMaxGold /> */}
      <MainAb />
      <Ourstory />
      <OurValue />
      <Testimonials />
      <MaxGoldADS />
      {/* <Feedback/> */}
      <Extra1/>

    </div>
  );
}
