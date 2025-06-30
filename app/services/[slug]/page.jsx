// app/services/[slug]/page.jsx
import services from "@/data/services.json";

import styles from "@/public/css/ui/Services.module.css";

//Icons Import
import {
  FaRocket,
  FaMobileAlt,
  FaBullseye,
  FaLock,
  FaCloudUploadAlt,
  FaDesktop,
  FaPalette,
  FaHashtag,
  FaHeart,
} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { HiOutlineScale } from "react-icons/hi";
import { AiOutlineSync } from "react-icons/ai";
import { RiWifiOffLine, RiChatSmile3Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiFeather } from "react-icons/fi";

import { FaApplePay } from "react-icons/fa6";

// Component Import

import Button from "@/ui/Button";
import Form from "@/ui/Form";
import Heading from "@/ui/Heading";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({ params }) {
  const iconMap = {
    FaRocket: FaRocket,
    FaMobileAlt: FaMobileAlt,
    BiSearchAlt: BiSearchAlt,
    SiNextdotjs: SiNextdotjs,
    FaBullseye: FaBullseye,
    HiOutlineScale: HiOutlineScale,
    AiOutlineSync: AiOutlineSync,
    FaLock: FaLock,
    FaCloudUploadAlt: FaCloudUploadAlt,
    RiWifiOffLine: RiWifiOffLine,
    FaDesktop: FaDesktop,
    FaPalette: FaPalette,
    FiFeather: FiFeather,
    RiChatSmile3Line: RiChatSmile3Line,
    IoMdNotificationsOutline: IoMdNotificationsOutline,
    FaHashtag: FaHashtag,
    FaHeart: FaHeart,
    // Add more as needed
  };

  const service = services.find((s) => s.slug === params.slug);

  if (!service) return <p>Service not found</p>;

  return (
    <>
      <section className={styles["hero-section"]}>
        <img
          src="/assets/section/service-detail.png"
          className={styles["bg-img"]}
          alt=""
        />

        {/* Content Section */}
        <div className={styles.heroWrapper}>
          <div
            className={`${styles["hero-content"]} ${styles["services-hero"]}`}
          >
            <div className={styles["heroText"]} data-aos="fade-up">
              <Heading subheading="service" headingWhite={service.title} />
              <p className={styles.heroPara}>{service.description}</p>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <Form />
          </div>
        </div>

        <div className={styles["bottom-fade"]}></div>
      </section>

      <section className={styles.featureSection}>
        <div className={styles.featureWrapper}>
          <div className="section-wrapper">
            <Heading subheading="Why Us" headingWhite="Features" />
            <div className={styles.featureContainer} data-aos="fade-up">
              {service.features?.map((feature, idx) => {
                const Icon = iconMap[feature.icon];

                return (
                  <div key={idx} className={styles.feature} data-aos='fade'>
                    {Icon && <Icon size={60}  />}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    <ProcessFlow/>

    <Testimonials/>

    <FAQs/>
    </>
    // <div style={{ padding: '2rem' }}>
    //   <h1>{service.title}</h1>
    //   <p>{service.description}</p>
    //   {service.features?.length > 0 && (
    //     <>
    //       <h3>Features:</h3>
    //       <ul>
    //         {service.features.map((feat, idx) => (
    //           <li key={idx}>{feat}</li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    // </div>
  );
}
