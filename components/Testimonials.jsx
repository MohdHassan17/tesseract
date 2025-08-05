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
    name: "Alice Johnson",
    title: "CTO, InnovateX",
    quote:
      "The team at Webxus delivered beyond expectations. From the very first meeting, they understood our unique requirements and provided creative, efficient solutions that transformed our vision into a working reality. Their attention to detail, technical expertise, and open communication made the process not only smooth but genuinely enjoyable. We’ve seen measurable growth in our product engagement since the launch.",
  },
  {
    name: "Mark Lee",
    title: "Founder, BuildMore",
    quote:
      "Webxus took our initial concept and developed it into a robust, fully functional platform that has streamlined our internal workflows and improved customer experience. Their dedication to meeting deadlines without compromising on quality was remarkable. Every interaction was professional yet personal, and it’s clear they are passionate about creating impactful solutions. We couldn’t have asked for a better partner for this project.",
  },
  {
    name: "Sophia Khan",
    title: "Marketing Head, DazzleNow",
    quote:
      "Our collaboration with Webxus was a breath of fresh air. They not only delivered exactly what we asked for but also proactively suggested enhancements that elevated the final product. The user interface design was sleek, intuitive, and aligned perfectly with our brand identity. Their development process was transparent, which kept us informed and confident every step of the way.",
  },
  {
    name: "Carlos Mendes",
    title: "Product Manager, LoopSoft",
    quote:
      "Speed, precision, and creativity — Webxus has it all. The project demanded a high level of technical complexity, but they approached it with confidence and delivered ahead of schedule. Post-launch, their support team continued to assist us promptly, ensuring any minor issues were addressed instantly. It’s rare to find a team that cares this much about the long-term success of their clients.",
  },
  {
    name: "Fatima Noor",
    title: "CEO, ShopSphere",
    quote:
      "Choosing Webxus was one of the best decisions for our business. They understood our business model, proposed innovative features we hadn’t considered, and executed them flawlessly. The platform they built has become a core part of our daily operations, improving efficiency and customer satisfaction. I appreciate their commitment to excellence and the genuine enthusiasm they bring to every project.",
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

          {/* Social Icons */}
          <div className="w-1/2 h-20 rounded flex items-center justify-center gap-4">
            <Image
              src={"/assets/card/linkedin.png"}
              width={50}
              height={50}
              alt="LinkedIn"
            />
            <div className="w-[1px] h-6 bg-gray-400"></div>
            <Image
              src={"/assets/card/instagram.png"}
              width={50}
              height={50}
              alt="Instagram"
            />
          </div>
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

                <div className="flex gap-4 items-center">
                  <Image
                    src="/assets/card/ceo.jpg"
                    alt={`${t.name} photo`}
                    width={80}
                    height={80}
                    className="rounded-full border-[3px] border-[var(--primary-color)] object-cover"
                  />
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
