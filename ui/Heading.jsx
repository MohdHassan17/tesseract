import styles from "@/public/css/ui/Heading.module.css";

import Image from "next/image";

function Heading({ subheading, headingWhite, headingBlack, headingPurple }) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.subheading}>
        <Image
          src={"/assets/ui/ellipse.png"}
          alt="Ellipse"
          width={50}
          height={50}
          className={styles.ellipse}
        />

        {subheading}
      </h2>

      <h2 className={styles.mainHeading}>
      {headingWhite || <span className={styles["blackHeading"]}>{headingBlack}</span>}{" "}

        <span className={styles["purpleHeading"]}>{headingPurple}</span>
      </h2>
    </div>
  );
}

export default Heading;
