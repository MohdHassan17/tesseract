"use client";
import { Dot } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

function Ribbon({className, items, speed = 30 }: {className?: string, items: string[]; speed?: number }) {
  return (
    <div className={` ${className} bg-(--color-primary) py-1 text-xl w-full overflow-hidden`}>
      <Marquee className="w-full bg-blac gap-3 ">

      {
        items.map((items,index) => (

          <span key={index} className="mr-[52px] uppercase font-extrabold flex gap-[52px] items-center ">{items} <Dot/>  </span>
        ))
      }
        
      </Marquee>
    </div>
  );
}

export default Ribbon;
