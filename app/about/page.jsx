import FAQs from "@/components/FAQs";
import Industries from "@/components/Industries";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import styles from "@/public/css/About.module.css";
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import Image from "next/image";


export const metadata = {
  title: "About Us | Tesseract Software Development Company",
  description:
    "At Tesseract, we’re passionate about building technology that matters. Learn more about our team, mission, and expertise in delivering innovative software and web solutions.",
  keywords: [
    "about Tesseract",
    "software company team",
    "IT experts",
    "software development firm",
    "digital innovation"
  ],
  openGraph: {
    title: "About Us | Tesseract Software Development Company",
    description:
      "Learn about Tesseract’s mission, team, and dedication to delivering cutting-edge digital solutions.",
    url: "https://tesseractdev.org/about",
    siteName: "Tesseract",
    type: "article",
  },
};


function About() {

  

  



  const coreValues = [
    {
      title: "Customer Focus",
      description:
        "We put our clients at the center to build trust and build innovative software that exceeds expectations.",
    },
    {
      title: "Integrity",
      description:
        "Our teams embody integrity at all levels, serving as role models and ambassadors of our valued principles.",
    },
    {
      title: "Innovation",
      description:
        "We utilize the latest technologies to build what’s next and ensure rapid delivery to help you always be first to market.",
    },
    {
      title: "Quality",
      description:
        "From custom software to mobile apps, we are committed to delivering excellence in everything we build for you.",
    },
    {
      title: "Transparency",
      description:
        "While we move your project forward, we ensure you never lose control of its outcomes by keeping you updated.",
    },
    {
      title: "Collaboration",
      description:
        "Our teams work, learn, succeed, grow, and develop exceptional solutions for your business – together.",
    },
  ];

  return (
    <>
      <div
        className="w-full  flex flex-col gap-5 md:flex-row p-10 pt-40  relative"
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
        {/* Text */}
        <div className="flex flex-col flex-1 gap-5 text-left justify-center">
          <h1 className="font-[800] text-[#f6f6f6] lg:text-[3rem] text-[2.5rem]">
            We craft immersive, scalable digital experiences
          </h1>
        </div>

        {/* Image */}

        <div className=" flex-1 flex items-center justify-center  order-first lg:order-none overflow-hidden shadow-xl">
          <Image
            src="/assets/section/about-hero.webp"
            alt="About background"
            className="object-cover w-full h-full "
            width={400}
            height={400}
          />
        </div>

        {/* Paragraph */}

        <div className="flex flex-col flex-1 gap-5 text-left justify-center">
          <p className="text-lg">
 At Tesseract, we create immersive and scalable digital solutions that help businesses grow and stand out. Combining innovative technology, sleek design, and seamless functionality, we deliver websites, software, and e-commerce platforms that engage users and drive results. Our mission is simple — turn your vision into a powerful digital experience that inspires action.
          </p>
        </div>

        <div className={styles.bottomFade}></div>
      </div>

      <div
        className={`container mx-auto pt-10 w-full  bg-black section-wrapper`}
      >
        {" "}
        <Heading
          subheading={"Values"}
          headingWhite={"What We"}
          headingPurple={"Believe In"}
        />
        <div className="flex flex-col md:flex-row gap-10 pt-20 flex-wrap md:justify-between">
          {/* Value Card */}

          {coreValues.map((v) => (
            <div
              className="flex flex-col p-5 w-full  md:w-[350px] gap-2  rounded-[26px]"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              key={v.title}
            >
              <h2 className="font-bold text-3xl  bg-gradient-to-r from-[#6e00ff] to-[#ff00e6] bg-clip-text text-transparent">
                {v.title}
              </h2>
              <p className="text-xl">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CEO's Message */}

      <div
        className="w-full py-50 min-h-[80vh] h-auto"
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
        <div className="container mx-auto w-full    bg-black/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-[.5px] border-[#171717] ">
          <div className="w-full h-full flex flex-col p-6 md:p-10 gap-6" data-aos="fade-up" data-anchor-placement="center-bottom">
            <div className="flex-grow flex items-center text-xl md:text-3xl font-thin text-white mb-4m mt-10">
                <p>Great things happen when the visionary minds at Tesseract join forces, harnessing the power of AI, innovation, and deep industry expertise to turn ambitious ideas into reality. We focus on solving real business challenges with intelligent, future-ready solutions, because that’s where meaningful change and lasting value are created.</p>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="/assets/card/hassan.webp"
                alt={`photo`}
                width={80}
                height={80}
                className="rounded-full border-[3px] border-[var(--primary-color)] object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-white"> Muhammad Hassan Naseer</h3>
                <p className="text-sm text-gray-300">Founder, Tesseract </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <ProcessFlow />

      <Industries/>

      <FAQs />
    </>
  );
}

export default About;
