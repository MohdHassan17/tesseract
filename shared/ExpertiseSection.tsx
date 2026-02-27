"use client";

import React, { useState } from "react";
import Heading, { EmphasisText } from "@/components/Heading";

//* Motion Imports for Cards
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";

function ExpertiseSection() {
  const expertiseData = [
    {
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum blanditiis fugit sunt facilis nihil sint odit sed rerum minus eveniet similique in excepturi autem, inventore veritatis atque ipsum, libero at quae accusamus! Amet dolor ratione ut ex consequatur optio.",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum blanditiis fugit sunt facilis nihil sint odit sed rerum minus eveniet similique in excepturi autem, inventore veritatis atque ipsum, libero at quae accusamus! Amet dolor ratione ut ex consequatur optio.",
    },
    {
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum blanditiis fugit sunt facilis nihil sint odit sed rerum minus eveniet similique in excepturi autem, inventore veritatis atque ipsum, libero at quae accusamus! Amet dolor ratione ut ex consequatur optio.",
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum blanditiis fugit sunt facilis nihil sint odit sed rerum minus eveniet similique in excepturi autem, inventore veritatis atque ipsum, libero at quae accusamus! Amet dolor ratione ut ex consequatur optio.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid earum blanditiis fugit sunt facilis nihil sint odit sed rerum minus eveniet similique in excepturi autem, inventore veritatis atque ipsum, libero at quae accusamus! Amet dolor ratione ut ex consequatur optio.",
    },
  ];

  const firstExpertise = expertiseData.shift();
  return (
    <>
      {/* ==== Area of Expertise Section ==== */}
      <section className="py-12  w-full min-h-[90vh] flex flex-col ">
        {/* Text */}
        <div className="mt-10 container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Heading */}
          <Heading >
            Our Area of  <br /> <EmphasisText>Expertise</EmphasisText>
          </Heading>

          {/* Paragraph */}
          <div className="w-full   lg:w-1/2 flex flex-col gap-6 ">
            <p className="leading-relaxed text-[15px] ">
              Tesseract is a forward-thinking software development company
              focused on building reliable, scalable, and user-centric digital
              solutions. With a strong emphasis on modern technologies and clean
              architecture.
            </p>
          </div>
        </div>

        {/* Cards Container */}

        <div className="py-12 flex flex-col gap-6 container mx-auto">
          {/* Primary */}
          <div className="">
            <ExpertiseCards
              title={firstExpertise?.title}
              description={firstExpertise?.description}
              descStyle="lg:w-1/2"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            {expertiseData.map((item) => (
              <ExpertiseCards
                title={item.title}
                description={item.description}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ExpertiseCards({
  title,
  description,
  descStyle,
}: {
  title?: string;
  description?: string;
  descStyle?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // heavier smoothing = smoke feel
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 30 });

  const [isHover, setIsHover] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  // main smoke body
  const smoke = useMotionTemplate`
    radial-gradient(
      540px circle at ${smoothX}px ${smoothY}px,
          rgba(240, 39, 150, 0.18),
      rgba(240, 39, 150, 0.10) 25%,
      rgba(240, 39, 150, 0.05) 40%,
      transparent 65%
    )
  `;

  // soft diffused outer haze
  const haze = useMotionTemplate`
    radial-gradient(
      550px circle at ${smoothX}px ${smoothY}px,
      rgba(240, 39, 150, 0.08),
      transparent 70%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full min-h-[200px] flex  rounded-lg p-4 bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-[.5px] border-[#171717] bg-gradient-to-l from-[#131313] to-transparent"
    >
      {/*      {/* haze layer */}
      <motion.div
        style={{ background: haze }}
        animate={{ opacity: isHover ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 rounded-lg"
      />

      {/* smoke core */}
      <motion.div
        style={{ background: smoke }}
        animate={{ opacity: isHover ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 rouned-lg"
      />

      <div className="flex flex-col justify-between">
        {/* Heading */}
        <div className="">
          <h3 className="font-semibold text-xl">{title}</h3>
        </div>

        {/* Paragraph */}
        <div className={`leading-relaxed text-base ${descStyle && descStyle}`}>
          {description}
        </div>
      </div>
    </motion.div>
  );
}

export default ExpertiseSection;
