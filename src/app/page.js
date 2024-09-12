import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import WhyMaxGold from "@/components/home/WhyMaxGold";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div >
      <Hero />
      <HomeAbout />
      <WhyMaxGold />
    </div>
  );
}
