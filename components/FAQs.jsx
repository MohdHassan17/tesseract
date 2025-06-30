"use client";

import { useState } from "react";
import clsx from "clsx";

import styles from "@/public/css/components/FAQ.module.css";
import Heading from "@/ui/Heading";

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
      title: "Why should we choose you?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis est fugit vitae dicta corrupti aut quas accusamus
                  distinctio qui similique!`,
    },

    {
      id: 1,
      title: "Why should we choose you?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis est fugit vitae dicta corrupti aut quas accusamus
                  distinctio qui similique!`,
    },

    {
      id: 2,
      title: "Why should we choose you?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis est fugit vitae dicta corrupti aut quas accusamus
                  distinctio qui similique!`,
    },

    {
      id: 3,
      title: "Why should we choose you?",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis est fugit vitae dicta corrupti aut quas accusamus
                  distinctio qui similique!`,
    },
  ];

  return (
    <section className={styles["faqs-section"]}>
      <div className={styles["faqs-wrapper"]}>
        <div className="section-wrapper">
          <Heading
            subheading="FAQs"
            headingWhite="Learn"
            headingPurple="More"
          />

          <div className={styles["faq-container"]}>
            {FAQs.map((faq) => (
              <div className={styles["faq"]} key={faq.id} onClick={() => openFunc(faq.id)}  data-aos="fade-up">
                <div className={styles["faq-title"]}>
                  <h2>Why Should We Choose You?</h2>
                  <span className={styles.plus}>
                    {isOpen === faq.id ? "-" : "+"}
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis est fugit vitae dicta corrupti aut quas accusamus
                    distinctio qui similique!
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
