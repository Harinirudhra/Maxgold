import Hero from "@/components/home/Hero";

import MaxGoldADS from "@/components/home/MaxGoldADS";
// import WhyMaxGold from "@/components/old/WhyMaxGold";
import "./globals.css";

import Newcashbackcard from "@/components/newHome/Newcashbackcard";
import NewContent from "@/components/newHome/NewContent";
import NewCountUp from "@/components/newHome/NewCountUp";
import NewGoldrate from "@/components/newHome/NewGoldrate";
import NewFAQ from "@/components/newHome/NewFAQ";

import Newcashback from "@/components/newHome/Newcashback";
import NewWhy from "@/components/newHome/NewWhy";
import NewTestimonials from "@/components/newHome/NewTestimonials";
import NewStep from "@/components/newHome/NewStep";
import CAR from "@/components/newHome/CAR";
import NewLogin from "@/components/newHome/NewLogin";
import Contact from "@/components/contact/Contact";
import MaxTamil from "@/components/newHome/MaxTamil";



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
      {/* <NewGoldrate /> */}
      <NewFAQ />
      <NewTestimonials />
      <CAR />
      <MaxGoldADS />
      <NewLogin />
      <Contact />

      {/* <Feedback/> */}

    </div>
  );
}
