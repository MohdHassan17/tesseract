import styles from "@/public/css/components/Testimonials.module.css";
import Image from "next/image";

//Components Import
import Heading from "@/ui/Heading";

export default function Testimonials() {
  return (
    <section className={styles["testimonials-section"]}>
      <div className="section-wrapper">
        <Heading
          subheading="Testimonials"
          headingWhite="What"
          headingPurple="They Say"
        />

        <Image
          src="/assets/section/clientele-bg.png"
          alt="Landing Background"
          fill
          className={styles["landing-img"]}
          priority
        />

        <div className={styles["testimonial-card-container"]} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

          
          <div className={styles["testimonial-card"]}  >
            <div className={styles["testimonial-wrapper"]}>
              <div className={styles["testimonial-text"]}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, nesciunt aut doloribus rerum quis incidunt, sequi
                  provident illum, neque obcaecati fuga accusantium unde.
                  Similique fugit exercitationem magnam minima quo beatae, in
                  velit neque molestiae corrupti necessitatibus. Accusamus
                  provident alias molestias.
                </p>
              </div>

              <div className={styles["testimonial-author"]}>
                <div className={styles["testimonial-author-info"]}>
                  <h3>John Doe</h3>
                  <p>CEO, Example Corp</p>
                </div>
                <div className="testimonial-image">
                  <Image
                    src="/assets/card/ceo.jpg"
                    alt="Testimonial Author"
                    width={100}
                    height={100}
                    className={styles["testimonial-author-image"]}
                  />
                </div>
              </div>
            </div>
          </div>
            <div className={styles["testimonial-card"]} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <div className={styles["testimonial-wrapper"]}>
              <div className={styles["testimonial-text"]}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, nesciunt aut doloribus rerum quis incidunt, sequi
                  provident illum, neque obcaecati fuga accusantium unde.
                  Similique fugit exercitationem magnam minima quo beatae, in
                  velit neque molestiae corrupti necessitatibus. Accusamus
                  provident alias molestias.
                </p>
              </div>

              <div className={styles["testimonial-author"]}>
                <div className={styles["testimonial-author-info"]}>
                  <h3>John Doe</h3>
                  <p>CEO, Example Corp</p>
                </div>
                <div className="testimonial-image">
                  <Image
                    src="/assets/card/ceo.jpg"
                    alt="Testimonial Author"
                    width={100}
                    height={100}
                    className={styles["testimonial-author-image"]}
                  />
                </div>
              </div>
            </div>
          </div>
            <div className={styles["testimonial-card"]} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <div className={styles["testimonial-wrapper"]}>
              <div className={styles["testimonial-text"]}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, nesciunt aut doloribus rerum quis incidunt, sequi
                  provident illum, neque obcaecati fuga accusantium unde.
                  Similique fugit exercitationem magnam minima quo beatae, in
                  velit neque molestiae corrupti necessitatibus. Accusamus
                  provident alias molestias.
                </p>
              </div>

              <div className={styles["testimonial-author"]}>
                <div className={styles["testimonial-author-info"]}>
                  <h3>John Doe</h3>
                  <p>CEO, Example Corp</p>
                </div>
                <div className="testimonial-image">
                  <Image
                    src="/assets/card/ceo.jpg"
                    alt="Testimonial Author"
                    width={100}
                    height={100}
                    className={styles["testimonial-author-image"]}
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
