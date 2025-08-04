import FAQs from "@/components/FAQs";
import ProcessFlow from "@/components/ProcessFlow";
import Testimonials from "@/components/Testimonials";
import styles from "@/public/css/About.module.css";
import Button from "@/ui/Button";
import Image from "next/image";

function About() {
  return (
    <>
      <div
        className="w-full md:h-[90vh] flex flex-col gap-5 md:flex-row p-10 relative"
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
            src="/assets/section/about-hero.png"
            alt="About background"
            className="object-cover w-full h-full "
            width={400}
            height={400}
          />
        </div>

        {/* Paragraph */}

        <div className="flex flex-col flex-1 gap-5 text-left justify-center">
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            est, assumenda dolores, aliquid eveniet natus totam consequatur
            minus laborum iusto rem nisi sequi molestiae tempora similique.
            Libero reprehenderit ab tenetur.
          </p>
        </div>
      </div>

      <div className={styles.messageContainer}></div>

      <Testimonials />

      <ProcessFlow />

      <FAQs />
    </>
  );
}

export default About;
