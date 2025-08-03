"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/public/css/components/CaseStudies.module.css";
import Heading from "@/ui/Heading";

const caseStudies = [
  {
    id: 1,
    title: "A Social Networking for Pets and Pet Owners",
    description:
      "GoOrb is a trailblazing social networking app dedicated to pets and their owners.",
    image: "/assets/card/webdev.jpg",
    tag: "goOrb",
  },
  {
    id: 2,
    title: "Official Website and App for Tulsa Airport",
    description:
      "Tulsa Airport, a prominent travel institution, sought Cubet’s expertise to revamp its digital presence.",
    image: "/assets/card/webdev.jpg",
    tag: "Tulsa Airport",
  },
  {
    id: 3,
    title: "A Social Networking and Event Management App",
    description:
      "An all-in-one solution to discover parties, manage RSVPs, and grow communities.",
    image: "/assets/card/webdev.jpg",
    tag: "PartyApp",
  },
  {
    id: 4,
    title: "Multiplayer Tower Defense Game",
    description: "WAGMI",
    image: "/assets/card/webdev.jpg",
    tag: "WAGMI",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className={` ${styles.caseStudyContainer} py-20 my-16`}>
      <Image src={'/assets/section/clientele-bg.png'} width={10} height={10} className={styles.caseBG}/>
      <div className="max-w-6xl mx-auto px-4 md:px-8 section-wrapper">
         
        <div className="flex justify-between items-center mb-10">
          <Heading
            subheading={"portfolio"}
            headingWhite={"Our"}
            headingPurple={"Projects"}
            alignment={"left"}
          />
          <Link
            href="/case-studies"
            className="text-sm text-gray-600 hover:text-white hover:bg-purple-700 duration-300 ease-in-out transition rounded-full bg-white p-2"
          >
            More case studies →
          </Link>
        </div>

        <div
          className={` grid grid-cols-1 md:grid-cols-2 gap-20 `}
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
                  alt={study.title}
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
