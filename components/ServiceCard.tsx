'use client'
import React, { useState } from "react";

function ServiceCard() {

  const [active, setActive] = useState(false)

  return (
    <>
      <div className="p-4 w-full h-[400px] bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-100/20">
        <div
          className="h-full"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div className="h-full flex flex-col gap-3 justify-end">
            <div>
              <h3 className="font-bold text-2xl uppercase">AI & Data Innovation</h3>
            </div>
            <div className={`${active ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0'} overflow-hidden flex gap-2 flex-wrap transition-all duration-300 ease-in-out`}>
              {
                Array.from({length: 7}, (_, index) => (

                  <div
                    key={index}
                    className="text-base font-medium px-3 py-1 bg-white text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-black cursor-pointer"
                  >
                    AI Bots
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
