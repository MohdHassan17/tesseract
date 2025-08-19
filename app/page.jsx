import Image from "next/image";
import Link from "next/link";

import styles from "@/public/css/Landing.module.css";
import services from "@/data/services.json";
// UI Import
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import { FaPlus } from "react-icons/fa6";
// Components Import
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import CaseStudiesSection from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import ModalForm from "@/ui/ModalForm";


export const metadata = {
  title: "Tesseract | Software & Web Development Company",
  description:
    "Tesseract is a software company that builds modern websites, scalable apps, and custom digital solutions. We help businesses grow with secure, innovative technology.",
  keywords: [
    "software company",
    "web development",
    "custom software",
    "enterprise solutions",
    "mobile apps",
    "digital transformation",
    "tesseractdev"
  ],
  openGraph: {
    title: "Tesseract | Software & Web Development Company",
    description:
      "Empowering businesses with innovative, reliable, and scalable software solutions.",
    url: "https://tesseractdev.org",
    siteName: "Tesseract",
    images: [
      {
        url: "http://tesseractdev.org/_next/image?url=%2Fassets%2Flogo%2FTesseract.png&w=256&q=75",
        width: 1200,
        height: 630,
        alt: "Tesseract Software Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles["hero-section"]}>
        <video className={styles["bg-vid"]} autoPlay loop muted playsInline>
          <source src="assets\section\bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.bottomFade}></div>
        <div className={styles.heroWrapper}>
          {/* Content Section */}
          <div className={styles["hero-content"]}>
            <h1 className={styles["hero-title"]}>
              Beyond the Code. <br /> Into the Future.
            </h1>
            <Button text="Explore Services" href={'/services'} />
          </div>
        </div>
      </div>



      {/* What We Do Section */}

      <div
      className={` py-20 px-5 w-full my-50 `}
      style={{
        backgroundImage: `
      radial-gradient(circle at top center, #6e00ff 0%, transparent 30%),
      url('/assets/ui/line-vector.svg')
    `,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <Heading
          subheading={"Services"}
          headingWhite={"What We"}
        headingPurple={"Do"}
        />

        <p className="md:w-1/2 w-full text-xl md:text-2xl">
          We deliver end-to-end software development and digital transformation services tailored to your unique business needs.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 pt-20 flex-wrap md:justify-between">
        {/* Service Card */}

        {services.map((service, index) => (
          <div
            className="flex flex-col justify-between p-5 w-full  md:w-[350px] gap-2 md:min-h-[350px] min-h-[300px] rounded-[26px]  bg-black/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-[.5px] border-[#171717]      bg-gradient-to-r from-[#171717] to-transparent"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={index}
          >
          
            <p className="text-xl">
              {" "}
                {service['small-desc']}
            </p>

              <h2 className="font-bold text-2xl  bg-gradient-to-r from-[#6e00ff] to-[#79006d] text-center p-5 rounded-[26px]">
                {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>



      {/* Case Studies */}

      <CaseStudiesSection />

      <Industries />

      {/* Statement Section */}
      <div
        className={`${styles["statement-section"]} my-16 mx-auto`}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className={styles["statement-heading"]}>
          <h2>
            Helping Companies Develop <br />
            Their Brand with <span>Next-Gen Tech</span>
          </h2>
        </div>

        <div className={styles["statement-button"]}>
          <Button text="Get Started" href='/services' />
        </div>
      </div>

      {/* Process Section */}
      <ProcessFlow />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQs */}

      <FAQs />

      {/* Clientele Section */}
      {/* <div className={styles["testimonial-section"]}>
              <Image
          src="/assets/section/clientele-bg.png"
          alt="Clientle Background"
          fill
          className={styles["landing-img", "testimonial-bg"]}
          priority
        />
        <div className="section-wrapper">
          <Heading subheading="Our Pride" headingWhite="Our" headingPurple="Clientele"/>
          </div>
      </div> */}
    </>
  );
}
