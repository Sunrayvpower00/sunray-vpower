import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import LogoSplash from "@/components/LogoSplash";
import BrandSelector from "@/components/BrandSelector";
import Footer from "@/components/Footer";

import LightningSymbol from "@/components/LightningSymbol";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#07182F] text-white">
       <LightningSymbol />
      <LogoSplash />
      <Navbar />

      <Hero/>
      <Brands/>
      <Categories/>
      <WhyChooseUs/>
      <BrandSelector />
      <Footer />


      


    </main>
  );
}