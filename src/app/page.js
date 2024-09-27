import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import MaxGoldADS from "@/components/home/MaxGoldADS";
import WhyMaxGold from "@/components/home/WhyMaxGold";
import "./globals.css";
import OurValue from "@/components/about/OurValue";
import Testimonials from "@/components/about/Testimonials";
import Aboutus from "@/components/about/AboutUs";


export default function Home() {
  return (
    <div >
      <Hero />
      <HomeAbout />
      <WhyMaxGold />
      <OurValue />
      <Testimonials />
      <MaxGoldADS />

    </div>
  );
}
