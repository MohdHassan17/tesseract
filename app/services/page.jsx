import styles from "@/public/css/ui/Services.module.css";
import servicesData from "@/data/services.json"; // Import the services JSON

// Component Imports
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import ProcessFlow from "@/components/ProcessFlow";
import FAQs from "@/components/FAQs";
import { FiArrowRight } from "react-icons/fi";

function Services() {
  return (
    <>
      <section className={styles["hero-section"]}>
        {/* Content Section */}
        <div className={styles.heroWrapper}>
          <div className={styles["hero-content"]}>
            <h1 className={styles["hero-title"]} data-aos="fade-up">
              Helping Brands <br />
              Grow with Digital Solutions
            </h1>
            <Button text="View Services" />
          </div>
        </div>

        <div className={styles["bottom-fade"]}></div>
      </section>

      {/* Services Categories */}
      <div className={`${styles["services-section"]}`}>
        <div className="section-wrapper flex flex-col gap-50 ">
          {servicesData.map((category) => (
            <div key={category.slug} className="bg-[radial-gradient(circle_at_center_center,_#6e00ff_0%,_transparent_35%)]">
              {/* Heading Section */}
              <Heading
                subheading={category.subheading}
                headingWhite={category.title}
                headingPurple={"Services"}
              />
              
              <div className="flex flex-col lg:flex-row w-full h-auto mt-20 md:gap-20 gap-10 lg:items-center justify-center">
                {/* Intro Text */}
                <div className="flex-1 flex flex-col gap-[25px]">
                  <h3 className="text-[2.5rem] font-bold lg:text-left">
                    {category.title}
                  </h3>
                  <p className="text-base md:text-left">
                    {category.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full lg:w-[400px] h-[400px] order-first lg:order-none overflow-hidden rounded-xl shadow-md">
                  <img
                    src={category.imageUrl}
                    alt={`${category.title} background`}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Service List */}
                <div className="flex-1 flex flex-col jusitfy-start gap-[25px] pr-10">
                  <ul className="list-none flex flex-col text-left gap-4">
                    {category.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex text-left justify-start items-center text-xl md:text-xl font-semibold gap-6 hover:text-[#7912ff] transition-all duration-300 ease-in-out"
                      >
                        {service.title} <FiArrowRight />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ProcessFlow */}
      <ProcessFlow />

      {/* FAQs */}
      <FAQs />
    </>
  );
}

export default Services;

