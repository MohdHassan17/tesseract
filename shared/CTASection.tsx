import CTA from "@/components/CTA";
import Heading, { EmphasisText } from "@/components/Heading";
import { Particles } from "@/components/ui/particles";
import React from "react";

function CTASection() {
  return (
    <section className="w-full min-h-[70vh] py-12 relative">
      <Particles className="absolute inset-0 z-0" />

      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-4">
        {/* Text Container */}
        <div className="flex-1 flex flex-col gap-4">
          <Heading>
            Let's Get <br />
            <EmphasisText>Started</EmphasisText>
          </Heading>
          <div className="">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti veritatis laboriosam nihil, fugiat impedit voluptatum
              aliquid eum animi id eligendi, consequatur laudantium dolorum
              recusandae delectus quibusdam tempore pariatur veniam?
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
            <CTA/> 
        </div>
      </div>
    </section>
  );
}

export default CTASection;
