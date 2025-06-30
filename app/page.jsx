import Image from "next/image";
import Link from "next/link";

import styles from "@/public/css/Landing.module.css";
import services from '@/data/services.json'
// UI Import
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import ServiceCard from "@/ui/ServiceCard";
import { FaPlus } from "react-icons/fa6";
// Components Import
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles["hero-section"]}>
        <video className={styles["bg-vid"]} autoPlay loop muted playsInline>
          <source src="assets\section\hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Beyond the Code. <br /> Into the Future.
          </h1>
          <Button text="Explore Services" />
        </div>
      </div>

      {/* What We Do Section */}

      <div className={`${styles["services-section"]} `}>
        <div className="section-wrapper">
          <Heading
            subheading="Our Services"
            headingWhite="What"
            headingPurple="We do"
          />

          <div
            className={styles["services-container"]}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className={styles["arrow"]}>+</div>
            {services
              .slice(0, 3) // 👈 only take the first 3 items
              .map((service) => (
                <ServiceCard
                  key={service.slug}
                  imageSrc="/assets/card/webdev.jpg"
                  title={service.title}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Statement Section */}
      <div
        className={styles["statement-section"]}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className={styles["statement-heading"]}>
          <h2>
            Helping Companies Develop <br />
            Their Brand with <span>Next-Gen Tech</span>
          </h2>
        </div>
        <div className={styles["statement-image"]}>
          <Image
            src="/assets/section/statement-bg.jpg"
            alt="Statement Background"
            width={500}
            height={500}
            className={styles["statement-img"]}
          />
        </div>

        <div className={styles["statement-button"]}>
          <Button text="Get Started" />
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
