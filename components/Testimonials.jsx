"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Heading from "@/ui/Heading";

export default function Testimonials() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".testimonial-card");
      let minDistance = Infinity;
      let closestIndex = null;
      const centerY = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenterY);

        // Trigger earlier (250px before exact center)
        if (distance < 150 && distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const testimonials = [
  {
    name: "Shakeel Abidi",
    title: "CEO, Nexifies",
    quote:
      "Tesseract transformed our online presence with a sleek, professional website that perfectly showcases our portfolio. The attention to detail, performance optimization, and smooth user experience have already attracted more client inquiries. They truly understood our vision and turned it into a reality we’re proud of.",
  },
  {
    name: "Malik Khalid Kamal",
    title: "CEO, At Ease PK",
    quote:
      "Our website redesign with Tesseract has completely changed how customers interact with our services. The single-page layout is intuitive, fast, and beautifully designed. They delivered on time, kept communication clear, and exceeded every expectation we had.",
  },
  {
    name: "Ali",
    title: "CEO, Premium Cleans",
    quote:
      "From concept to launch, Tesseract delivered a website that reflects the quality and professionalism of our cleaning services. The mobile-friendly design, clear service breakdowns, and fast loading speed have directly contributed to an increase in bookings. I couldn’t recommend them enough.",
  },
];



  return (
    <section className="relative w-full bg-fixed bg-[radial-gradient(circle_at_left_center,_#79006d_0%,_transparent_35%)] md:bg-[radial-gradient(circle_at_left_center,_#79006d_0%,_transparent_55%)] pb-[10%]">
      <div className="container py-20 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <Heading
            subheading="Testimonials"
            headingWhite="What"
            headingPurple="They Say"
          />

          <p className="md:w-1/2 w-full text-xl md:text-2xl">
            Proud to serve as the innovation partner for industry leaders who
            have experienced our expertise and excellence firsthand.
          </p>

          
        </div>

        {/* Testimonial Cards */}
        <div
          ref={containerRef}
          className="mt-[70px] flex flex-col items-center gap-[30px]"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
className={`testimonial-card relative w-[90%]  min-h-[350px] rounded-[26px] bg-black/60 border border-[#535353] shadow-lg backdrop-blur-md transition-transform duration-[800ms]`}
              style={{
                transform: `scale(${activeIndex === index ? 1 : 0.9})`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-[url('/assets/ui/quotes.svg')] bg-contain bg-no-repeat bg-center"></div>

              {/* Card Content */}
              <div className="w-full h-full flex flex-col p-6 md:p-10 gap-6">
                <div className="flex-grow flex items-center text-base md:text-2xl font-thin text-white mb-4m mt-10">
                  <p>{t.quote}</p>
                </div>

                <div className="flex gap-4 items-center rounded ">
                 
                  <div>
                    <h3 className="text-lg font-bold text-white">{t.name}</h3>
                    <p className="text-sm text-gray-300">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
