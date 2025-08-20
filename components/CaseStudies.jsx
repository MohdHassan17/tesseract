"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/public/css/components/CaseStudies.module.css";
import Heading from "@/ui/Heading";

const caseStudies = [
  {
    id: 1,
    title: "Nexifies Website and Portfolio",
    description:
      "We crafted a professional and mobile-responsive website for Nexifies, showcasing their portfolio and services.",
    image: "/assets/card/nexifies.webp",
    tag: "Nexifies",
  },
  {
    id: 2,
    title: "Website Redesign of At Ease Property Services",
    description:
      "A complete overhaul of At Ease Property Services' website, enhancing user experience and aesthetics and showcasing their services in single-page layout",
    image: "/assets/card/atease.webp",
    tag: "At Ease",
  }
];

export default function CaseStudiesSection() {
  return (
    <section className={` ${styles.caseStudyContainer} py-20 my-16 bg-fixed`}>
      <Image src='/assets/section/clientele-bg.png' width={10} height={10} alt="Background Image" className={styles.caseBG}/>
      <div className="max-w-6xl mx-auto px-4 md:px-8 ">
         
        <div className="flex justify-center items-center mb-10">
          <Heading
            subheading={"portfolio"}
            headingWhite={"Our"}
            headingPurple={"Projects"}
        
          />
        
        </div>

        <div
          className={` grid grid-cols-1 md:grid-cols-2 gap-20  ` }  data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
        >
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.caseCard} space-y-4 transition-all ${
                index % 2 === 1 ? "md:translate-y-20" : ""
              }`}
            >
              <div className="aspect-[3/3] relative overflow-hidden rounded-xl shadow-md">
                <Image
                  src={study.image}
                  alt={'Case Study Image'}
                  fill
                  className="object-cover"
                />
              </div>
              <div></div>
              <div className="flex flex-col justify-center px-4 py-6">
                {study.tag && (
                  <div className="text-medium font-semibold text-gray-500">
                    {study.tag}
                  </div>
                )}
                <h2
                  className="text-xl text-white-800 font-large"
                 
                >
                  {study.title}
                </h2>
                <p className="text-gray-400 text-medium">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
