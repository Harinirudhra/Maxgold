import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import MaxGoldADS from "@/components/home/MaxGoldADS";
// import WhyMaxGold from "@/components/old/WhyMaxGold";
import "./globals.css";
import OurValue from "@/components/about/OurValue";
import Testimonials from "@/components/about/Testimonials";
// import Aboutus from "@/components/about/AboutUs";
// import Feedback from "@/components/home/Feedback";
import Extra1 from "@/components/home/Extra1";


export default function Home() {
  return (
    <div >
      <Hero />
      <HomeAbout />
      <Extra1/>
      {/* <WhyMaxGold /> */}
      <OurValue />
      <Testimonials />
      <MaxGoldADS />
      {/* <Feedback/> */}
      <Extra1/>

    </div>
  );
}
