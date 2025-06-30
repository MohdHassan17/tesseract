import styles from "@/public/css/ui/Services.module.css";
import services from '@/data/services.json'

//Module Import

// Component Import
import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import ServiceCard from "@/ui/ServiceCard";
import ProcessFlow from "@/components/ProcessFlow";
import FAQs from "@/components/FAQs";
import Form from "@/ui/Form";

function Services() {
  return (
    <>
      <section className={styles["hero-section"]}>
        <img
          src="/assets/section/services.png"
          className={styles["bg-img"]}
          alt=""
        />

        {/* Content Section */}
        <div className={styles.heroWrapper}>
          <div className={styles["hero-content"]}>
            <h1 className={styles["hero-title"]} data-aos="fade-up">
              Helping Brands <br />
              Grow with <br />
              Digital Solutions
            </h1>
            <Button text="View Services" />
          </div>
          <div className={styles.formWrapper}>
<Form/>
          </div>
          
        </div>

        <div className={styles["bottom-fade"]}></div>
      </section>

      {/* Services Cards */}

      <div className={`${styles["services-section"]} `}>
        <div className="section-wrapper">
          <Heading
            subheading="Our Offerings"
            headingWhite="What"
            headingPurple="We Deliver"
          />

          <div className={styles["services-container"]} data-aos="fade-up">

            {services.map((service) =>  <ServiceCard
            key={service.slug}
              imageSrc="/assets/card/webdev.jpg"
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
            /> )}
           
           
          </div>
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
