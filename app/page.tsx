import Button from "@/components/Button";
import Heading, { EmphasisText } from "@/components/Heading";
import Ribbon from "@/components/Ribbon";
import CTASection from "@/shared/CTASection";
import ExpertiseSection from "@/shared/ExpertiseSection";
import Impact from "@/shared/Impact";
import ServicesSection from "@/shared/ServicesSection";
import Technologies from "@/shared/Technologies";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ==== Hero Section ==== */}
      <section
        className="relative w-full min-h-[90vh] bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/images/Home/hero-bg.png')" }}
      >
        <div className="h-[100vh] flex flex-col">
          {/* Main Section */}
          <div className="mt-10 h-[70%] container mx-auto   flex flex-col lg:flex-row justify-between">
            {/* Text */}
            <div className="  flex flex-col justify-center gap-4">
              <p className="text-(--color-primary) text-lg ">
                Data • Vision • Scale • Future{" "}
              </p>
              <h1 className="text-2xl lg:text-6xl font-bold">
                Powering Ideas. <br /> Leading Industries
              </h1>
              <p className="text-lg">
                Exponential thinking. Rapid scale. Innovation that drives
                returns
              </p>

              <div className="flex gap-2 mt-3">
                <Button icon={<MoveRight />} variant="primary">
                  Chat with Us
                </Button>
                <Button variant="secondary">Our Services</Button>
              </div>
            </div>

            {/* Tesseract Logo */}
            <div className="flex items-center lg:mr-10">
              <Image
                src={"/images/Home/tesseract-hero-logo.png"}
                width={1000}
                height={1000}
                alt="Tesseract Logo"
                className="w-[500px] "
              />
            </div>
          </div>
          {/* Stats */}

          <div className="w-full flex justify-center  ">
            <div className="w-[65%] min-h-[120px] flex flex-col lg:flex-row justify-center bg-white-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 border-gray-100/20  ">
              <div className="w-8/10 flex justify-between">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="text-5xl font-bold">$850m+</span>
                  <span className="text-sm">Portfolio value generated</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 ml-10">
                  <span className="text-5xl font-bold">50+</span>
                  <span className="text-sm">Happy Clients</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 ml-10">
                  <span className="text-5xl font-bold">1000+</span>
                  <span className="text-sm">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Slider Section ==== */}
      <div className="w-full h-[100px] flex items-center ">
        {/* Slider */}
        <div className="flex  mx-auto gap-5 justify-between  ">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="" key={index}>
              <Image
                src={"/images/Home/slider-img.png"}
                width={500}
                height={500}
                className="w-30"
                alt="Slider Image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ==== About Us Section ==== */}

      <section className="py-12 w-full min-h-[90vh] flex flex-col ">
        {/* Text */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          {/* Heading */}
          <Heading>
            About <EmphasisText>Us</EmphasisText>
          </Heading>

          {/* Paragraph */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="leading-relaxed text-[15px]">
              Tesseract is a forward-thinking software development company
              focused on building reliable, scalable, and user-centric digital
              solutions. With a strong emphasis on modern technologies and clean
              architecture, Tesseract helps businesses transform ideas into
              high-performance applications that drive growth and efficiency.
              From custom software and web platforms to system integration and
              product engineering, the company combines technical expertise with
              a collaborative approach to deliver solutions that are secure,
              adaptable, and aligned with real-world business needs.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full mt-10 ">
          <Image
            src={"/images/Home/render 1.png"}
            width={1000}
            height={1000}
            alt="About Us Image"
            className="w-full h-500px"
          />
        </div>
      </section>

      {/*  ==== Expertise Section ===== */}
      <ExpertiseSection />

      {/* ==== Services Section ==== */}
      <ServicesSection />

      <div className="overflow-hidden"></div>
      <Ribbon
        className=" rotate-1 mb-2"
        items={[
          "Incbuation",
          "Acceleration",
          "Execution",
          "Ideation",
          "Innovation",
          "Excorcism",
        ]}
      />

      <Ribbon
        className=" mt-6 bg-white text-black -rotate-2 "
        items={[
          "Incbuation",
          "Acceleration",
          "Execution",
          "Ideation",
          "Innovation",
          "Excorcism",
        ]}
      />

      {/* ==== Technologies ==== */}
      <Technologies />
      {/* ==== Impact Section ==== */}
      <Impact />

      {/* ==== CTA Section ==== */}
      <CTASection />
    </>
  );
}
