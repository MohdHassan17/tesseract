"use client";

import { useState } from "react";
import clsx from "clsx";

import styles from "@/public/css/components/FAQ.module.css";
import Heading from "@/ui/Heading";
import { FaMinus, FaPlus } from "react-icons/fa6";

function FAQs() {
  const [isOpen, setIsOpen] = useState(null);

  const openFunc = (id) => {
    if (isOpen == null) {
      setIsOpen(id);
    } else if (isOpen == id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }

    console.log(isOpen);
  };
  const FAQs = [
    {
      id: 0,
      title:
        "Why should we choose Tesseract for our software development needs?",
      description: `Tesseract stands out for delivering high-performance, scalable, and secure digital solutions tailored to your business goals. Our team combines technical expertise with creative problem-solving to ensure every project not only meets but exceeds expectations. We focus on long-term value, user experience, and measurable results.`,
    },
    {
      id: 1,
      title: "Do you provide custom solutions for different industries?",
      description: `Yes, we specialize in building industry-specific software solutions for sectors such as automotive, finance, real estate, healthcare, hospitality, and education. Every project is tailored to the unique needs of the industry, ensuring compliance, efficiency, and scalability.`,
    },
    {
      id: 2,
      title: "What is your development process like?",
      description: `Our process begins with a detailed consultation to understand your requirements, followed by creating a customized plan with timelines and milestones. We then move into agile-based development, ensuring transparency, regular updates, and thorough testing before deployment. Post-launch, we provide ongoing support and optimization.`,
    },
    {
      id: 3,
      title: "Do you offer post-launch support and maintenance?",
      description: `Absolutely. Our commitment doesn’t end at deployment. We provide ongoing support, updates, performance monitoring, and security maintenance to ensure your software remains reliable, optimized, and aligned with evolving business needs.`,
    },
    {
      id: 4,
      title: "How much does custom software development cost?",
      description: `The cost of custom software development depends on the project's scope, complexity, and features. At Tesseract, we offer transparent, project-based pricing tailored to your requirements. After our initial consultation, we provide a detailed quote outlining timelines, milestones, and deliverables.`,
    },
    {
      id: 5,
      title: "Can you integrate with my existing systems and tools?",
      description: `Yes. Our development team specializes in seamless API integration and custom connectors to ensure your new software works flawlessly with your existing systems, including CRM, ERP, payment gateways, and third-party applications — without disrupting your current operations.`,
    },
  ];

  return (
    <section
      className={`${styles["faqs-section"]} bg-fixed`}
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
      <div className={styles["faqs-wrapper"]}>
        <div className="section-wrapper flex flex-col gap-10 md:flex-row flex-wrap   ">
          <div className="flex-1 flex flex-col lg:jusitfy-start justify-center gap-[25px] lg:pr-10">
            {" "}
            <Heading
              subheading="FAQs"
              headingWhite="Learn"
              headingPurple="More"
              alignment={"left"}
            />
            <p className="text-base md:text-lg text-center md:text-left">
             

             At Tesseract, we believe in transparency and helping our clients make informed decisions. Our FAQ section answers the most common questions about our software development services, from project timelines and pricing to industry-specific solutions and post-launch support. Whether you’re a startup looking to build your first digital product or an enterprise seeking to modernize existing systems, these answers will guide you through what to expect when working with us.
            </p>
          </div>

          <div className={`${styles["faq-container"]} flex-1`}>
            {FAQs.map((faq) => (
              <div
                className={styles["faq"]}
                key={faq.id}
                onClick={() => openFunc(faq.id)}
                data-aos="fade-up"
              >
                <div className={styles["faq-title"]}>
                  <h2 className="p-2">{faq.title}</h2>
                  <span className={styles.plus}>
                    {isOpen === faq.id ? <FaPlus size={10}/> : <FaMinus size={10}/> }
                  </span>
                </div>

                <div
                  className={clsx(
                    styles["faq-content"],
                    isOpen === faq.id
                      ? styles["faq-open"]
                      : styles["faq-closed"]
                  )}
                >
                  <p className="">
                    {faq.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
