"use client"
import AboutUs from "@/components/sections/AboutUs";
import CTA from "@/components/sections/cta";
import { FAQ1 } from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import { Footer1 } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="size-full relative">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <CTA />
      <FAQ1 />
      <Footer1 />
    </div>
  );
}
