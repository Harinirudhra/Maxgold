import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import WhyMaxGold from "@/components/home/WhyMaxGold";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <HomeAbout />
      <WhyMaxGold/>
    </div>
  );
}
