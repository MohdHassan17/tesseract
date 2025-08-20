import React from "react";
import Heading from "@/ui/Heading";

function Industries() {
  const industries = [
    {
      title: "Automotive",
      description:
        "Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.",
    },
    {
      title: "Finance",
      description:
        "Get scalable custom solutions that enhance operational efficiency, boost data security, and streamline your financial services seamlessly.",
    },
    {
      title: "Real Estate",
      description:
        "Our custom real estate solutions simplify property management and sales, streamline operations, and enhance customer experience effectively.",
    },
    {
      title: "Hospitality",
      description:
        "Get user-friendly hospitality solutions that enhance guest experiences, boost satisfaction, and streamline hotel operations for better service delivery.",
    },
    {
      title: "Education",
      description:
        "Revolutionize ed-tech with innovative solutions that increase student engagement, simplify learning, and support personalized education experiences.",
    },
    {
      title: "Healthcare",
      description:
        "Our healthcare solutions streamline operations, reduce administrative tasks, and improve patient care for more efficient and responsive medical services.",
    },
  ];
  return (
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
          subheading={"Scope"}
          headingWhite={"Industries"}
          headingPurple={"We Serve"}
        />

        <p className="md:w-1/2 w-full text-xl md:text-2xl">
          We’ve partnered with clients across multiple industries, delivering
          tailored solutions to meet their unique challenges.
        </p>
      </div>
      <div className="container mx-auto pt-20 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 justify-center items-center">
        {/* Value Card */}

        {industries.map((industry, index) => (
          <div
            className="flex flex-col p-5 w-full h-full gap-2  rounded-[26px]  bg-black/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-[.5px] border-[#171717]      bg-gradient-to-r from-[#171717] to-transparent"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={index}
          >
            <h2 className="font-bold text-2xl  bg-gradient-to-r from-[#6e00ff] to-[#ff00e6] bg-clip-text text-transparent">
              {industry.title}
            </h2>
            <p className="text-xl"> {industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
