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
import TestimonialExtra from "@/components/home/TestimonialExtra";
import Newcashbackcard from "@/components/newHome/Newcashbackcard";
import NewContent from "@/components/newHome/NewContent";
import NewCountUp from "@/components/newHome/NewCountUp";
import NewGoldrate from "@/components/newHome/NewGoldrate";
import NewFAQ from "@/components/newHome/NewFAQ";
import NewTestimonial from "@/components/newHome/NewTestimonial";
import Newcashback from "@/components/newHome/Newcashback";
import NewWhy from "@/components/newHome/NewWhy";
import NewTestimonials from "@/components/newHome/NewTestimonials";
import NewStep from "@/components/newHome/NewStep";
import CAR from "@/components/newHome/CAR";
import NewLogin from "@/components/newHome/NewLogin";
import Gold from "@/components/old/gold";


export default function Home() {
  return (
    <div >
      <Hero />
      <Newcashback />
      <Newcashbackcard />
      <NewStep />
      <NewContent />
      <NewCountUp />
      <NewWhy />
      <NewGoldrate />
      <NewFAQ />
      <NewTestimonials />
      <CAR />
      <MaxGoldADS />
      <NewLogin />

      {/* <Feedback/> */}

    </div>
  );
}
