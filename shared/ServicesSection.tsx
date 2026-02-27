import Heading, { EmphasisText } from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
import Ribbon from '@/components/Ribbon'

function ServicesSection() {
  return (
    <>
      <section
        className="relative w-full min-h-[70vh] py-12 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/Home/hero-bg.png')" }}
      >
        <div className="absolute z-1 inset-0 bg-gradient-to-b via-black/70 via-40% from-black to-transparent "></div>
        <div className="relative container z-20 mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <Heading className="text-4xl">
                <EmphasisText>Our </EmphasisText> Ventures
              </Heading>
              <div className="leading-tight w-2/3 text-3xl" >
                Empowering the Next Generation of Industry Leaders
              </div>
            </div>

            <div className="w-1/3 leading-relaxed ">

              <h3 className="font-bold">Defining Tomorrow.</h3>
              <p>We don't just invest; we collaborate. Discover the ecosystem of bold companies leveraging our resources to scale faster.</p>
            </div>
          </div>

          {/* Card Section */}

          <div className="py-10 w-full grid lg:grid-cols-4 grid-cols-1 ">

            <ServiceCard/> 
            <ServiceCard/> 
            <ServiceCard/> 
            <ServiceCard/> 
          </div>
        </div>


      </section>
    </>
  );
}

export default ServicesSection;
