"use client";

// Icon Imports
import { GrSelect } from "react-icons/gr";
import { FaCalendarDays, FaSitemap } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";

// Style Imports
import styles from "@/public/css/components/ProcessFlow.module.css";
import s from "@/public/css/Landing.module.css";

// Component Imports
import Heading from "@/ui/Heading";
import Image from "next/image";

export default function ProcessFlow() {
  const processFlow = [
    {
      id: 0,
      name: "Select Your Service",
      img: GrSelect,
      text: "Begin your journey with us by choosing the service that best fits your needs. Our range of IT solutions is designed to cater to various aspects of business operations, ensuring you find exactly what you're looking for to propel your business forward.",
      color: "#2b8c21",
    },
    {
      id: 1,
      name: "Schedule a Consultation",
      img: FaCalendarDays,
      text: "Once you've identified the service you're interested in, the next step is to arrange a meeting with our team. This initial consultation allows us to understand your business requirements in detail and discuss how our solutions can be tailored to meet those needs.",
      color: "#3063f4",
    },
    {
      id: 2,
      name: "Receive Your Customized Plan",
      img: FaSitemap,
      text: "Based on our consultation, we'll craft a personalized plan tailored to your business's unique challenges and objectives. This plan will outline the proposed solution, including timelines, processes, and any specific customizations that will be implemented to ensure the success of your project",
      color: "#de2b2e",
    },
    {
      id: 3,
      name: "Implementation and Success",
      img: IoIosCloudDone,
      text: "With the plan in place, we're ready to bring it to life. Our team will work closely with you throughout the implementation process, ensuring everything runs smoothly and efficiently. We're not just about delivering solutions; we're about creating success stories.",
      color: "#f58d06",
    },
  ];

  return (
    <>
      <section className={styles["process-flow-section"]}>
        <div className={styles.wrapper}>
          <div className="section-wrapper">
            <Heading
              subheading="Development Process"
              headingBlack="Vision to"
              headingPurple="Reality"
            />

            <div
              className="container px-5 mx-auto flex flex-wrap"
              style={{ marginTop: "50px" }}
            >
              {processFlow.map((process) => (
                <div
                  className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
                  key={process.id}
                  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center" >
                    <div className="h-full w-1 bg-black pointer-events-none"></div>
                  </div>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  text-black relative z-10 title-font font-medium text-sm"
                    style={{ backgroundColor: "#C77DFF", fontWeight: "bold" }}
                  >
                    {(process.id += 1)}
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div
                      className="flex-shrink-0 w-24 h-24   rounded-full inline-flex items-center justify-center"
                      style={{
                        color: "#f6f6f6",
                        background:
                          "linear-gradient(to bottom, #5A189A, #10002B",
                      }}
                    >
                      {<process.img className="w-12 h-12" />}
                    </div>
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2
                        className="font-medium  mb-1  "
                        style={{
                          color: "#171717",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          fontWeight: "bolder",
                          fontSize: "17px",
                        }}
                      >
                        {process.name}
                      </h2>
                      <p
                        className="leading-relaxed font-medium  "
                        style={{ fontSize: "13px" }}
                      >
                        {process.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
