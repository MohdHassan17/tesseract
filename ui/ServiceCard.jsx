import Image from "next/image";


import styles from "@/public/css/ui/ServiceCard.module.css";

import { LuArrowRight } from "react-icons/lu";

import Button from "@/ui/Button";
import Link from "next/link";

export default function ServiceCard({ title, description, imageSrc, href }) {
  return (
    
       <div className={styles["service-card"]} >
     <div className={styles.serviceWrapper}>
        <div className={styles["service-image-container"]}>
          <Image
            src={`${imageSrc}`}
            alt={title}
            fill
            className={styles["service-image"]}
          />
        </div>

        <div className={styles["service-content"]}>
          <h2 className={styles["service-title"]}>{title}</h2>
          <p className={styles['service-description']}>{description}</p>
           <Link href={`${href}`}> <span className={styles.cardBtn}><LuArrowRight size={20}/></span></Link>
    </div>
    
    </div>
    </div>
   
  );
}
