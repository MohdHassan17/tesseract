import styles from "@/public/css/ui/Heading.module.css";

import Image from "next/image";

function Heading({ subheading, headingWhite, headingBlack, headingPurple, alignment }) {
  return (
    <div className={
      alignment === "left" ? `${styles.heading} ${styles.left}` :
      `${styles.heading}`}>
      <h2 className={styles.subheading}>
 
        <span>{subheading}</span>
        
      </h2>

      <h2 className={styles.mainHeading}>
      {headingWhite || <span className={styles["blackHeading"]}>{headingBlack}</span>}{" "}

        <span className={styles["purpleHeading"]}>{headingPurple}</span>
      </h2>
    </div>
  );
}

export default Heading;
