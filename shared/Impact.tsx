import Heading, { EmphasisText } from "@/components/Heading";
import { Particles } from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

function Impact() {
  const impacts = [
    {
      title: "Ideate",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.                  Dolores expedita consequuntur commodi eveniet, quam, minus                  repellat sint, maxime totam deserunt quae accusamus fugiat       libero neque odit nulla rem ducimus nobis!",
    },
    {
      title: "Innovate",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.                  Dolores expedita consequuntur commodi eveniet, quam, minus                  repellat sint, maxime totam deserunt quae accusamus fugiat       libero neque odit nulla rem ducimus nobis!",
    },
    {
      title: "Create",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.                  Dolores expedita consequuntur commodi eveniet, quam, minus                  repellat sint, maxime totam deserunt quae accusamus fugiat       libero neque odit nulla rem ducimus nobis!",
    },
  ];
  return (
    <section className="w-full relative min-h-[70vh] py-16 ">
      <Particles className="absolute inset-0 z-0" />
      <div className="container mx-auto min-h-[70vh] flex flex-col lg:flex-row lg:items-center gap-4 ">
        {/* Text Content Container*/}
        <div className="flex-1 flex flex-col  gap-4 ">
          <Heading className="text-5xl">
            How We <br />
            Create <EmphasisText>Impact</EmphasisText>
          </Heading>

          <div className="flex flex-col gap-6 py-12">
            {
              impacts.map((item,index)=> (

            <div key={item.title} className="flex flex-col gap-6">
              <div className="flex justify-between ">
                <div className="text-3xl font-semibold">
                  <h3>{item.title}</h3>
                </div>
                <div className="text-3xl font-thin">0{index+1}</div>
              </div>
              <div className="">
                <p className="leading-relaxed"> {item.description} </p>
              </div>

              { index !== impacts.length -1 && <Separator className="" />}
            </div>
              ))
            }
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 w-full flex justify-end">

          <Image 
            src={'/images/Home/impact.png'}
            width={1000 }
            height={1000 }
            className="w-[500px] "
            alt="Impact Background Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Impact;
